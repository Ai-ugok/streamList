'use strict'

// 必要な要素を取ってくる
// ↓ニコニコ動画
const NstreamerS = document.getElementById('streamerSelect-nico');
const NgameS = document.getElementById('gameSelect-nico');
const op0 = document.getElementById('option0');
const NpartS = document.getElementById('partSelect-nico');
const NminuteS = document.getElementById('minuteSelect-nico');
const NsecondS = document.getElementById('secondSelect-nico');

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
});

PetiteVue.createApp({
  // ↓ニコニコ動画
  streamerNico: '',
  gameNico: '',
  partNumNico: '',
  minuteNico: '',
  secondNico: '',

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
    storage.setItem('minuteNico', this.minuteNico);
    storage.setItem('secondNico', this.secondNico);
  },

  remove() {

    // ↓ニコニコ動画
    storage.removeItem('streamerNico');
    storage.removeItem('gameNico');
    storage.removeItem('partNumNico');
    storage.removeItem('minuteNico');
    storage.removeItem('secondNico');
  }

}).mount();