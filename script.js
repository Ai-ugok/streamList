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
  op0.value = gameData;
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

  change() {
    // gameSelect要素内の子要素(option要素)を全て削除
    // gameS.innerHTML = '';

    // if (this.streamer == 'mssp') {
    //   const op1 = document.createElement('option');
    //   op1.textContent = 'NewスーパーマリオブラザーズWii';
    //   op1.value = 'newmario';
    //   gameS.insertBefore(op1, op0.nextElementSibling);

    //   const op2 = document.createElement('option');
    //   op2.textContent = 'スーパーマリオ3Dワールド';
    //   op2.value = 'mario3d';
    //   gameS.insertBefore(op2, op1.nextElementSibling);
    // }


  },

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