function Chi() {
  return 'CJSで書かれたよ！！';
}

const path = require('path');
const fs = require('fs');
const resolvedPath = path.resolve(__dirname + '/text.txt');
console.log(resolvedPath);
fs.writeFileSync('text.txt', 'SEXしているので邪魔するな！');

module.exports = {
  Chi,
};
