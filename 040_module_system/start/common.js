function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

/*
CJSでモジュールを読み込む時の手順。と言うより必須の文言なので必ず覚えること！！！
 */

module.exports = {
  plus: plus,
  minus: minus,
  multi, // 関数名とプロパティ名が同じ場合は省略できるので覚えると上級者感が出て良い！！
};

module.exports = {
  plus,
  minus,
  multi,
};
