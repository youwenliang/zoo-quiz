import React, { Component } from 'react';
import { TimelineMax, Power1, Elastic } from 'gsap/all';
import resultDescriptions from '../resources/result-descriptions';
import resultIllustrations from '../resources/result-illustrations';

import { ReactComponent as ResultIllustrationEAvatar } from '../images/result/excellent/avatar.svg';
import { ReactComponent as ResultIllustrationEBackground } from '../images/result/excellent/background.svg';
import { ReactComponent as ResultIllustrationEBird } from '../images/result/excellent/bird.svg';
import { ReactComponent as ResultIllustrationECat } from '../images/result/excellent/cat.svg';
import { ReactComponent as ResultIllustrationEMedal } from '../images/result/excellent/medal.svg';
import { ReactComponent as ResultIllustrationERibbon } from '../images/result/excellent/ribbon.svg';

import { ReactComponent as ResultIllustrationGAvatar } from '../images/result/great/avatar.svg';
import { ReactComponent as ResultIllustrationGBackground } from '../images/result/great/background.svg';
import { ReactComponent as ResultIllustrationGBird } from '../images/result/great/bird.svg';
import { ReactComponent as ResultIllustrationGMedal } from '../images/result/great/medal.svg';
import { ReactComponent as ResultIllustrationGRibbon } from '../images/result/great/ribbon.svg';

import { ReactComponent as ResultIllustrationNAvatar } from '../images/result/nice/avatar.svg';
import { ReactComponent as ResultIllustrationNMedal } from '../images/result/nice/medal.svg';
import { ReactComponent as ResultIllustrationNRibbon } from '../images/result/nice/ribbon.svg';

import { ReactComponent as ResultIllustrationOAvatar } from '../images/result/okay/avatar.svg';
import { ReactComponent as ResultIllustrationOBook } from '../images/result/okay/book.svg';
import { ReactComponent as ResultIllustrationORibbon } from '../images/result/okay/ribbon.svg';

let mock = {};
mock.playerScore = 5;
mock.playerAnswers = [
  {questionId: 1, isPlayerAnswerCorrect: true},
  {questionId: 2, isPlayerAnswerCorrect: false},
  {questionId: 3, isPlayerAnswerCorrect: true},
  {questionId: 4, isPlayerAnswerCorrect: false},
  {questionId: 5, isPlayerAnswerCorrect: true}
];
mock.illustrationOrder = [1, 5, 4, 3, 2];

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animalDisplayed: 0
    }
  }

  componentDidMount() {
    let tlButtonMove = new TimelineMax({
      repeat: -1,
      pause: true
    });
    
    tlButtonMove
      .to(this.actionBtn, .25, {scale: 1.04, ease: Elastic.easeIn})
      .from(this.actionBtn, .75, {scale: 1.04, ease: Elastic.easeOut});

    this.resultIllustration = this.result.querySelectorAll('.result-illustration');
    this.resultDescription = this.result.querySelectorAll('.result-description');
    let tlshowResult = new TimelineMax();
    tlshowResult
      .to(this.focus, .25, {scale: 1.2, ease: Power1.easeOut})
      .fromTo(this.title, .25, {scale: 0, ease: Power1.easeIn}, {scale: 1, ease: Power1.easeIn}, "+=.25")
      .fromTo(this.details, .25, {scale: 0, ease: Power1.easeIn}, {scale: 1, ease: Power1.easeIn})
      .call(() => this.showResultDetails(), null, null, 1.25)
      .to(this.focus, .25, {scale: 1.6, ease: Power1.easeInOut}, "+=1.75")
      .to(this.title, .25, {y: -480, ease: Power1.easeInOut}, "-=.25")
      .to(this.details, .25, {y: -500, ease: Power1.easeInOut}, "-=.25")
      .to(this.resultIllustration, .5, {opacity: 1, scale: 1, ease: Elastic.easeInOut})
      .to(this.resultDescription, .25, {opacity: 1, ease: Power1.easeInOut})
      .to(this.actionBtn, .25, {opacity: 1, ease: Power1.easeInOut}, "-=.25")
      .add(tlButtonMove.play(), 2.75);;
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
    return (
      <div className="result" ref={(el) => {this.result = el}}>
        <div className="result-focus" ref={(el) => {this.focus = el}}></div>
        <div className="result-title" ref={(el) => {this.title = el}}>
          總共捕獲<span class="result-score">{mock.playerScore}</span>隻
        </div>
        <div className="result-details" ref={(el) => {this.details = el}}>
          {mock.playerAnswers.map((playerAnswer, index) => {
            return (
              <PlayerAnswer
                key={index}
                answerOrder={index}
                animalDisplayed={this.state.animalDisplayed}
                illustrationOrderIndex={mock.illustrationOrder[index]}
                isPlayerAnswerCorrect={playerAnswer.isPlayerAnswerCorrect}
              />
            );
          })}
        </div>
        <ResultIllustration playerScore={mock.playerScore} />
        <ResultDescription playerScore={mock.playerScore} />
        <div className="action-btn intro-btn result-btn" onClick={this.restartGame} ref={(el) => {this.actionBtn = el}}>再玩一次！</div>
      </div>
    );
    // return (
    //   <div className="result" ref={(el) => {this.result = el}}>
    //     <div className="result-focus" ref={(el) => {this.focus = el}}></div>
    //     <div className="result-title" ref={(el) => {this.title = el}}>
    //       總共捕獲<span className="result-score">{this.props.playerScore}</span>隻
    //     </div>
    //     <div className="result-details" ref={(el) => {this.details = el}}>
    //       {this.props.playerAnswers.map((playerAnswer, index) => {
    //         return (
    //           <PlayerAnswer
    //             key={index}
    //             answerOrder={index}
    //             animalDisplayed={this.state.animalDisplayed}
    //             illustrationOrderIndex={this.props.illustrationOrder[index]}
    //             isPlayerAnswerCorrect={playerAnswer.isPlayerAnswerCorrect}
    //           />
    //         );
    //       })}
    //     </div>
    //     <ResultIllustration playerScore={this.props.playerScore} />
    //     <ResultDescription playerScore={this.props.playerScore} />
    //     <div className="action-btn intro-btn result-btn" onClick={this.restartGame} ref={(el) => {this.actionBtn = el}}>再玩一次！</div>
    //   </div>
    // );
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
      {resultIllustrations[props.illustrationOrderIndex]}
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
    default:
  }

  return (
    <div className="result-illustration">
      {ResultIllustrationSet}
    </div>
  );
}

