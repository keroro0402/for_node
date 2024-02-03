let fs = require('fs');

let num = Math.floor(Math.random() * 1e4);

fs.writeFileSync(__dirname + `/t${num}.txt`, `${num} です。`);
