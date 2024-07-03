import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { answerQuestion } from '../actions/action';
import { useState, useEffect } from 'react';

const Question = () => {
  const { quizId, questionId } = useParams();
  const quiz = useSelector((state) => state.quiz.quizzes[quizId]);
  const question = quiz?.questions.find((q) => q.id === parseInt(questionId));
  const dispatch = useDispatch();

    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState({});
    const [allAnswered, setAllAnswered] = useState(false);

    useEffect(() => {
      // Update correctAnswersCount based on the user's previous answers
      if (question.userAnswer === question.correctAnswer && !answeredQuestions[question.id]) {
        setCorrectAnswersCount((prevCount) => prevCount + 1);
        setAnsweredQuestions((prev) => ({ ...prev, [question.id]: true }));
      }
      // if(answerQuestion === question.answers.length){
      //      return (
      //         <>
      //            <div>Your marks are {question.userAnswer.filter((answer) => answer === question.correctAnswer).length}</div>
      //         </>
      //      )
      // }
    }, [question.userAnswer]);



    useEffect(() => {
      // Check if all questions have been answered
      if (quiz?.questions?.every((q) => answeredQuestions[q.id])) {
        setAllAnswered(true);
      }
    }, [answeredQuestions, quiz]);
  
  if (!quiz || !question) {
    return <div>Question not found</div>;
  }

  const handleAnswer = (answer) => {
    dispatch(answerQuestion(quizId, question.id, answer));
    if (answer === question.correctAnswer && !answeredQuestions[question.id]) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
      setAnsweredQuestions((prev) => ({ ...prev, [question.id]: true }));
    }
  };

  if (allAnswered) {
    return (
      <div className="results" style={{ textAlign: 'center' }}>
        <h2>{quiz.title}</h2>
        <p>Your marks are {correctAnswersCount}/{quiz.questions.length}</p>
        <Link to="/">Go to Quizzes</Link>
      </div>
    );
  }


  const currentIndex = quiz.questions.findIndex((q) => q.id === parseInt(questionId));
  const nextQuestionId = quiz.questions[currentIndex + 1]?.id || null;
  const prevQuestionId = quiz.questions[currentIndex - 1]?.id || null;

  return (
    <div className="question">
      <h2>{quiz.title}</h2>
      <p style={{textAlign: "center"}} >{question.question}</p>
      {question.answers.map((answer) => (
        <button
          key={answer}
          onClick={() => handleAnswer(answer)}
          style={{
            display: 'block',
            margin: '5px 0',
            width : "80vh",
            marginRight : "auto",
            marginLeft : "auto",
            backgroundColor: question.userAnswer === answer ? (answer === question.correctAnswer ? 'green' : 'red') : '',
            disabled : question.userAnswer === question.correctAnswer? "true" : "false",
            color: question.userAnswer === answer ? 'white' : 'black',
          }}
        >
          {answer}
        </button>
      ))}

      <div id ='marks' style={{textAlign : "center", color : "black", marginLeft: "auto", marginRight : "auto", backgroundColor : 'greenyellow', borderRadius: "2px", height : "30px", width : "70px" }} > <span>{correctAnswersCount}</span>/{question.answers.length} </div>
      
      <div style={{ marginTop: '20px', display: "flex", flexDirection: "row", gap :"33px", justifyContent: "center" }}>
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
