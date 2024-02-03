// CommonJSでのファイル操作の特徴：requireが使われている
// CommonJSはNode.jsでしか使えない。requireはnodejsでしが使えない
let fs = require('fs');
let num = Math.floor(Math.random() * 1e4);
fs.writeFileSync('test.txt', 'こんばんは、こんにちは');

fs.writeFileSync(`test${num}.txt`, `こんにちは、Mr.${num}さん`);

console.log(__dirname); // __dirnameは現在実行したscriptまでの絶対パスが記載されている
