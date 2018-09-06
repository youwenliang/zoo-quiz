import React, { Component } from 'react';
import { TimelineMax, Power1, Elastic } from 'gsap/all';
import Quiz from './Quiz';
import Result from './Result';
import svgImages from './svg-import.js';
import './App.css';

const shuffleArray = (array) => {
  return array.sort((a,b) => Math.random() < .5 ? 1 : -1);
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'result',
      toggleQuestionSets: 0,
      playerScore: 0,
      playerAnswers: [],
      illustrationOrder: []
    }
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
      'quiz': <Quiz view={this.state.view} switchView={this.switchView.bind(this)} toggleQuestionSets={this.state.toggleQuestionSets} playerScore={this.state.playerScore} setPlayerAnswers={this.setPlayerAnswers.bind(this)} illustrationOrder={this.state.illustrationOrder} shuffleIllustrationOrder={this.shuffleIllustrationOrder.bind(this)} />,
      'result': <Result view={this.state.view} switchView={this.switchView.bind(this)} playerScore={this.state.playerScore} playerAnswers={this.state.playerAnswers} illustrationOrder={this.state.illustrationOrder} />,
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
  componentDidMount() {
    let tlAnimalShake = new TimelineMax({
      paused: true,
      repeat: -1,
      yoyo: true
    });

    tlAnimalShake
      .to(this.bird, .5, { x: '-2px', y: '1px', rotation: -1, transformOrigin: "left bottom", ease: Power1.easeInOut })
      .to(this.cat, .5, { x: '2px', y: '1px', rotation: 1, transformOrigin: "right bottom", ease: Power1.easeInOut }, "-=0.5")
      .to(this.mouse, .5, { x: '0', y: '10px', ease: Power1.easeInOut }, "-=0.5")
      .from(this.lizard, .5, { x: '10px', y: '0', ease: Power1.easeInOut }, "-=0.5");

    let tlAnimalAppear = new TimelineMax();
    let tlAnimalDisappear = new TimelineMax();

    tlAnimalAppear
      .from(this.bird, .5, { x: '-80px', y: '400px', rotation: -30, transformOrigin: "left bottom", ease: Power1.easeIn })
      .from(this.lizard, .25, { x: '225px', y: '0px', ease: Power1.easeIn }, "-=0.25")
      .from(this.cat, .5, { x: '80px', y: '400px', rotation: 30, transformOrigin: "right bottom", ease: Power1.easeIn }, "-=0.25")
      .from(this.mouse, .25, { x: '0', y: '130px', ease: Power1.easeIn }, "-=0.25"); 
    tlAnimalDisappear
      .to(this.bird, .25, { x: '-80px', y: '400px', rotation: -30, transformOrigin: "left bottom", ease: Power1.easeOut })
      .to(this.cat, .25, { x: '80px', y: '400px', rotation: 30, transformOrigin: "right bottom", ease: Power1.easeOut }, "-=0.25")
      .to(this.mouse, .25, { x: '0', y: '130px', ease: Power1.easeOut }, "-=0.25")
      .to(this.lizard, .25, { x: '225px', y: '0px', ease: Power1.easeOut }, "-=0.25");

    let tlAnimalMove = new TimelineMax({
      repeat: -1,
      repeatDelay: 1
    });

    tlAnimalMove
      .add(tlAnimalAppear.play(), 'appear')
      .call(() => tlAnimalShake.play(), null, null, 0.75)
      .add(tlAnimalDisappear.play(), 4.75)
      .call(() => tlAnimalShake.pause());
    
    let tlButtonMove = new TimelineMax({
      repeat: -1
    });

    tlButtonMove
      .to(this.btn, .25, {scale: 1.44, ease: Elastic.easeIn})
      .from(this.btn, .75, {scale: 1.44, ease: Elastic.easeOut});

    let tlBatMove = new TimelineMax({
      repeat: -1,
      yoyo: true
    });

    tlBatMove
      .fromTo(this.bat, .5, {rotation: -3, skewY: 1, transformOrigin: "center top", ease: Power1.easeInOut}, {rotation: 2, skewY: -1, transformOrigin: "center top", ease: Power1.easeInOut});
  }

  render() {
    return (
      <div className="start">
        <object className="svg svg-start-background" data={svgImages['start/background.svg']} type="image/svg+xml"> </object>
        <object className="svg svg-start-branch" data={svgImages['start/branch.svg']} type="image/svg+xml"> </object>
        <object className="svg svg-start-logo" data={svgImages['start/logo.svg']} type="image/svg+xml"> </object>
        <object className="svg svg-start-title" data={svgImages['start/title.svg']} type="image/svg+xml"> </object>
        <object className="svg svg-start-bat" data={svgImages['start/bat.svg']} type="image/svg+xml" ref={(el) => {this.bat = el}}> </object>
        <object className="svg svg-start-bird" data={svgImages['start/bird.svg']} type="image/svg+xml" ref={(el) => {this.bird = el}}> </object>
        <object className="svg svg-start-cat" data={svgImages['start/cat.svg']} type="image/svg+xml" ref={(el) => {this.cat = el}}> </object>
        <object className="svg svg-start-grass" data={svgImages['start/grass.svg']} type="image/svg+xml"> </object>
        <object className="svg svg-start-mouse" data={svgImages['start/mouse.svg']} type="image/svg+xml" ref={(el) => {this.mouse = el}}> </object>
        <object className="svg svg-start-lizard" data={svgImages['start/lizard.svg']} type="image/svg+xml" ref={(el) => {this.lizard = el}}> </object>
        <div className="action-btn start-btn" onClick={() => this.props.switchView('intro')} ref={(el) => {this.btn = el}}>開始！</div>
      </div>
    );
  }
}

