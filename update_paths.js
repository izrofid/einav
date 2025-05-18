import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

// Get the directory name using ES modules syntax
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'src', 'mapSvg.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// First, add className="hover:animate-pulse" to all path elements that don't have a className
const regexAddClass = /(<path\s+[^>]*?)(?!\sclassName=)>/g;
content = content.replace(regexAddClass, '$1 className="hover:animate-pulse">');

// For path elements that end without >
const regexAddClassNoClose = /(<path\s+[^>]*?)(?!\sclassName=)(\s*)$/gm;
content = content.replace(regexAddClassNoClose, '$1 className="hover:animate-pulse"$2');

// Write the updated content back to the file
fs.writeFileSync(filePath, content, 'utf8');
console.log('All paths updated with hover:animate-pulse class');
