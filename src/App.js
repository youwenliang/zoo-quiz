import React, { Component } from 'react';
import Start from './components/Start';
import Intro from './components/Intro';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

const shuffleArray = (array) => {
  return array.sort((a,b) => Math.random() < .5 ? 1 : -1);
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'start',
      toggleQuestionSets: 0,
      playerScore: 0,
      playerAnswers: [],
      illustrationOrder: []
    };
    this.switchView = this.switchView.bind(this);
    this.setPlayerAnswers = this.setPlayerAnswers.bind(this);
    this.shuffleIllustrationOrder = this.shuffleIllustrationOrder.bind(this);
  }

  shuffleIllustrationOrder() {
    let illustrationOrder = shuffleArray([1,2,3,4,5]);
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
    if (view === 'start') {
      this.resetPlayerAnswers();
    }

    this.setState({
      view
    })
  }

  render() {
    const viewContainerMapping = {
      'start': <Start view={this.state.view} switchView={this.switchView} />,
      'intro': <Intro view={this.state.view} switchView={this.switchView} />,
      'quiz': <Quiz view={this.state.view} switchView={this.switchView} toggleQuestionSets={this.state.toggleQuestionSets} playerScore={this.state.playerScore} setPlayerAnswers={this.setPlayerAnswers} illustrationOrder={this.state.illustrationOrder} shuffleIllustrationOrder={this.shuffleIllustrationOrder} />,
      'result': <Result view={this.state.view} switchView={this.switchView} playerScore={this.state.playerScore} playerAnswers={this.state.playerAnswers} illustrationOrder={this.state.illustrationOrder} />,
    }
    let container = viewContainerMapping[this.state.view];

    return (
      <div className="App">
        {container}
      </div>
    );
  }
}

export default App;
