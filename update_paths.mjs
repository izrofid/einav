import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'src', 'mapSvg.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Regular expression to find paths with id="MAP_*" but without style attribute
// This handles paths that don't already have the style attribute
const regex = /(<path\s+id="(MAP_[^"]+)"\s+[^>]*?)(?!style=)([^>]*?)(?=d=|transform=|opacity=)/g;

// Replace with the same content plus style attribute
const newContent = content.replace(regex, '$1style={getPathStyle("$2")} $3');

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('All paths updated with style attribute');
