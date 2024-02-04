function sa() {
  console.log('こんばんは。');
}

function da() {
  console.log('おおげさ');
}

export function fa() {
  console.log('gagagagagagaga......');
}

export default () => {
  console.log('defaultです！！！');
};

// ESMではエクスポートする側にはexportを使う
export { sa, da };

function q(a, b) {
  return a + b;
}

function w(a, b) {
  return a + b;
}

const fs = require('fs');
console.log(fs);
