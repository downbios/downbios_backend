import express, { RequestHandler } from "express";
import multer from "multer";
import fs from "fs";
import { uploadToDropbox } from "../services/dropbox";
import { connectDB } from "../database/db";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

const uploadHandler: RequestHandler = async (req, res) => {
  const { name, email } = req.body;
  const file = req.file;

  if (!name || !email || !file) {
    res.status(400).json({ error: "Todos os campos são obrigatórios." });
    return;
  }

  const dropboxPath = `${Date.now()}-${file.originalname}`;

  try {
    await uploadToDropbox(file.path, dropboxPath);

    const db = await connectDB();
    await db.run(
      `INSERT INTO uploads (name, email, filename) VALUES (?, ?, ?)`,
      [name, email, dropboxPath]
    );

    fs.unlinkSync(file.path);

    res.status(200).json({ message: "Upload realizado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao fazer upload para o Dropbox." });
  }
};

router.post("/", upload.single("file"), uploadHandler);

export default router;
