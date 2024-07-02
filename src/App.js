import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import QuizFetch from './component/quizQuestions';
import Quiz from './component/quiz';
import Question from './component/Question';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
       <Router>
          <div className='app'>
             <Routes>
               <Route path='/' element = {<QuizFetch/>} />
               <Route path='/quiz/:quizId/' Component={<Quiz />} />
               <Route path = '/quiz/:quizId/question/:questionId' Component={<Question/>} />
             </Routes>
          </div>
       </Router>
    </Provider>
  );
};

export default App;

// buttons, routes, 
