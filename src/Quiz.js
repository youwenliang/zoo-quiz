import React, { Component } from 'react';
import quizQuestions from './quiz-questions';

const shuffleArray = (array) => {
  return array.sort((a,b) => Math.random() < .5 ? 1 : -1);
};
const quizQuestionsShuffled = shuffleArray(quizQuestions);

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionCount: 0,
      questionId: -1,
      question: '',
      answerOptions: [],
      answer: -1,
      answerSelected: -1,
      answerRevealed: false
    }
  }

  componentWillMount() {
    let answerOptions = shuffleArray(quizQuestionsShuffled[0].answers);
    let answer = answerOptions.findIndex(e => {
      return e.isCorrect;
    })

    this.setState({
      questionId: quizQuestionsShuffled[0].questionId,
      question: quizQuestionsShuffled[0].question,
      answerOptions,
      answer,   
    });
  }

  handleAnswerSelected(index) {
    if (!this.state.answerRevealed) {
      this.props.setPlayerAnswers(this.state.questionId, index === this.state.answer);
      this.setState({
        answerSelected: index,
        answerRevealed: true
      });
    }
  }

  setNextQuestion() {
    let questionCount = this.state.questionCount + 1;
    let answerOptions = shuffleArray(quizQuestionsShuffled[questionCount].answers);
    let answer = answerOptions.findIndex(e => {
      return e.isCorrect;
    })

    this.setState({
        questionCount: questionCount,
        questionId: quizQuestionsShuffled[questionCount].questionId,
        question: quizQuestionsShuffled[questionCount].question,
        answerOptions: answerOptions,
        answer: answer,
        answerRevealed: false
    });
  }

  render() {
    let nextStep;
    if (this.state.answerRevealed) {
      if (this.state.questionCount === quizQuestionsShuffled.length-1) {
        nextStep = <div className="action-button" onClick={() => this.props.switchView('result')}>看結果！</div>
      } else {
        nextStep = <div className="action-button" onClick={this.setNextQuestion.bind(this)}>下一題！</div>
      }
    }

    return (
      <div className="quiz">
        <Question
          questionCount={this.state.questionCount}
          questionId={this.state.questionId}
          questionContent={this.state.question}
          answerOptions={this.state.answerOptions}
          answer={this.state.answer}
          answerSelected={this.state.answerSelected}
          answerRevealed={this.state.answerRevealed}
          onAnswerSelected={this.handleAnswerSelected.bind(this)}
        />
        {nextStep}
      </div>
    );
  }
}

class Question extends Component {
  render() {
    return (
      <div className="question">
        <div className="questionCount">
          <h1>Q{this.props.questionCount+1}</h1>
        </div>
        <div className="questionContent">
          {this.props.questionContent}
        </div>
        <div className="answerOptions">
          {this.props.answerOptions.map((answerOption, index) => {
            return (
              <AnswerOption
                key={index}
                answerIndex={index}
                answerOptionContent={answerOption.content}
                answer={this.props.answer}
                answerSelected={this.props.answerSelected}
                answerRevealed={this.props.answerRevealed}
                onAnswerSelected={this.props.onAnswerSelected.bind(this)}
              />
            );
          })}
        </div>
        <Illustration
          answer={this.props.answer}
          answerSelected={this.props.answerSelected}
          answerRevealed={this.props.answerRevealed}
        />
      </div>
    );
  }
}

class AnswerOption extends Component {
  handleClick() {
    this.props.onAnswerSelected(this.props.answerIndex);
  }

  render() {
    let content = '';

    if (this.props.answerRevealed) {
      if (this.props.answerIndex === this.props.answer) {
        content = ' [這個對]';
      } else if (this.props.answerIndex === this.props.answerSelected){
        content = ' [錯拉幹]';
      }
    }

    return (
      <div className="answerOption" key="{this.props.answerIndex}" onClick={this.handleClick.bind(this)}>
        {this.props.answerOptionContent}{content}
      </div>
    );
  }
}

class Illustration extends Component {
  render() {
    let illustrationContent;
    if (this.props.answerRevealed) {
      if (this.props.answerSelected === this.props.answer) {
        illustrationContent = '插圖 [成功拉]';
      } else {
        illustrationContent = '插圖 [失敗拉]'
      }
    } else {
      illustrationContent = '插圖 [？？？]';
    }
    
    return (
      <div className="illustration">
        {illustrationContent}
      </div>
    );
  }
}

export default Quiz;