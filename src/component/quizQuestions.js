import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuiz } from '../actions/action';

const QuizFetch = () => {
  const quizzes = useSelector((state) => state.quiz.quizzes);
  const dispatch = useDispatch();

  return (
    <div className="quiz-list">
      {Object.keys(quizzes).map((quizId) => (
        <div
          key={quizId}
          className="quiz-box"
          onClick={() => dispatch(selectQuiz(quizId))}
          style={{ border: '1px solid black', padding: '10px', margin: '10px', cursor: 'pointer' }}
        >
          <h2>{quizzes[quizId].title}</h2>
          <p>{quizzes[quizId].description}</p>
        </div>
      ))}
    </div>
  );
};

export default QuizFetch;
