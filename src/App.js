import React from "react";
// import Counter from "./component/counter";
import { Provider } from "react-redux";
import store from "./store/store";
import Quiz from "./component/quiz";
// import Weather from "./component/weather";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizFetch from "./component/quizQuestions";

function App() {
  return (
   <Provider store={store} >
      {/* <Counter /> */}
      {/* <Weather /> */}
      <Router>
       <div>
       <Routes>
           <Route path = "/quizQuestions" component = {QuizFetch}/>
            <Route path = "/quiz" component = {Quiz}/> 
            </Routes>
       </div>
     

      </Router>
      <Quiz />
   </Provider>
  );
}

export default App;