import React, { Component } from 'react';
import { TimelineMax, Power1, Elastic } from 'gsap/all';
import resultDescriptions from './result-descriptions';
import svgImages from './svg-import.js';

// let mock = {};
// mock.playerScore = 0;
// mock.playerAnswers = [
//   {questionId: 1, isPlayerAnswerCorrect: true},
//   {questionId: 2, isPlayerAnswerCorrect: false},
//   {questionId: 3, isPlayerAnswerCorrect: true},
//   {questionId: 4, isPlayerAnswerCorrect: false},
//   {questionId: 5, isPlayerAnswerCorrect: true}
// ];
// mock.illustrationOrder = [1, 5, 4, 3, 2];

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animalDisplayed: 0
    }
  }

  componentDidMount() {
    this.resultIllustration = this.result.querySelectorAll('.result-illustration');
    this.resultDescription = this.result.querySelectorAll('.result-description');
    let tlshowResult = new TimelineMax();
    tlshowResult
      .to(this.focus, .25, {scale: 1.2, ease: Power1.easeOut})
      .fromTo(this.title, .25, {scale: 0, ease: Power1.easeIn}, {scale: 1, ease: Power1.easeIn}, "+=.25")
      .fromTo(this.details, .25, {scale: 0, ease: Power1.easeIn}, {scale: 1, ease: Power1.easeIn})
      .call(() => this.showResultDetails(), null, null, 1.25)
      .to(this.focus, .25, {scale: 1.6, ease: Power1.easeInOut}, "+=1.5")
      .to(this.title, .25, {y: -480, ease: Power1.easeInOut}, "-=.25")
      .to(this.details, .25, {y: -500, ease: Power1.easeInOut}, "-=.25")
      .to(this.resultIllustration, .5, {opacity: 1, scale: 1, ease: Elastic.easeInOut})
      .to(this.resultDescription, .25, {opacity: 1, ease: Power1.easeInOut})
      .to(this.actionBtn, .25, {opacity: 1, ease: Power1.easeInOut}, "-=.25");
  }

  showResultDetails() {
    let i = setInterval(() => {
      let animalDisplayed = this.state.animalDisplayed+1;
      this.setState({
        animalDisplayed,
      })
      if(this.state.animalDisplayed === 5) {
          clearInterval(i);
      }
    }, 250);
  }

  restartGame = () => {
    let tlending = new TimelineMax();
    tlending
      .to(this.focus, .25, {scale: 2.4, ease: Power1.easeIn})
      .to(this.title, .25, {opacity: 0, ease: Power1.easeIn}, "-=.25")
      .to(this.details, .25, {opacity: 0, ease: Power1.easeIn}, "-=.25")
      .to(this.resultIllustration, .5, {opacity: 0, scale: 0, ease: Elastic.easeInOut}, "-=.25")
      .to(this.resultDescription, .25, {opacity: 0, ease: Power1.easeInOut}, "-=.25")
      .to(this.actionBtn, .25, {opacity: 0, ease: Power1.easeInOut}, "-=.25")
      .call(() => this.props.switchView('start'), null, null, .5);
  }

  render() {
    // return (
    //   <div className="result" ref={(el) => {this.result = el}}>
    //     <div className="result-focus" ref={(el) => {this.focus = el}}></div>
    //     <div className="result-title" ref={(el) => {this.title = el}}>
    //       總共捕獲<span class="result-score">{mock.playerScore}</span>隻
    //     </div>
    //     <div className="result-details" ref={(el) => {this.details = el}}>
    //       {mock.playerAnswers.map((playerAnswer, index) => {
    //         return (
    //           <PlayerAnswer
    //             key={index}
    //             answerOrder={index}
    //             animalDisplayed={this.state.animalDisplayed}
    //             illustrationOrderIndex={mock.illustrationOrder[index]}
    //             isPlayerAnswerCorrect={playerAnswer.isPlayerAnswerCorrect}
    //           />
    //         );
    //       })}
    //     </div>
    //     <ResultIllustration playerScore={mock.playerScore} />
    //     <ResultDescription playerScore={mock.playerScore} />
    //     <div className="action-btn intro-btn result-btn" onClick={this.restartGame} ref={(el) => {this.actionBtn = el}}>再玩一次！</div>
    //   </div>
    // );
    return (
      <div className="result" ref={(el) => {this.result = el}}>
        <div className="result-focus" ref={(el) => {this.focus = el}}></div>
        <div className="result-title" ref={(el) => {this.title = el}}>
          總共捕獲<span class="result-score">{this.props.playerScore}</span>隻
        </div>
        <div className="result-details" ref={(el) => {this.details = el}}>
          {this.props.playerAnswers.map((playerAnswer, index) => {
            return (
              <PlayerAnswer
                key={index}
                answerOrder={index}
                animalDisplayed={this.state.animalDisplayed}
                illustrationOrderIndex={this.props.illustrationOrder[index]}
                isPlayerAnswerCorrect={playerAnswer.isPlayerAnswerCorrect}
              />
            );
          })}
        </div>
        <ResultIllustration playerScore={this.props.playerScore} />
        <ResultDescription playerScore={this.props.playerScore} />
        <div className="action-btn intro-btn result-btn" onClick={this.restartGame} ref={(el) => {this.actionBtn = el}}>再玩一次！</div>
      </div>
    );
  }
}

