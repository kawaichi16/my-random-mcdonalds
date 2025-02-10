// マクドナルドの簡易メニューリスト
const menuList = [
  "ハンバーガー",
  "チーズバーガー",
  "ビッグマック",
  "てりやきマックバーガー",
  "マックフライポテト (M)",
  "チキンマックナゲット (5ピース)",
  "フィレオフィッシュ",
  "ダブルチーズバーガー",
  "ソフトツイスト",
];

// ボタンと表示領域の要素を取得
const randomBtn = document.getElementById("randomBtn");
const menuResult = document.getElementById("menuResult");

// ボタンクリック時の処理
randomBtn.addEventListener("click", () => {
  // 0～menuList.length-1 の間でランダムな整数を得る
  const randomIndex = Math.floor(Math.random() * menuList.length);
  
  // ランダムに選んだメニューを表示
  menuResult.textContent = menuList[randomIndex];
});
