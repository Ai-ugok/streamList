'use strict'

// 必要な要素を取ってくる
const streamerS = document.getElementById('streamerSelect');
const gameS = document.getElementById('gameSelect');
const op0 = document.getElementById('option0');
const partS = document.getElementById('partSelect');
const minuteS = document.getElementById('minuteSelect');
const secondS = document.getElementById('secondSelect');

// ストレージ
const storage = sessionStorage;
document.addEventListener('DOMContentLoaded', () => {
  const streamerData = storage.streamer;
  const gameData = storage.game;
  const partData = storage.partNum;
  const minuteData = storage.minute;
  const secondData = storage.second;
  streamerS.value = streamerData;
  gameS.value = gameData;
  partS.value = partData;
  minuteS.value = minuteData;
  secondS.value = secondData;
});

PetiteVue.createApp({
  streamer: '',
  game: '',
  partNum: '',
  minute: '',
  second: '',

  submit() {
    // storage.store = this.streamer;
    // storage.store = this.game;
    // storage.store = this.partNum;
    // storage.store = this.minute;
    // storage.store = this.second;

    storage.setItem('streamer', this.streamer); storage.setItem('game', this.game);
    storage.setItem('partNum', this.partNum);
    storage.setItem('minute', this.minute);
    storage.setItem('second', this.second);
  },

  remove() {
    storage.removeItem('streamer');
    storage.removeItem('game');
    storage.removeItem('partNum');
    storage.removeItem('minute');
    storage.removeItem('second');
  }

}).mount();