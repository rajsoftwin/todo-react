import React from "react";
// import Counter from "./component/counter";
import { Provider } from "react-redux";
import store from "./store/store";
import Quiz from "./component/quiz";
// import Weather from "./component/weather";


function App() {
  return (
   <Provider store={store} >
      {/* <Counter /> */}
      {/* <Weather /> */}
       <Quiz />
   </Provider>
  );
}

export default App;