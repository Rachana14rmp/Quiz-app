import React, { useState } from 'react';
import { QuizData } from '../Data/QuizData';
import QuizResult from './QuizResult';
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(0);
    } else {
      setShowResult(true);
    }
  };
  const previousQuestion = () => {
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(0);
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (selectedOption == QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };
  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setSelectedOption(0);
    setScore(0);
  };
  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      <div className="container">
        {showResult ? (
          <QuizResult
            score={score}
            totalScore={QuizData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}.</span>
              <span id="question-txt">
                {QuizData[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].options.map((option, index) => {
                return (
                  <button
                    key={index}
                    className={`option-btn ${
                      selectedOption == index + 1 ? 'checked' : null
                    }`}
                    onClick={() => setSelectedOption(index + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <>
              {currentQuestion !== 0 && (
                <input
                  type="button"
                  value="<<Previous"
                  id="previous-button"
                  onClick={previousQuestion}
                />
              )}
            </>
            <input
              disabled={selectedOption == 0 ? true : false}
              type="button"
              value="Next>>"
              id={selectedOption == 0 ? 'gray-button' : 'next-button'}
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
