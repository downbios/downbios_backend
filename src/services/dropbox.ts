import { Dropbox } from "dropbox";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

export const dbx = new Dropbox({
  accessToken: process.env.ACCESS_TOKEN,
});

export async function uploadToDropbox(localPath: string, dropboxPath: string) {
  const contents = fs.readFileSync(localPath);
  const response = await dbx.filesUpload({
    path: `/${dropboxPath}`,
    contents,
    mode: { ".tag": "overwrite" },
  });
  return response;
}

export async function listFilesFromDropbox(folderPath: string = "") {
  const normalizedPath = normalizeDropboxPath(folderPath);

  try {
    const response = await dbx.filesListFolder({ path: normalizedPath });
    return response.result.entries;
  } catch (error) {
    console.error("Erro ao listar arquivos do Dropbox:", error);
    throw error;
  }
}

function normalizeDropboxPath(inputPath: string): string {
  const trimmed = inputPath.trim().replace(/^\/+|\/+$/g, "");
  return trimmed === "" ? "" : `/${trimmed}`;
}