function PlayerAnswer(props) {
  let isPlayerAnswerCorrectMapping = {
    0: "incorrect",
    1: "correct"
  }

  let correctIndicator = (props.animalDisplayed-1 < props.answerOrder) ? "": isPlayerAnswerCorrectMapping[+props.isPlayerAnswerCorrect];

  return (
    <div className={"detail-per-question "+ correctIndicator}>
      <object className="svg-result-each" data={svgImages['result/each/' + props.illustrationOrderIndex + '.svg']} type="image/svg+xml"> </object>
    </div>
  );
}

function ResultIllustration(props) {
  let ResultIllustrationSet;

  switch (props.playerScore) {
    case 0:
      ResultIllustrationSet = <OkayIllustraionSet />
      break;
    case 1:
    case 2:
      ResultIllustrationSet = <NiceIllustraionSet />
      break;
    case 3:
    case 4:
      ResultIllustrationSet = <GreatIllustraionSet />
      break;
    case 5:
      ResultIllustrationSet = <ExcellentIllustraionSet />
      break;
  }

  return (
    <div className="result-illustration">
      {ResultIllustrationSet}
    </div>
  );
}

function OkayIllustraionSet(props) {
  return (
    <div className="okay-illustration">
      <object className="svg svg-result-okay-avatar" data={svgImages['result/okay/avatar.svg']} type="image/svg+xml"> </object>
      <object className="svg svg-result-ribbon" data={svgImages['result/okay/ribbon.svg']} type="image/svg+xml"> </object>
      <object className="svg svg-result-okay-book" data={svgImages['result/okay/book.svg']} type="image/svg+xml"> </object>
    </div>
  );
}

function NiceIllustraionSet(props) {
  return (
    <div className="nice-illustration">
      <object className="svg svg-result-nice-avatar" data={svgImages['result/nice/avatar.svg']} type="image/svg+xml"> </object>
      <object className="svg svg-result-ribbon" data={svgImages['result/nice/ribbon.svg']} type="image/svg+xml"> </object>
      <object className="svg svg-result-medal" data={svgImages['result/nice/medal.svg']} type="image/svg+xml"> </object>
    </div>
  );
}

function GreatIllustraionSet(props) {
  return (
    <div className="great-illustration">
      <object className="svg svg-result-great-background" data={svgImages['result/great/background.svg']} type="image/svg+xml"> </object>
      <object className="svg svg-result-great-bird" data={svgImages['result/great/bird.svg']} type="image/svg+xml"> </object>
      <object className="svg svg-result-great-avatar" data={svgImages['result/great/avatar.svg']} type="image/svg+xml"> </object>
      <object className="svg svg-result-ribbon" data={svgImages['result/great/ribbon.svg']} type="image/svg+xml"> </object>
      <object className="svg svg-result-medal" data={svgImages['result/great/medal.svg']} type="image/svg+xml"> </object>
    </div>
  );
}

function ExcellentIllustraionSet(props) {
  return (
    <div className="excellent-illustration">
      <object className="svg svg-result-excellent-background" data={svgImages['result/excellent/background.svg']} type="image/svg+xml"> </object>
      <object className="svg svg-result-excellent-bird" data={svgImages['result/excellent/bird.svg']} type="image/svg+xml"> </object>
      <object className="svg svg-result-excellent-cat" data={svgImages['result/excellent/cat.svg']} type="image/svg+xml"> </object>
      <object className="svg svg-result-excellent-avatar" data={svgImages['result/excellent/avatar.svg']} type="image/svg+xml"> </object>
      <object className="svg svg-result-ribbon" data={svgImages['result/excellent/ribbon.svg']} type="image/svg+xml"> </object>
      <object className="svg svg-result-medal" data={svgImages['result/excellent/medal.svg']} type="image/svg+xml"> </object>
    </div>
  );
}

function ResultDescription(props) {
  let resultDescription;

  switch (props.playerScore) {
    case 0:
      resultDescription = resultDescriptions.okay;
      break;
    case 1:
    case 2:
      resultDescription = resultDescriptions.nice;
      break;
    case 3:
    case 4:
      resultDescription = resultDescriptions.great;
      break;
    case 5:
      resultDescription = resultDescriptions.excellent;
      break;
  }

  return (
    <div className="result-description">
      {resultDescription}
    </div>
  );
}

export default Result;