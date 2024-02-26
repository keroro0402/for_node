const fs = require('fs'); // commonJSの記法

/**
 * const fs = require("fs"); //
 * fs.writeFileSync(ファイルを書き込む階層　＋　ファイル名, "ファイルに書き込む内容")
 * const fs = require("fs"
 * fs.writeFileSync("ファイルを書き込む階層＋ファイル名" , "ファイルに書き込む内容")
 * const fs = require("fs")
 * fs.writeFileSync("書き込むファイル名", "書き込む内容")
 * fs.writeFileSync("書き込むファイル名", "書き込む内容")
 * fs.writeriteriteriteiriteriterite
 * fs.fs.fs.fs.fs.fs.fs.fs.fs.fs.fs.fs.fs.fs.sf.fs
 * fs.fs.fs.fs.fs.fs.fs.fs.fs.fs.fs.fs.fs.
 * fs.fs.fs.fs.fs.fs.fs
 * fs.sf.fs.f.s
 * const fs = require("fs");
 * fs.writeFIleSync("書き込むファイル名","書き込む内容")
 * const fs = require("fs");
 * fs.writeFileSync("ファイル名", "ファイルに書き込む内容")
 * const fs = require("fs");
 * const fs = require("fs");
 * const fs = require("fs");
 * const fs = require("fs");
 * cosnt fs = require("fs");
 * const fs = require("fs");
 * const fs = require("fs");
 * const fs = requite("fs");
 * const fs = requite("fs");
 * const fs = require("fs");
 * const fs = require("fs");
 *
 * fs.writeFileSync("ファイル名", "書き込む内容")
 * const fs = require("fs");
 * fs.writeFileSync("ファイル名","書き込む内容")
 */

const toExportDir = '/Users/yamamototsuyoshi/Desktop/for_node/dastDir/'; // 書き込み先階層
const num = Math.floor(Math.random() * 1e5); // ファイル名
const file = num + '.txt';

fs.writeFileSync(
  toExportDir + file,
  'こんばんは、これは' + num + 'のファイルです！！！'
);

const path = require('path');
const targetPath = path.resolve(__dirname + '../../dist/test.txt');
console.log(targetPath);

// const path = require('path');
// const targetPass = path.resolve(__dirname + '../../SEXMachine/test.txt');
// console.log(targetPass);

// const path = require('path');
// const distPath = path.resolve(__dirname, '../../../dist/test.txt'); // path.resolve(相対パスを含めたパスを絶対パスに変換する)
// console.log(distPath);
