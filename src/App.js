import React, { Component } from 'react';
import Start from './components/Start';
import Intro from './components/Intro';
import Quiz from './components/Quiz';
import Result from './components/Result';
import AudioLib from './resources/audio-library'; 
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'start',
      toggleQuestionSets: 0,
      playerScore: 0,
      playerAnswers: [],
      illustrationOrder: [],
      isBGMPlayed: false
    };
    this.switchView = this.switchView.bind(this);
    this.setIllustrationOrder = this.setIllustrationOrder.bind(this);
    this.setPlayerAnswers = this.setPlayerAnswers.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.audioLib = new AudioLib();
  }

  setIllustrationOrder(illustrationOrder) {
    this.setState({
      illustrationOrder
    });
  }


  setPlayerAnswers(questionId, isPlayerAnswerCorrect) {
    let playerScore = this.state.playerScore;
    let playerAnswers = this.state.playerAnswers;

    if (isPlayerAnswerCorrect) {
      playerScore++;
    }
    playerAnswers.push({
      questionId: questionId,
      isPlayerAnswerCorrect: isPlayerAnswerCorrect
    });

    this.setState({
      playerScore,
      playerAnswers
    });
  }

  resetPlayerAnswers() {
    this.setState({
      toggleQuestionSets: (this.state.toggleQuestionSets+1)%3,
      playerScore: 0,
      playerAnswers: []
    });
  }

  switchView(view) {
    this.playAudio('switch');
    if (view === 'start') {
      this.resetPlayerAnswers();
    }

    this.setState({
      view
    })
  }

  playAudio(audioName) {
    this.audioLib.play(audioName);
  }

  playBGM(){
    this.audioLib.playBGM();
    this.setState({
      isBGMPlayed: true
    });
  }

  render() {
    const viewContainerMapping = {
      'start': <Start view={this.state.view} switchView={this.switchView} />,
      'intro': <Intro view={this.state.view} switchView={this.switchView} />,
      'quiz': <Quiz view={this.state.view} switchView={this.switchView} toggleQuestionSets={this.state.toggleQuestionSets} playerScore={this.state.playerScore} setPlayerAnswers={this.setPlayerAnswers} illustrationOrder={this.state.illustrationOrder} setIllustrationOrder={this.setIllustrationOrder} playAudio={this.playAudio}/>,
      'result': <Result view={this.state.view} switchView={this.switchView} playerScore={this.state.playerScore} playerAnswers={this.state.playerAnswers} illustrationOrder={this.state.illustrationOrder} />,
    }
    let container = viewContainerMapping[this.state.view];
    let playThatBGM = this.state.isBGMPlayed ? null : <div className="play-that-bgm" onClick={this.playBGM.bind(this)}></div>;
    
    return (
      <div className="App">
        {playThatBGM}
        {container}
      </div>
    );
  }
}

export default App;
