import React from 'react';

function Result(props) {
  return (
    <div className="result">
      <h1>結果</h1>
      <div className="result-score">
        {props.playerScore}
      </div>
      <div className="result-details">
        {props.playerAnswers.map((playerAnswer, index) => {
          return (
            <PlayerAnswer
              key={index}
              questionId={playerAnswer.questionId}
              isPlayerAnswerCorrect={playerAnswer.isPlayerAnswerCorrect}
            />
          );
        })}
      </div>
      <div className="action-button" onClick={() => props.switchView('start')}>
        重新玩！
      </div>
    </div>
  );
}

function PlayerAnswer(props) {
  return (
    <div className="detail-per-question">
      {props.questionId}{props.isPlayerAnswerCorrect + ""}
    </div>
  );
}

export default Result;