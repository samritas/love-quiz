import React, { useState } from "react";
import "../style/quiz.css"; 

const Quiz = ({ questions, onFinish }) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      onFinish(score + (option === questions[current].answer ? 1 : 0));
    }
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-question">{questions[current].question}</h2>
      <div className="quiz-options">
        {questions[current].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="quiz-button"
          >
            {option}
          </button>
        ))}
      </div>
      <p className="quiz-footer">
        Question {current + 1} of {questions.length}
      </p>
    </div>
  );
};

export default Quiz;
