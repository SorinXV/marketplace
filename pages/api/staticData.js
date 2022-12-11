import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), 'public');
  
  const fileContents = await fs.readFile(jsonDirectory + '/items.json', 'utf8');

  let s = fileContents.replace(/\\n/g, "\\n")
  .replace(/\\'/g, "\\'")
  .replace(/\\"/g, '\\"')
  .replace(/\\&/g, "\\&")
  .replace(/\\r/g, "\\r")
  .replace(/\\t/g, "\\t")
  .replace(/\\b/g, "\\b")
  .replace(/\\f/g, "\\f");
  s = s.replace(/[\u0000-\u0019]+/g,"");
  res.status(200).json(s);
}
