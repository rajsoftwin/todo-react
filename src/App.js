import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import QuizFetch from './component/quizQuestions';
import Quiz from './component/quiz';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Quiz App</h1>
        <QuizFetch />
        <Quiz />
      </div>
    </Provider>
  );
};

export default App;
