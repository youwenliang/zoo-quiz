const bgmAudio = require('../audio/Splashing_Around.mp3');
const switchAudio = require('../audio/jump01.mp3');
const nextAudio = require('../audio/jump04.mp3');
const successAudio = require('../audio/coin05.mp3');
const failureAudio = require('../audio/coin04.mp3');

class AudioLib {
  constructor() {
    this.library = {
      'bgm': new Audio(bgmAudio),
      'switch': new Audio(switchAudio),
      'next': new Audio(nextAudio),
      'success': new Audio(successAudio),
      'failure': new Audio(failureAudio),
    };
  }

  play(audioName) {
    if (this.library[audioName]) {
      this.library[audioName].play();
    }
  }

  playBGM() {
    this.library['bgm'].loop = true;
    this.library['bgm'].play();
  }
}

export default AudioLib;