import React from 'react';

function QuizResult(props) {
  return (
    <>
      <div className="show-score">
        Your score: {props.score}
        <br />
        Total Score: {props.totalScore}
      </div>
      <button id="next-button" onClick={props.tryAgain}>
        Play Again !!
      </button>
    </>
  );
}

export default QuizResult;
