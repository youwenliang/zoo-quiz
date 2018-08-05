import React, { Component } from 'react';
import Quiz from './Quiz';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'start',
      score: 0
    }
  }

  addScore() {
    let score = this.state.score+1;
    this.setState({
      score: score
    })
  }

  resetScore() {
    this.setState({
      score: 0
    });
  }

  switchView = (view) => {
    if (view === 'start') {
      this.resetScore();
    }

    this.setState({
      view: view
    })
  }

  render() {
    const viewContainerMapping = {
      'start': <Start view={this.state.view} switchView={this.switchView.bind(this)} />,
      'intro': <Intro view={this.state.view} switchView={this.switchView.bind(this)} />,
      'quiz': <Quiz view={this.state.view} switchView={this.switchView.bind(this)} score={this.state.score} addScore={this.addScore.bind(this)} />,
      'result': <Result view={this.state.view} switchView={this.switchView.bind(this)} score={this.state.score} />,
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

class Result extends Component {
  render() {
    return (
      <div className="result">
        <h1>結果</h1>
        <p>{this.props.score}</p>
        <div className="action-button" onClick={() => this.props.switchView('start')}>重新玩！</div>
      </div>
    );
  }
}

export default App;
