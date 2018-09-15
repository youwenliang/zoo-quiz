import React, { Component } from 'react';
import { TimelineMax, Power1, Elastic } from 'gsap/all';
import svgImages from '../resources/svg-import.js';
import { ReactComponent as Avatar } from '../images/intro/avatar.svg';

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
          <div className="intro-title">遊戲規則說明</div>
          <div className="intro-description">動動腦回答問題，完成搜集野生動物的調查任務！</div>
          <div className="action-btn intro-btn" onClick={() => this.props.switchView('quiz')} ref={(el) => {this.btn = el}}>開始！</div>
          <object className="svg svg-intro-avatar" data={svgImages['intro/avatar.svg']} type="image/svg+xml" ref={(el) => {this.avatar = el}}> </object>
          <object className="svg svg-intro-dialog" data={svgImages['intro/dialog.svg']} type="image/svg+xml" ref={(el) => {this.dialog = el}}> </object>
        </div>
      </div>
    );
  }
}

export default Intro; 