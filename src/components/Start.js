import React, { Component } from 'react';
import { TimelineMax, Power1, Elastic } from 'gsap/all';

import { ReactComponent as StartBackground } from '../images/start/background.svg';
import { ReactComponent as StartBranch } from '../images/start/branch.svg';
import { ReactComponent as StartLogo } from '../images/start/logo.svg';
import { ReactComponent as StartTitle } from '../images/start/title.svg';
import { ReactComponent as StartBat } from '../images/start/bat.svg';
import { ReactComponent as StartBird } from '../images/start/bird.svg';
import { ReactComponent as StartCat } from '../images/start/cat.svg';
import { ReactComponent as StartGrass } from '../images/start/grass.svg';
import { ReactComponent as StartMouse } from '../images/start/mouse.svg';
import { ReactComponent as StartLizard } from '../images/start/lizard.svg';

class Start extends Component {
  componentDidMount() {
    let background = this.start.querySelectorAll('.svg-start-background');
    let branch = this.start.querySelectorAll('.svg-start-branch');
    let logo = this.start.querySelectorAll('.svg-start-logo');
    let title = this.start.querySelectorAll('.svg-start-title');
    let bat = this.start.querySelectorAll('.svg-start-bat');
    let bird = this.start.querySelectorAll('.svg-start-bird');
    let cat = this.start.querySelectorAll('.svg-start-cat');
    let grass = this.start.querySelectorAll('.svg-start-grass');
    let mouse = this.start.querySelectorAll('.svg-start-mouse');
    let lizard = this.start.querySelectorAll('.svg-start-lizard');
    
    let tlButtonMove = new TimelineMax({
      repeat: -1,
      pause: true
    });
    tlButtonMove
      .to(this.btn, .25, {scale: 1.44, ease: Elastic.easeIn})
      .from(this.btn, .75, {scale: 1.44, ease: Elastic.easeOut});

    let tlBatMove = new TimelineMax({
      pause: true,
      repeat: -1,
      yoyo: true
    });
    tlBatMove
      .fromTo(bat, .5, {rotation: -3, skewY: 1, transformOrigin: "center top", ease: Power1.easeInOut}, {rotation: 2, skewY: -1, transformOrigin: "center top", ease: Power1.easeInOut});

    let tlOpening = new TimelineMax();
    tlOpening
      .fromTo(background, .5, { opacity: 0, ease: Power1.easeInOut }, { opacity: 1, ease: Power1.easeInOut })
      .from(branch, .25, { y: -300, ease: Elastic.easeInOut }, "-=0.25")
      .from(bat, .25, { y: -300, ease: Elastic.easeInOut }, "-=0.25")
      .add(tlBatMove.play(), .5)
      .from(grass, .25, { y: 350, ease: Elastic.easeInOut })
      .fromTo(logo, .5, { opacity: 0, ease: Power1.easeInOut }, { opacity: 1, ease: Power1.easeInOut })
      .fromTo(this.btn, .5, { opacity: 0, ease: Power1.easeInOut }, { opacity: 1, ease: Power1.easeInOut }, "-=0.25")
      .fromTo(title, .5, { opacity: 0, ease: Power1.easeInOut }, { opacity: 1, ease: Power1.easeInOut }, "-=0.25")
      .add(tlButtonMove.play(), 1.5);

    let tlAnimalShake = new TimelineMax({
      paused: true,
      repeat: -1,
      yoyo: true
    });

    tlAnimalShake
      .to(bird, .5, { x: '-2px', y: '1px', rotation: -1, transformOrigin: "left bottom", ease: Power1.easeInOut })
      .to(cat, .5, { x: '2px', y: '1px', rotation: 1, transformOrigin: "right bottom", ease: Power1.easeInOut }, "-=0.5")
      .to(mouse, .5, { x: '0', y: '10px', ease: Power1.easeInOut }, "-=0.5")
      .from(lizard, .5, { x: '10px', y: '0', ease: Power1.easeInOut }, "-=0.5");

    let tlAnimalAppear = new TimelineMax();
    let tlAnimalDisappear = new TimelineMax();

    tlAnimalAppear
      .from(bird, .5, { x: '-80px', y: '500px', rotation: -30, transformOrigin: "left bottom", ease: Power1.easeIn })
      .from(lizard, .25, { x: '225px', y: '0px', ease: Power1.easeIn }, "-=0.25")
      .from(cat, .5, { x: '80px', y: '500px', rotation: 30, transformOrigin: "right bottom", ease: Power1.easeIn }, "-=0.25")
      .from(mouse, .25, { x: '0', y: '130px', ease: Power1.easeIn }, "-=0.25"); 
    tlAnimalDisappear
      .to(bird, .25, { x: '-80px', y: '500px', rotation: -30, transformOrigin: "left bottom", ease: Power1.easeOut })
      .to(cat, .25, { x: '80px', y: '500px', rotation: 30, transformOrigin: "right bottom", ease: Power1.easeOut }, "-=0.25")
      .to(mouse, .25, { x: '0', y: '130px', ease: Power1.easeOut }, "-=0.25")
      .to(lizard, .25, { x: '225px', y: '0px', ease: Power1.easeOut }, "-=0.25");

    let tlAnimalMove = new TimelineMax({
      repeat: -1,
      repeatDelay: 1,
      delay: 1.25
    });

    tlAnimalMove
      .add(tlAnimalAppear.play(), 'appear')
      .call(() => tlAnimalShake.play(), null, null, 0.75)
      .add(tlAnimalDisappear.play(), 4.75)
      .call(() => tlAnimalShake.pause());
  }

  render() {
    return (
      <div className="start" ref={(el) => {this.start = el}}>
        <StartBackground className="svg svg-start-background"/>
        <StartBranch className="svg svg-start-branch"/>
        <StartLogo className="svg svg-start-logo"/>
        <StartTitle className="svg svg-start-title"/>
        <StartBat className="svg svg-start-bat"/>
        <StartBird className="svg svg-start-bird"/>
        <StartCat className="svg svg-start-cat"/>
        <StartGrass className="svg svg-start-grass"/>
        <StartMouse className="svg svg-start-mouse"/>
        <StartLizard className="svg svg-start-lizard"/>
        <div className="action-btn start-btn" onClick={() => this.props.switchView('intro')} ref={(el) => {this.btn = el}}>開始挑戰！</div>
      </div>
    );
  }
}

export default Start;