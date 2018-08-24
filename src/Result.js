import React from 'react';
import svgImages from './svg-import.js';

function Result(props) {
  return (
    <div className="result">
      <div className="result-title">
        總共捕獲<span class="result-score">{props.playerScore}</span>隻
      </div>
      <div className="result-details">
        {props.playerAnswers.map((playerAnswer, index) => {
          return (
            <PlayerAnswer
              key={index}
              illustrationOrderIndex={props.illustrationOrder[index]}
              isPlayerAnswerCorrect={playerAnswer.isPlayerAnswerCorrect}
            />
          );
        })}
      </div>
      <ResultIllustration playerScore={props.playerScore} />
      <div className="action-btn intro-btn" onClick={() => props.switchView('start')}>再玩一次！</div>
    </div>
  );
}

function PlayerAnswer(props) {
  let isPlayerAnswerCorrectMapping = {
    0: "incorrect",
    1: "correct"
  }

  return (
    <div className={"detail-per-question "+ isPlayerAnswerCorrectMapping[+props.isPlayerAnswerCorrect]}>
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

export default Result;