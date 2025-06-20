import express from "express";
import { listFilesFromDropbox } from "../services/dropbox";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const files = await listFilesFromDropbox("");
    const fileNames = files
      .filter((file) => file[".tag"] === "file")
      .map((file) => file.name);

    res.json(fileNames);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar arquivos do Dropbox." });
  }
});

router.get("/:folder", async (req, res) => {
  const folder = req.params.folder;

  try {
    const files = await listFilesFromDropbox(folder);
    const fileNames = files
      .filter((file) => file[".tag"] === "file")
      .map((file) => file.name);

    res.json(fileNames);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar arquivos do Dropbox." });
  }
});

export default router;
