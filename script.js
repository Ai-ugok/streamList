'use strict'

// 必要な要素を取ってくる
// ↓ニコニコ動画
const NstreamerS = document.getElementById('streamerSelect-nico');
const NgameS = document.getElementById('gameSelect-nico');
const op0 = document.getElementById('option0');
const NpartS = document.getElementById('partSelect-nico');
const NminuteS = document.getElementById('minuteSelect-nico');
const NsecondS = document.getElementById('secondSelect-nico');
const sNT = document.getElementById('streamerNicoText');

// ↓YouTube
const YstreamerS = document.getElementById('streamerSelect-you');
const YgameS = document.getElementById('gameSelect-you');
const YpartS = document.getElementById('partSelect-you');
const YminuteS = document.getElementById('minuteSelect-you');
const YsecondS = document.getElementById('secondSelect-you');

// ストレージ
const storage = sessionStorage;
document.addEventListener('DOMContentLoaded', () => {

  // ↓ニコニコ動画
  const NstreamerData = storage.streamerNico;
  const NgameData = storage.gameNico;
  const NpartData = storage.partNumNico;
  const NminuteData = storage.minuteNico;
  const NsecondData = storage.secondNico;
  NstreamerS.value = NstreamerData;
  NgameS.value = NgameData;
  NpartS.value = NpartData;
  NminuteS.value = NminuteData;
  NsecondS.value = NsecondData;

  // ↓YouTube
  const YstreamerData = storage.streamerYou;
  const YgameData = storage.gameYou;
  const YpartData = storage.partNumYou;
  const YminuteData = storage.minuteYou;
  const YsecondData = storage.secondYou;
  YstreamerS.value = YstreamerData;
  YgameS.value = YgameData;
  YpartS.value = YpartData;
  YminuteS.value = YminuteData;
  YsecondS.value = YsecondData;

});

PetiteVue.createApp({

  // ↓ニコニコ動画
  streamerNico: '',
  gameNico: '',
  partNumNico: '',
  minuteNico: '',
  secondNico: '',

  // ↓YouTube
  streamerYou: '',
  gameYou: '',
  partNumYou: '',
  minuteYou: '',
  secondYou: '',

  submit() {
    // storage.store = this.streamer;
    // storage.store = this.game;
    // storage.store = this.partNum;
    // storage.store = this.minute;
    // storage.store = this.second;

    console.log(this.streamerNico)

    // ↓ニコニコ動画
    storage.setItem('streamerNico', this.streamerNico);
    storage.setItem('gameNico', this.gameNico);
    storage.setItem('partNumNico', this.partNumNico);
    storage.setItem('minuteNico', this.minuteNico);
    storage.setItem('secondNico', this.secondNico);

    // ↓YouTube
    storage.setItem('streamerYou', this.streamerYou);
    storage.setItem('gameYou', this.gameYou);
    storage.setItem('partNumYou', this.partNumYou);
    storage.setItem('minuteYou', this.minuteYou);
    storage.setItem('secondYou', this.secondYou);

  },

  remove() {

    // ↓ニコニコ動画
    storage.removeItem('streamerNico');
    storage.removeItem('gameNico');
    storage.removeItem('partNumNico');
    storage.removeItem('minuteNico');
    storage.removeItem('secondNico');

    // ↓YouTube
    storage.removeItem('streamerYou');
    storage.removeItem('gameYou');
    storage.removeItem('partNumYou');
    storage.removeItem('minuteYou');
    storage.removeItem('secondYou');

  }

}).mount();