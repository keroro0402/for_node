function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

/*
CJSでモジュールを読み込む時の手順。と言うより必須の文言なので必ず覚えること！！！
 */

module.exports = {
  plus: plus,
  minus: minus,
};
