import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { answerQuestion } from '../actions/action';

const Question = () => {
  const { quizId, questionId } = useParams();
  const quiz = useSelector((state) => state.quiz.quizzes[quizId]);
  const question = quiz?.questions.find((q) => q.id === parseInt(questionId));
  const dispatch = useDispatch();

  if (!quiz || !question) {
    return <div>Question not found</div>;
  }

  const handleAnswer = (answer) => {
    dispatch(answerQuestion(quizId, question.id, answer));
  };

  const nextQuestionId = quiz.questions[question.id]?.id || null;
  const prevQuestionId = quiz.questions[question.id - 2]?.id || null;

  return (
    <div className="question">
      <h2>{quiz.title}</h2>
      <p>{question.question}</p>
      {question.answers.map((answer) => (
        <button
          key={answer}
          onClick={() => handleAnswer(answer)}
          style={{
            display: 'block',
            margin: '5px 0',
            backgroundColor: question.userAnswer === answer ? (answer === question.correctAnswer ? 'green' : 'red') : '',
            color: question.userAnswer === answer ? 'white' : 'black',
          }}
        >
          {answer}
        </button>
      ))}
      <div style={{ marginTop: '20px' }}>
        {prevQuestionId && (
          <Link to={`/quiz/${quizId}/question/${prevQuestionId}`}>
            <button>Previous Question</button>
          </Link>
        )}
        {nextQuestionId && (
          <Link to={`/quiz/${quizId}/question/${nextQuestionId}`}>
            <button>Next Question</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Question;
