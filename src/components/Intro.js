import React, { Component } from 'react';
import { TimelineMax, Power1, Elastic } from 'gsap/all';

import { ReactComponent as IntroAvatar } from '../images/intro/avatar.svg';
import { ReactComponent as IntroDialog } from '../images/intro/dialog.svg';

class Intro extends Component {
  componentDidMount() {
    let avatar = this.intro.querySelectorAll('.svg-intro-avatar');
    let dialog = this.intro.querySelectorAll('.svg-intro-dialog');

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
      .to(avatar, .5, { x: '-2px', y: '1px', rotation: -1, transformOrigin: "center bottom", ease: Power1.easeInOut })

    let tlAvatarMove = new TimelineMax();

    tlAvatarMove
      .from(avatar, .5, { x: '80px', y: '480px', rotation: 4, transformOrigin: "right bottom", ease: Power1.easeIn })
      .call(() => tlAvatarShake.play(), null, null, .5)
      .fromTo(dialog, .5, { autoAlpha: 0, scale: 0, ease: Elastic.easeIn }, { autoAlpha: 1, scale: 1, ease: Elastic.easeIn })
      .call(() => tlDialogShake.play(), null, null, 1);

    let tlDialogShake = new TimelineMax({
      paused: true,
      repeat: -1,
      yoyo: true
    });
  
    tlDialogShake
      .to(dialog, .5, { scale: '1.04', ease: Power1.easeInOut })
  }

  render() {
    return (
      <div className="intro" ref={(el) => {this.intro = el}}>
        <div className="intro-container">
          <div className="intro-title">只要答對問題，就會成功<br/>捕捉到動物，加油吧！</div>
          <div className="intro-description">圖片上出現的道具與題目本身<br/>不一定有關聯，聰明的探險家們<br/>可別誤會了喔！</div>
          <div className="action-btn intro-btn" onClick={() => this.props.switchView('quiz')} ref={(el) => {this.btn = el}}>開始！</div>
          <div className="svg svg-intro-avatar"><IntroAvatar /></div>
          <div className="svg svg-intro-dialog"><IntroDialog /></div>
        </div>
      </div>
    );
  }
}

export default Intro; 