function OkayIllustraionSet() {
  return (
    <div className="okay-illustration">
      <div className="svg svg-result-okay-avatar"><ResultIllustrationOAvatar /></div>
      <div className="svg svg-result-ribbon"><ResultIllustrationORibbon /></div>
      <div className="svg svg-result-okay-book"><ResultIllustrationOBook /></div>
    </div>
  );
}

function NiceIllustraionSet() {
  return (
    <div className="nice-illustration">
      <div className="svg svg-result-nice-avatar"><ResultIllustrationNAvatar  /></div>
      <div className="svg svg-result-ribbon"><ResultIllustrationNRibbon /></div>
      <div className="svg svg-result-medal"><ResultIllustrationNMedal /></div>
    </div>
  );
}

function GreatIllustraionSet() {
  return (
    <div className="great-illustration">
      <div className="svg svg-result-great-background"><ResultIllustrationGBackground /></div>
      <div className="svg svg-result-great-bird"><ResultIllustrationGBird /></div>
      <div className="svg svg-result-great-avatar"><ResultIllustrationGAvatar /></div>
      <div className="svg svg-result-ribbon"><ResultIllustrationGRibbon /></div>
      <div className="svg svg-result-medal"><ResultIllustrationGMedal /></div>
    </div>
  );
}

function ExcellentIllustraionSet() {
  return (
    <div className="excellent-illustration">
      <div className="svg svg-result-excellent-background"><ResultIllustrationEBackground /></div>
      <div className="svg svg-result-excellent-bird"><ResultIllustrationEBird /></div>
      <div className="svg svg-result-excellent-cat"><ResultIllustrationECat /></div>
      <div className="svg svg-result-excellent-avatar"><ResultIllustrationEAvatar /></div>
      <div className="svg svg-result-ribbon"><ResultIllustrationERibbon /></div>
      <div className="svg svg-result-medal"><ResultIllustrationEMedal /></div>
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
    default:
  }

  return (
    <div className="result-description">
      {resultDescription}
    </div>
  );
}

export default Result;