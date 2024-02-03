let fs = require('fs');

let path = require('path');

let num = Math.floor(Math.random() * 1e4);
let distPath = path.resolve(__dirname, `dist/${num}.txt`);

console.log(distPath);

fs.writeFileSync(distPath, `${num} です。`);
