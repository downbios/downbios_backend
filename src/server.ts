import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initDB } from "./database/db";
import uploadRoutes from "./routes/Upload";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use("/upload", uploadRoutes);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});
