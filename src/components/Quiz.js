import React, { Component } from 'react';
import { TimelineMax, Power1, Elastic } from 'gsap/all';
import quizQuestions from '../resources/quiz-questions';
import quizIllustrations from '../resources/quiz-illustrations';
import HtmlParser from 'html-react-parser';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() < .5 ? 1 : -1);
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

  showQuestion() {
    let answerOption = this.questionNode.querySelectorAll('.answer-option');
    let description = this.questionNode.querySelectorAll('.answer-description');
    let content = this.questionNode.querySelector('.question-content');
    let options = this.questionNode.querySelector('.answer-options');
    let illustration = this.questionNode.querySelector('.illustration');
    let tlshowQuestion = new TimelineMax();
    tlshowQuestion
      .set(answerOption[0], { left: 0 })
      .set(answerOption[1], { left: "278px" })
      .set(answerOption[2], { left: "556px" })
      .set(description, { opacity: 0, visibility: "hidden" })
      .fromTo(content, .5, { opacity: 0, ease: Power1.easeInOut }, { opacity: 1, ease: Power1.easeInOut })
      .fromTo(options, .5, { opacity: 0, ease: Power1.easeInOut }, { opacity: 1, ease: Power1.easeInOut }, "-=0.25")
      .fromTo(illustration, .5, { opacity: 0, ease: Power1.easeInOut }, { opacity: 1, ease: Power1.easeInOut }, "-=0.25");
  }

  showDescription(){
    setTimeout(() => {
      this.setState({
        descriptionRevealed: true
      });
      let correct = this.questionNode.querySelectorAll('.answer-option.correct');
      let description = this.questionNode.querySelectorAll('.answer-description');

      let tlButtonMove = new TimelineMax({
        repeat: -1,
        pause: true
      });
  
      tlButtonMove
        .to(this.btn, .25, {scale: 1.04, ease: Elastic.easeIn})
        .from(this.btn, .75, {scale: 1.04, ease: Elastic.easeOut});

      let tlshowDescription = new TimelineMax();
      tlshowDescription
        .to(correct, .25, { left: 0, ease: Power1.easeInOut })
        .set(description, { visibility: "visible" })
        .to(description, .25, { opacity: 1, ease: Power1.easeInOut })
        .add(tlButtonMove.play(), .25);
    }, 2500);
  }

  componentWillMount() {
    quizQuestionsShuffled = shuffleArray(quizQuestions[this.props.toggleQuestionSets]);
    this.props.setIllustrationOrder(quizQuestionsShuffled.map((value) => {
      return value.illustrationIndex;
    }));

    let answerOptions = shuffleArray(quizQuestionsShuffled[0].answers);
    let answer = answerOptions.findIndex(e => {
      return e.isCorrect;
    })

    this.setState({
      questionId: quizQuestionsShuffled[0].questionId,
      question: quizQuestionsShuffled[0].question,
      answerDescription: quizQuestionsShuffled[0].answerDescription,
      illustrationIndex: quizQuestionsShuffled[0].illustrationIndex, 
      answerOptions,
      answer,   
    });
  }

  setRef(node) {
    this.questionNode = node;
  }

  componentDidMount() {
    this.showQuestion();
  }

  revealAnswer(index) {
    this.props.setPlayerAnswers(this.state.questionId, index === this.state.answer);
    this.setState({
      // answerSelected: index,
      answerRevealed: true
    });
    this.showDescription();
    this.props.playAudio(index === this.state.answer ? 'success':'failure');
  }

  handleAnswerSelected(index) {
    if (!this.state.answerRevealed) {
      this.setState({
        answerSelected: index
      });
      let illustration = this.questionNode.querySelectorAll('.illustration');
      let tlflipIllustration = new TimelineMax();
      tlflipIllustration
        .to(illustration, .25, { rotationY: 90, ease: Power1.easeIn })
        .to(illustration, .25, { rotationY: 0, ease: Power1.easeOut })
        .call(() => this.revealAnswer(index), null, null, .25);
    }
  }

  setNextQuestion() {
    this.props.playAudio('next');
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
        illustrationIndex: quizQuestionsShuffled[questionCount].illustrationIndex,
        answerOptions,
        answer,
        answerSelected: -1,
        answerRevealed: false,
        descriptionRevealed: false
    });
    this.showQuestion();
  }

  render() {
    let nextStep;
    if (this.state.descriptionRevealed) {
      if (this.state.questionCount === quizQuestionsShuffled.length-1) {
        nextStep = <div className="quiz-btn action-btn" onClick={() => this.props.switchView('result')} ref={(el) => {this.btn = el}}>看結果！</div>
      } else {
        nextStep = <div className="quiz-btn action-btn" onClick={this.setNextQuestion.bind(this)} ref={(el) => {this.btn = el}}>下一題！</div>
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
          illustrationIndex={this.state.illustrationIndex}
          setRef={this.setRef.bind(this)}
        />
        {nextStep}
      </div>
    );
  }
}

function Question(props) {
    return (
      <div className="question" ref={props.setRef}>
        <div className="question-wrapper">
          <div className="question-count">
            Q{props.questionCount+1}
          </div>
          <div className="question-content">
            {HtmlParser(props.questionContent)}
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
            answerDescription={HtmlParser(props.answerDescription)}
          />
        </div>
        <Illustration
          questionCount={props.questionCount}
          answer={props.answer}
          answerSelected={props.answerSelected}
          answerRevealed={props.answerRevealed}
          illustrationIndex={props.illustrationIndex}
        />
      </div>
    );
}

function AnswerOption(props) {
  function handleClick() {
    if (props.answerSelected < 0) {
      props.onAnswerSelected(props.answerIndex);
    }
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
  return (
    <div className="answer-description">
      {props.answerDescription}
    </div>
  )
}

function Illustration(props) {
  let playerAnswerStatus = "question";
  if (props.answerRevealed) {
    if (props.answerSelected === props.answer) {
      playerAnswerStatus = "success";
    } else {
      playerAnswerStatus = "failure";
    }
  }

  if (!props.illustrationIndex) {
    return <div className={"illustration " + playerAnswerStatus}></div>;
  }

  return (
    <div className={"illustration " + playerAnswerStatus}>
      {quizIllustrations[props.illustrationIndex][playerAnswerStatus]}
    </div>
  );
}

export default Quiz;