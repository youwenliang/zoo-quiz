const bgmPath = require('../audio/Splashing_Around.mp3');

class AudioLib {
  constructor() {
    this.library = {
      'bgm': new Audio(bgmPath)
    };
  }

  play(audioName) {
    this.library[audioName].play();
  }

  pause(audioName) {
    this.library[audioName].pause();
  }
}

export default AudioLib;