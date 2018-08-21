import React, { Component } from 'react';
import quizQuestions from './quiz-questions';
import svgImages from './svg-import.js';

const shuffleArray = (array) => {
  return array.sort((a,b) => Math.random() < .5 ? 1 : -1);
};
let quizQuestionsShuffled;
let illustrationOrder;

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
    quizQuestionsShuffled = shuffleArray(quizQuestions[this.props.toggleQuestionSets]);
    illustrationOrder = shuffleArray([1,2,3,4,5]);

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
        questionCount,
        questionId: quizQuestionsShuffled[questionCount].questionId,
        question: quizQuestionsShuffled[questionCount].question,
        answerOptions,
        answer,
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

function Question(props) {
  return (
    <div className="question">
      <div className="question-count">
        <h1>Q{props.questionCount+1}</h1>
      </div>
      <div className="question-content">
        {props.questionContent}
      </div>
      <div className="answer-options">
        {props.answerOptions.map((answerOption, index) => {
          return (
            <AnswerOption
              key={index}
              answerIndex={index}
              answerOptionContent={answerOption.content}
              answer={props.answer}
              answerSelected={props.answerSelected}
              answerRevealed={props.answerRevealed}
              onAnswerSelected={props.onAnswerSelected.bind(this)}
            />
          );
        })}
      </div>
      <Illustration
        questionCount={props.questionCount}
        answer={props.answer}
        answerSelected={props.answerSelected}
        answerRevealed={props.answerRevealed}
      />
    </div>
  );
}

function AnswerOption(props) {
  function handleClick() {
    props.onAnswerSelected(props.answerIndex);
  }

  let content = '';
  if (props.answerRevealed) {
    if (props.answerIndex === props.answer) {
      content = ' [這個對]';
    } else if (props.answerIndex === props.answerSelected){
      content = ' [錯拉幹]';
    }
  }

  return (
    <div className="answer-option" onClick={handleClick}>
      {props.answerOptionContent}{content}
    </div>
  );
}

function Illustration(props) {
  let questionStatus;
  if (props.answerRevealed) {
    if (props.answerSelected === props.answer) {
      questionStatus = "illustration-success.svg";
    } else {
      questionStatus = "illustration-failure.svg";
    }
  } else {
    questionStatus = "illustration.svg";
  }

  let illustrationSourcePath = "illustrations/" + illustrationOrder[props.questionCount] + "/" + questionStatus;
  
  return (
    <div className="illustration">
      <object data={svgImages[illustrationSourcePath]} type="image/svg+xml"> </object>
    </div>
  );
}

export default Quiz;