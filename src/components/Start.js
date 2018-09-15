import React, { Component } from 'react';
import { TimelineMax, Power1, Elastic } from 'gsap/all';
import svgImages from '../resources/svg-import.js';

class Start extends Component {
  componentDidMount() {
    
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
      .fromTo(this.bat, .5, {rotation: -3, skewY: 1, transformOrigin: "center top", ease: Power1.easeInOut}, {rotation: 2, skewY: -1, transformOrigin: "center top", ease: Power1.easeInOut});

    let tlOpening = new TimelineMax();
    tlOpening
      .fromTo(this.background, .5, { opacity: 0, ease: Power1.easeInOut }, { opacity: 1, ease: Power1.easeInOut })
      .from(this.branch, .25, { y: -300, ease: Elastic.easeInOut }, "-=0.25")
      .from(this.bat, .25, { y: -300, ease: Elastic.easeInOut }, "-=0.25")
      .add(tlBatMove.play(), .5)
      .from(this.grass, .25, { y: 350, ease: Elastic.easeInOut })
      .fromTo(this.logo, .5, { opacity: 0, ease: Power1.easeInOut }, { opacity: 1, ease: Power1.easeInOut })
      .fromTo(this.btn, .5, { opacity: 0, ease: Power1.easeInOut }, { opacity: 1, ease: Power1.easeInOut }, "-=0.25")
      .fromTo(this.title, .5, { opacity: 0, ease: Power1.easeInOut }, { opacity: 1, ease: Power1.easeInOut }, "-=0.25")
      .add(tlButtonMove.play(), 1.5);

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
      .from(this.bird, .5, { x: '-80px', y: '500px', rotation: -30, transformOrigin: "left bottom", ease: Power1.easeIn })
      .from(this.lizard, .25, { x: '225px', y: '0px', ease: Power1.easeIn }, "-=0.25")
      .from(this.cat, .5, { x: '80px', y: '500px', rotation: 30, transformOrigin: "right bottom", ease: Power1.easeIn }, "-=0.25")
      .from(this.mouse, .25, { x: '0', y: '130px', ease: Power1.easeIn }, "-=0.25"); 
    tlAnimalDisappear
      .to(this.bird, .25, { x: '-80px', y: '500px', rotation: -30, transformOrigin: "left bottom", ease: Power1.easeOut })
      .to(this.cat, .25, { x: '80px', y: '500px', rotation: 30, transformOrigin: "right bottom", ease: Power1.easeOut }, "-=0.25")
      .to(this.mouse, .25, { x: '0', y: '130px', ease: Power1.easeOut }, "-=0.25")
      .to(this.lizard, .25, { x: '225px', y: '0px', ease: Power1.easeOut }, "-=0.25");

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
      <div className="start">
        <object className="svg svg-start-background" data={svgImages['start/background.svg']} type="image/svg+xml" ref={(el) => {this.background = el}}> </object>
        <object className="svg svg-start-branch" data={svgImages['start/branch.svg']} type="image/svg+xml" ref={(el) => {this.branch = el}}> </object>
        <object className="svg svg-start-logo" data={svgImages['start/logo.svg']} type="image/svg+xml" ref={(el) => {this.logo = el}}> </object>
        <object className="svg svg-start-title" data={svgImages['start/title.svg']} type="image/svg+xml" ref={(el) => {this.title = el}}> </object>
        <object className="svg svg-start-bat" data={svgImages['start/bat.svg']} type="image/svg+xml" ref={(el) => {this.bat = el}}> </object>
        <object className="svg svg-start-bird" data={svgImages['start/bird.svg']} type="image/svg+xml" ref={(el) => {this.bird = el}}> </object>
        <object className="svg svg-start-cat" data={svgImages['start/cat.svg']} type="image/svg+xml" ref={(el) => {this.cat = el}}> </object>
        <object className="svg svg-start-grass" data={svgImages['start/grass.svg']} type="image/svg+xml" ref={(el) => {this.grass = el}}> </object>
        <object className="svg svg-start-mouse" data={svgImages['start/mouse.svg']} type="image/svg+xml" ref={(el) => {this.mouse = el}}> </object>
        <object className="svg svg-start-lizard" data={svgImages['start/lizard.svg']} type="image/svg+xml" ref={(el) => {this.lizard = el}}> </object>
        <div className="action-btn start-btn" onClick={() => this.props.switchView('intro')} ref={(el) => {this.btn = el}}>開始挑戰！</div>
      </div>
    );
  }
}

export default Start;