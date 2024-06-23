'use strict'

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
const storage = sessionStorage;
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