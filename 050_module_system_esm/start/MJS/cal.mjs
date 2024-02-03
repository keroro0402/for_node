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
