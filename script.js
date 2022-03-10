const photoList = [
  "img/kota_0.jpg",
  "img/kota_1.jpg",
  "img/kota_2.jpg",
  "img/kota_3.jpg",
  "img/kota_4.jpg",
  "img/kota_5.jpg",
  "img/kota_6.jpg",
  "img/kota_7.jpg",
  "img/kota_8.jpg",
];

// この配列を使って処理を分ける
const functionController = [];
// functionController[i] === 0 =>　写真のページである
// functionController[i] === 1 =>　自己紹介ページである
// functionController[i] === 2 =>　好きな〇〇ページである

// 次へボタンの処理
function nextBtnClick(index) {
  if (functionController[index] === 0) {
    // 写真のページの時

    // 戻るボタンに色がつき、押せるようになる
    const backBtn = document.getElementById(`backBtn_${index}`);
    backBtn.className = "backBtn";

    // 写真が非表示になる
    const photo = document.getElementById(`photo_${index}`);
    photo.className = "hiddenBox";

    // 自己紹介Boxを表示
    const introBox = document.getElementById(`introBox_${index}`);
    introBox.className = "introBox";

    // 自己紹介ページであることを宣言
    functionController[index] = 1;
  } else {
    // 自己紹介ページの時
    // 次へボタンがグレーになり、押せなくなる
    const nextBtn = document.getElementById(`nextBtn_${index}`);
    nextBtn.className = "untouchableButton";

    // 自己紹介Boxが非表示になる
    const introBox = document.getElementById(`introBox_${index}`);
    introBox.className = "hiddenBox";

    //好きな〇〇が表示される
    const likeBox = document.getElementById(`likeBox_${index}`);
    likeBox.className = "likeBox";

    // 好きな〇〇ページであることを宣言
    functionController[index] = 2;
  }
}

// 戻るボタンの処理
function backBtnClick(index) {
  if (functionController[index] === 1) {
    // 自己紹介ページの時
    // 戻るボタンがグレーになり、押せなくなる
    const backBtn = document.getElementById(`backBtn_${index}`);
    backBtn.className = "untouchableButton";

    // 写真を表示
    const photo = document.getElementById(`photo_${index}`);
    photo.className = "photo";

    // 自己紹介Boxが非表示になる
    const introBox = document.getElementById(`introBox_${index}`);
    introBox.className = "hiddenBox";

    // 写真のページであることを宣言
    functionController[index] = 0;
  } else {
    // 好きな〇〇ページの時
    // 次へボタンに色がつき、押せるようになる
    const nextBtn = document.getElementById(`nextBtn_${index}`);
    nextBtn.className = "nextBtn";

    // 好きな〇〇Boxが非表示になる
    const likeBox = document.getElementById(`likeBox_${index}`);
    likeBox.className = "hiddenBox";

    // 自己紹介Boxを表示
    const introBox = document.getElementById(`introBox_${index}`);
    introBox.className = "introBox";

    // 自己紹介ページであることを宣言
    functionController[index] = 1;
  }
}
// ここまで関数


// ここからコンテンツ
for (let i = 0; i < 9; i++) {
  const main = document.getElementById("main");

  // 全体を包括する箱
  const wrapper = document.createElement("section");
  wrapper.className = "wrapper";
  main.appendChild(wrapper);

  // タイトル（名前）を追加
  const title = document.createElement("div");
  title.innerHTML = "1.辻山公大";
  title.className = "title";
  wrapper.appendChild(title);

  // 写真を追加
  const photo = document.createElement("img");
  photo.className = "photo";
  photo.src = photoList[i];
  photo.id = `photo_${i}`;
  wrapper.appendChild(photo);

  // 自己紹介Boxの追加
  const introBox = document.createElement("div");
  introBox.className = "hiddenBox";
  introBox.id = `introBox_${i}`;
  wrapper.appendChild(introBox);

  // 自己紹介Boxにタイトル（自己紹介）を追加
  const introTitle = document.createElement("p");
  introTitle.className = "introTitle";
  introTitle.innerHTML = "自己紹介";
  introBox.appendChild(introTitle);

  // 自己紹介メッセージを作成し、自己紹介Boxに追加
  const introMessageElements = ["出身地：神奈川県", "生年月日：2002年8月20日", "星座：獅子座", "血液型：A"];

  const introMessage = document.createElement("ul");
  introMessage.className = "introMessage";

  for (let j = 0; j < 4; j++) {
    const introMessageElement = document.createElement("li");
    introMessageElement.innerHTML = introMessageElements[j];
    introMessageElement.className = "introMessageElement";
    introMessage.appendChild(introMessageElement);
  }
  introBox.appendChild(introMessage);

  // 好きな〇〇Boxを作成
  const likeBox = document.createElement("div");
  likeBox.className = "hiddenBox";
  likeBox.id = `likeBox_${i}`;
  wrapper.appendChild(likeBox);

  // 好きな〇〇Boxにタイトルを追加
  const likeTitle = document.createElement("p");
  likeTitle.innerHTML = "好きな〇〇";
  likeTitle.className = "likeTitle";
  likeBox.appendChild(likeTitle);
  // 好きなものを箇条書き
  const likes = document.createElement("ul");
  likes.className = "likes";

  const likeElements = ["食べ物：ミラノ風ドリア", "場所：ゆうじの家", "歌手：ONE OK ROCK", "異性の芸能人：本田翼"];

  for (let k = 0; k < 4; k++) {
    const likeElement = document.createElement("li");
    likeElement.innerHTML = likeElements[k];
    likeElement.className = "likeElement";
    likes.appendChild(likeElement);
  }
  likeBox.appendChild(likes);

  // ボタンBoxの作成
  const buttonBox = document.createElement("div");
  buttonBox.className = "buttonBox";

  // ボタンを作成し、ボタンBoxに追加
  const backBtn = document.createElement("button");
  backBtn.innerHTML = "戻る";
  backBtn.className = "untouchableButton";
  backBtn.id = `backBtn_${i}`;
  backBtn.setAttribute("onclick", `backBtnClick(${i})`);
  buttonBox.appendChild(backBtn);

  const nextBtn = document.createElement("button");
  nextBtn.innerHTML = "次へ";
  nextBtn.className = "nextBtn";
  nextBtn.id = `nextBtn_${i}`;
  nextBtn.setAttribute("onclick", `nextBtnClick(${i})`);
  buttonBox.appendChild(nextBtn);

  wrapper.appendChild(buttonBox);

  // functionControllerにゼロをひとつ追加
  functionController.push(0);
}
