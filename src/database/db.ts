import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function connectDB() {
  return open({
    filename: "./uploads.db",
    driver: sqlite3.Database,
  });
}

export async function initDB() {
  const db = await connectDB();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS uploads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      filename TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
}
