const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.git' && f !== '.gemini') {
        walkDir(dirPath, callback);
      }
    } else {
      callback(dirPath);
    }
  });
}

const targetDir = __dirname;

walkDir(targetDir, (filePath) => {
  const ext = path.extname(filePath);
  if (ext === '.html' || ext === '.js') {
    const original = fs.readFileSync(filePath, 'utf8');
    const normalized = original.normalize('NFC');
    if (original !== normalized) {
      fs.writeFileSync(filePath, normalized, 'utf8');
      console.log(`Normalized: ${path.relative(targetDir, filePath)}`);
    }
  }
});
console.log('Unicode normalization completed!');
