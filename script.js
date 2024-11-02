'use strict'

// アイテムのリストを取得
const items = [...document.querySelectorAll(".item")];

// ドラッグ開始イベントを定義
const handleDragStart = (e) => {
  e.target.classList.add("dragging");

  // ドロップ効果の設定
  e.dataTransfer.effectAllowed = "move";

  // 転送するデータの設定
  const { id } = e.target;
  e.dataTransfer.setData("application/json", JSON.stringify({ id }));
};

// ドラッグ終了イベントを定義
const handleDragEnd = (e) => e.target.classList.remove("dragging");

// アイテムにイベントを登録
for (const item of items) {
  item.addEventListener("dragstart", handleDragStart, false);
  item.addEventListener("dragend", handleDragEnd, false);
}

// 要素が重なった際のイベントを定義
const handleDragEnter = (e) => {
  // 子要素へのドラッグを制限
  if ([...e.target.classList].includes("item")) {
    return;
  }

  e.target.classList.add("over");
};

// 要素が離れた際のイベントを定義
const handleDragLeave = (e) => e.target.classList.remove("over");

// 要素が重なっている最中のイベントを定義
const handleDragOver = (e) => {
  // 要素が重なった際のブラウザ既定の処理を変更
  e.preventDefault();

  // 子要素へのドラッグを制限
  if ([...e.target.classList].includes("item")) {
    // ドラッグ不可のドロップ効果を設定
    e.dataTransfer.dropEffect = "none";
    return;
  }

  // ドロップ効果の設定
  e.dataTransfer.dropEffect = "move";
};

// 要素がドロップされた際のイベントを定義
const handleDrop = (e) => {
  // 要素がドロップされた際のブラウザ既定の処理を変更
  e.preventDefault();
  e.target.classList.remove("over");

  // ブラウザ外からのファイルドロップを制限
  if (e.dataTransfer.files.length > 0) {
    return;
  }

  // 転送データの取得
  const { id } = JSON.parse(e.dataTransfer.getData("application/json"));

  // ドロップ先に要素を追加する
  e.target.appendChild(document.getElementById(id));
};

// ドロップ先のリストを取得
const boxes = [...document.querySelectorAll(".box")];

// ドロップ先にイベントを登録
for (const box of boxes) {
  box.addEventListener("dragenter", handleDragEnter, false);
  box.addEventListener("dragleave", handleDragLeave, false);
  box.addEventListener("dragover", handleDragOver, false);
  box.addEventListener("drop", handleDrop, false);
}

// 必要な要素を取ってくる
// ↓ニコニコ動画
const NstreamerS = document.getElementById('streamerSelect-nico');
const NgameS = document.getElementById('gameSelect-nico');
const NpartS = document.getElementById('partSelect-nico');
const NlastS = document.getElementById('lastSelect-nico');
const NminuteS = document.getElementById('minuteSelect-nico');
const NsecondS = document.getElementById('secondSelect-nico');

// ↓YouTube
const YstreamerS = document.getElementById('streamerSelect-you');
const YgameS = document.getElementById('gameSelect-you');
const YpartS = document.getElementById('partSelect-you');
const YlastS = document.getElementById('lastSelect-you');
const YhourS = document.getElementById('hourSelect-you');
const YminuteS = document.getElementById('minuteSelect-you');
const YsecondS = document.getElementById('secondSelect-you');

// ストレージ
const storage = localStorage;
// リロードしたら・・・
document.addEventListener('DOMContentLoaded', () => {

  // ↓ニコニコ動画
  const NstreamerData = storage.streamerNico;
  const NgameData = storage.gameNico;
  const NpartData = storage.partNumNico;
  const NlastData = storage.lastNico;
  const NminuteData = storage.minuteNico;
  const NsecondData = storage.secondNico;
  NstreamerS.value = NstreamerData;
  NgameS.value = NgameData;
  NpartS.value = NpartData;
  NlastS.value = NlastData;
  NminuteS.value = NminuteData;
  NsecondS.value = NsecondData;

  // ↓YouTube
  const YstreamerData = storage.streamerYou;
  const YgameData = storage.gameYou;
  const YpartData = storage.partNumYou;
  const YlastData = storage.lastYou;
  const YhourData = storage.hourYou;
  const YminuteData = storage.minuteYou;
  const YsecondData = storage.secondYou;
  YstreamerS.value = YstreamerData;
  YgameS.value = YgameData;
  YpartS.value = YpartData;
  YlastS.value = YlastData;
  YhourS.value = YhourData;
  YminuteS.value = YminuteData;
  YsecondS.value = YsecondData;

});

PetiteVue.createApp({

  // ↓ニコニコ動画
  streamerNico: '',
  gameNico: '',
  partNumNico: '',
  lastNico: 'LAST',
  minuteNico: '',
  secondNico: '',

  // ↓YouTube
  streamerYou: '',
  gameYou: '',
  partNumYou: '',
  lastYou: 'LAST',
  hourYou: '',
  minuteYou: '',
  secondYou: '',

  // 確定ボタンが押されたら・・・
  submit() {
    // storage.store = this.streamer;
    // storage.store = this.game;
    // storage.store = this.partNum;
    // storage.store = this.minute;
    // storage.store = this.second;

    // ↓ニコニコ動画
    storage.setItem('streamerNico', this.streamerNico);
    storage.setItem('gameNico', this.gameNico);
    storage.setItem('partNumNico', this.partNumNico);
    storage.setItem('lastNico', this.lastNico);
    storage.setItem('minuteNico', this.minuteNico);
    storage.setItem('secondNico', this.secondNico);

    // ↓YouTube
    storage.setItem('streamerYou', this.streamerYou);
    storage.setItem('gameYou', this.gameYou);
    storage.setItem('partNumYou', this.partNumYou);
    storage.setItem('lastYou', this.lastYou);
    storage.setItem('hourYou', this.hourYou);
    storage.setItem('minuteYou', this.minuteYou);
    storage.setItem('secondYou', this.secondYou);

  },

  // 削除ボタンが押されたら・・・
  remove() {

    // ↓ニコニコ動画
    storage.removeItem('streamerNico');
    storage.removeItem('gameNico');
    storage.removeItem('partNumNico');
    storage.removeItem('lastNico');
    storage.removeItem('minuteNico');
    storage.removeItem('secondNico');

    // ↓YouTube
    storage.removeItem('streamerYou');
    storage.removeItem('gameYou');
    storage.removeItem('partNumYou');
    storage.removeItem('lastYou');
    storage.removeItem('hourYou');
    storage.removeItem('minuteYou');
    storage.removeItem('secondYou');

  }

}).mount();