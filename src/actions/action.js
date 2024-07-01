// Action Types
export const SELECT_QUIZ = 'SELECT_QUIZ';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

// Action Creators
export const selectQuiz = (quizId) => ({
  type: SELECT_QUIZ,
  payload: quizId,
});

export const answerQuestion = (quizId, questionId, answer) => ({
  type: ANSWER_QUESTION,
  payload: { quizId, questionId, answer },
});
