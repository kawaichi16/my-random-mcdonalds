// script.js

// マクドナルドの商品データ（例：ハンバーガー等）
// ※あくまで一部サンプル＆参考値、実際の公式情報と異なる場合があります。
// ※imageUrlも公式サイトの実URLではないダミーです。実際にご利用の際は著作権や規約をご確認ください。
const menuList = [
  {
    name: "ハンバーガー",
    calories: 253,
    protein: 12.9,
    fat: 8.7,
    carbs: 32.7,
    salt: 1.3,
    imageUrl: "https://www.example.com/images/hamburger.jpg"
  },
  {
    name: "チーズバーガー",
    calories: 307,
    protein: 15.2,
    fat: 12.3,
    carbs: 34.3,
    salt: 1.8,
    imageUrl: "https://www.example.com/images/cheeseburger.jpg"
  },
  {
    name: "ビッグマック",
    calories: 525,
    protein: 28.3,
    fat: 28.1,
    carbs: 40.9,
    salt: 2.9,
    imageUrl: "https://www.example.com/images/bigmac.jpg"
  },
  {
    name: "フィレオフィッシュ",
    calories: 331,
    protein: 14.7,
    fat: 13.7,
    carbs: 37.7,
    salt: 2.2,
    imageUrl: "https://www.example.com/images/filet-o-fish.jpg"
  },
  {
    name: "てりやきマックバーガー",
    calories: 478,
    protein: 14.9,
    fat: 26.3,
    carbs: 43.4,
    salt: 2.6,
    imageUrl: "https://www.example.com/images/teriyaki.jpg"
  }
  // 必要に応じて追加
];

// HTML上の要素を取得
const randomBtn = document.getElementById("randomBtn");
const menuName = document.getElementById("menuName");
const menuImage = document.getElementById("menuImage");
const nutritionInfo = document.getElementById("nutritionInfo");

// ボタンクリック時の処理
randomBtn.addEventListener("click", () => {
  // ランダムに商品を1つ取得
  const randomIndex = Math.floor(Math.random() * menuList.length);
  const item = menuList[randomIndex];

  // 商品名を表示
  menuName.textContent = item.name;

  // 画像を表示（img要素のsrcを変更）
  menuImage.src = item.imageUrl;
  menuImage.alt = item.name;

  // 栄養成分テーブルの内容を更新
  // (例: HTML文字列として生成してinnerHTMLで挿入)
  nutritionInfo.innerHTML = `
    <table>
      <tr><th>カロリー</th><td>${item.calories} kcal</td></tr>
      <tr><th>たんぱく質</th><td>${item.protein} g</td></tr>
      <tr><th>脂質</th><td>${item.fat} g</td></tr>
      <tr><th>炭水化物</th><td>${item.carbs} g</td></tr>
      <tr><th>食塩相当量</th><td>${item.salt} g</td></tr>
    </table>
  `;
});
