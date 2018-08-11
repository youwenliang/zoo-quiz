import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div className="result">
        <h1>結果</h1>
        <p>{this.props.score}</p>

        <div className="resultDetails">
          {this.props.playerAnswers.map((playerAnswer, index) => {
            // console.log(playerAnswer);
            return (
              <PlayerAnswer
                key={index}
                questionId={playerAnswer.questionId}
                isPlayerAnswerCorrect={playerAnswer.isPlayerAnswerCorrect}
              />
            );
          })}
        </div>
        <div className="action-button" onClick={() => this.props.switchView('start')}>重新玩！</div>
      </div>
    );
  }
}

class PlayerAnswer extends Component {
  render() {
    return (
      <div className="resultPerQuestion">
        {this.props.questionId}{this.props.isPlayerAnswerCorrect + ""}
      </div>
    );
  }
}

export default Result;