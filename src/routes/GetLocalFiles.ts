import express from "express";
import { connectDB } from "../database/db";

const router = express.Router();

router.get("/list", async (req, res): Promise<void> => {
  const search = req.query.search?.toString().toLowerCase() || "";

  try {
    const db = await connectDB();
    const rows = await db.all(
      `SELECT filename FROM uploads WHERE LOWER(filename) LIKE ? ORDER BY timestamp DESC`,
      [`%${search}%`]
    );

    res.json(rows.map((r) => r.filename));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar arquivos." });
  }
});

export default router;
