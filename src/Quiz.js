import React, { Component } from 'react';
import quizQuestions from './quiz-questions';
import svgImages from './svg-import.js';

const shuffleArray = (array) => {
  return array.sort((a,b) => Math.random() < .5 ? 1 : -1);
};

let quizQuestionsShuffled;

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
      answerRevealed: false,
      descriptionRevealed: false
    }
  }

  componentWillMount() {
    quizQuestionsShuffled = shuffleArray(quizQuestions[this.props.toggleQuestionSets]);
    this.props.shuffleIllustrationOrder();

    let answerOptions = shuffleArray(quizQuestionsShuffled[0].answers);
    let answer = answerOptions.findIndex(e => {
      return e.isCorrect;
    })

    this.setState({
      questionId: quizQuestionsShuffled[0].questionId,
      question: quizQuestionsShuffled[0].question,
      answerDescription: quizQuestionsShuffled[0].answerDescription,
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

      setTimeout(()=>{this.setState({
        descriptionRevealed: true
      })}, 1500);
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
        answerDescription: quizQuestionsShuffled[questionCount].answerDescription,
        answerOptions,
        answer,
        answerRevealed: false,
        descriptionRevealed: false
    });
  }

  render() {
    let nextStep;
    if (this.state.descriptionRevealed) {
      if (this.state.questionCount === quizQuestionsShuffled.length-1) {
        nextStep = <div className="action-btn" onClick={() => this.props.switchView('result')}>看結果！</div>
      } else {
        nextStep = <div className="action-btn" onClick={this.setNextQuestion.bind(this)}>下一題！</div>
      }
    }

    return (
      <div className="quiz">
        <Question
          questionCount={this.state.questionCount}
          questionId={this.state.questionId}
          questionContent={this.state.question}
          answerDescription={this.state.answerDescription}
          answerOptions={this.state.answerOptions}
          answer={this.state.answer}
          answerSelected={this.state.answerSelected}
          answerRevealed={this.state.answerRevealed}
          descriptionRevealed={this.state.descriptionRevealed}
          onAnswerSelected={this.handleAnswerSelected.bind(this)}
          illustrationOrder={this.props.illustrationOrder}
        />
        {nextStep}
      </div>
    );
  }
}

function Question(props) {
  return (
    <div className="question">
      <div className="question-wrapper">
        <div className="question-count">
          Q{props.questionCount+1}
        </div>
        <div className="question-content">
          {props.questionContent}
        </div>
      </div>
      <div className={"answer-options " + props.descriptionRevealed}>
        {props.answerOptions.map((answerOption, index) => {
          return (
            <AnswerOption
              key={index}
              answerIndex={index}
              answerOptionContent={answerOption.content}
              answer={props.answer}
              answerSelected={props.answerSelected}
              answerRevealed={props.answerRevealed}
              descriptionRevealed={props.descriptionRevealed}
              onAnswerSelected={props.onAnswerSelected.bind(this)}
            />
          );
        })}
        <AnswerDescription
          answerDescription={props.answerDescription}
          // descriptionRevealed={props.descriptionRevealed}
        />
      </div>
      <Illustration
        questionCount={props.questionCount}
        answer={props.answer}
        answerSelected={props.answerSelected}
        answerRevealed={props.answerRevealed}
        illustrationOrder={props.illustrationOrder}
      />
    </div>
  );
}

function AnswerOption(props) {
  function handleClick() {
    props.onAnswerSelected(props.answerIndex);
  }

  if (props.descriptionRevealed && props.answerIndex !== props.answer) {
    return null;
  }

  let answerStatus = '';
  if (props.answerRevealed) {
    if (props.answerIndex === props.answer) {
      answerStatus = 'correct';
    } else if (props.answerIndex === props.answerSelected){
      answerStatus = 'incorrect';
    }
  }

  return (
    <div className={"answer-option " + answerStatus } onClick={handleClick}>
      <p>
        {props.answerOptionContent}
      </p>
    </div>
  );
}

function AnswerDescription(props) {
  // if (!props.descriptionRevealed) {
  //   return null;
  // }
  return (
    <div className="answer-description">
      {props.answerDescription}
    </div>
  )
}

function Illustration(props) {
  let playerAnswerStatus = '';
  if (props.answerRevealed) {
    if (props.answerSelected === props.answer) {
      playerAnswerStatus = "success";
    } else {
      playerAnswerStatus = "failure";
    }
  }

  let illustrationSourcePath = "quiz/illustrations/" + props.illustrationOrder[props.questionCount] + "/illustration-" + playerAnswerStatus + ".svg";
  
  return (
    <div className={"illustration " + playerAnswerStatus}>
      <object data={svgImages[illustrationSourcePath]} type="image/svg+xml"> </object>
    </div>
  );
}

export default Quiz;