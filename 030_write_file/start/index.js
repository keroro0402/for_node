const fs = require('fs');

fs.writeFileSync('test.txt', 'こんばんは、こんにちは');

console.log(__dirname); // __dirnameは現在実行したscriptまでの絶対パスが記載されている
