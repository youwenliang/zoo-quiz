import React, { Component } from 'react';

class Result extends Component {
  componentDidMount () {
    console.log("result");
  }
  render() {
    return (
      <div className="result">
        <h1>結果</h1>
        <div className="result-score">
          {this.props.playerScore}
        </div>
        <div className="result-details">
          {this.props.playerAnswers.map((playerAnswer, index) => {
            return (
              <PlayerAnswer
                key={index}
                questionId={playerAnswer.questionId}
                isPlayerAnswerCorrect={playerAnswer.isPlayerAnswerCorrect}
              />
            );
          })}
        </div>
        <div className="action-button" onClick={() => this.props.switchView('start')}>
          重新玩！
        </div>
      </div>
    );
  }
}

function PlayerAnswer(props) {
  return (
    <div className="detail-per-question">
      {props.questionId}{props.isPlayerAnswerCorrect + ""}
    </div>
  );
}

export default Result;