class Intro extends Component {
  componentDidMount() {
    let tlButtonMove = new TimelineMax({
      repeat: -1
    });

    tlButtonMove
      .to(this.btn, .25, {scale: 0.96, ease: Elastic.easeIn})
      .from(this.btn, .75, {scale: 0.96, ease: Elastic.easeOut});

    let tlAvatarShake = new TimelineMax({
      paused: true,
      repeat: -1,
      yoyo: true
    });

    tlAvatarShake
      .to(this.avatar, .5, { x: '-2px', y: '1px', rotation: -1, transformOrigin: "center bottom", ease: Power1.easeInOut })

    let tlAvatarMove = new TimelineMax();

    tlAvatarMove
      .from(this.avatar, .5, { x: '80px', y: '480px', rotation: 4, transformOrigin: "right bottom", ease: Power1.easeIn })
      .call(() => tlAvatarShake.play(), null, null, .5)
      .fromTo(this.dialog, .5, { autoAlpha: 0, scale: 0, ease: Elastic.easeIn }, { autoAlpha: 1, scale: 1, ease: Elastic.easeIn })
      .call(() => tlDialogShake.play(), null, null, 1);

    let tlDialogShake = new TimelineMax({
      paused: true,
      repeat: -1,
      yoyo: true
    });
  
    tlDialogShake
      .to(this.dialog, .5, { scale: '1.04', ease: Power1.easeInOut })
  }

  render() {
    return (
      <div className="intro">
        <div className="intro-container">
          <div className="intro-title">遊戲介紹標題</div>
          <div className="intro-description">遊戲內容簡介遊戲內容簡介遊戲內容共二十字</div>
          <div className="action-btn intro-btn" onClick={() => this.props.switchView('quiz')} ref={(el) => {this.btn = el}}>開始！</div>
          <object className="svg svg-intro-avatar" data={svgImages['intro/avatar.svg']} type="image/svg+xml" ref={(el) => {this.avatar = el}}> </object>
          <object className="svg svg-intro-dialog" data={svgImages['intro/dialog.svg']} type="image/svg+xml" ref={(el) => {this.dialog = el}}> </object>
        </div>
      </div>
    );
  }
}

export default App;
