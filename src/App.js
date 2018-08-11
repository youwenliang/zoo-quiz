import React, { Component } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'start',
      playerScore: 0,
      playerAnswers: []
    }
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
      playerScore: 0,
      playerAnswers: []
    });
  }

  switchView = (view) => {
    if (view === 'start') {
      this.resetPlayerAnswers();
    }

    this.setState({
      view: view
    })
  }

  render() {
    const viewContainerMapping = {
      'start': <Start view={this.state.view} switchView={this.switchView.bind(this)} />,
      'intro': <Intro view={this.state.view} switchView={this.switchView.bind(this)} />,
      'quiz': <Quiz view={this.state.view} switchView={this.switchView.bind(this)} playerScore={this.state.playerScore} setPlayerAnswers={this.setPlayerAnswers.bind(this)} />,
      'result': <Result view={this.state.view} switchView={this.switchView.bind(this)} playerScore={this.state.playerScore} playerAnswers={this.state.playerAnswers} />,
    }
    let container = viewContainerMapping[this.state.view];

    return (
      <div className="App">
        {container}
      </div>
    );
  }
}

class Start extends Component {
  render() {
    return (
      <div className="start">
        <h1>野外調查大冒險 A_____A</h1>
        <div className="action-button" onClick={() => this.props.switchView('intro')}>看介紹！</div>
      </div>
    );
  }
}

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <h1>題目介紹 A_____A</h1>
        <div className="action-button" onClick={() => this.props.switchView('quiz')}>開始玩！</div>
      </div>
    );
  }
}

export default App;
