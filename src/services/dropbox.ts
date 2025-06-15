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
