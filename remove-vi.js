const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    if (content.includes('<a href="#" class="lang-option" role="option">VI - Tiếng Việt</a>')) {
        content = content.replace(/<a href="#" class="lang-option" role="option">VI - Tiếng Việt<\/a>\r?\n?\s*/g, '');
        fs.writeFileSync(path.join(dir, file), content, 'utf8');
    }
});
console.log('VI language removed from all files.');
