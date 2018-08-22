import React, { Component } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import svgImages from './svg-import.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'quiz',
      toggleQuestionSets: 0,
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
      toggleQuestionSets: 1-this.state.toggleQuestionSets,
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
      'quiz': <Quiz view={this.state.view} switchView={this.switchView.bind(this)} toggleQuestionSets={this.state.toggleQuestionSets} playerScore={this.state.playerScore} setPlayerAnswers={this.setPlayerAnswers.bind(this)} />,
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
        <object className="svg svg-start-background" data={svgImages['start/background.svg']} type="image/svg+xml"> </object>
        <object className="svg svg-start-branch" data={svgImages['start/branch.svg']} type="image/svg+xml"> </object>
        <object className="svg svg-start-logo" data={svgImages['start/logo.svg']} type="image/svg+xml"> </object>
        <object className="svg svg-start-title" data={svgImages['start/title.svg']} type="image/svg+xml"> </object>
        <object className="svg svg-start-bat" data={svgImages['start/bat.svg']} type="image/svg+xml"> </object>
        <object className="svg svg-start-bird" data={svgImages['start/bird.svg']} type="image/svg+xml"> </object>
        <object className="svg svg-start-cat" data={svgImages['start/cat.svg']} type="image/svg+xml"> </object>
        <object className="svg svg-start-grass" data={svgImages['start/grass.svg']} type="image/svg+xml"> </object>
        <object className="svg svg-start-mouse" data={svgImages['start/mouse.svg']} type="image/svg+xml"> </object>
        <object className="svg svg-start-lizard" data={svgImages['start/lizard.svg']} type="image/svg+xml"> </object>
        <div className="action-btn start-btn" onClick={() => this.props.switchView('intro')}>開始！</div>
      </div>
    );
  }
}

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="intro-container">
          <div className="intro-title">遊戲介紹標題</div>
          <div className="intro-description">遊戲內容簡介遊戲內容簡介遊戲內容共二十字</div>
          <div className="action-btn intro-btn" onClick={() => this.props.switchView('quiz')}>開始！</div>
          <object className="svg svg-intro-avatar" data={svgImages['intro/avatar.svg']} type="image/svg+xml"> </object>
          <object className="svg svg-intro-dialog" data={svgImages['intro/dialog.svg']} type="image/svg+xml"> </object>
        </div>
      </div>
    );
  }
}

export default App;
