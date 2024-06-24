import React from "react";
// import Counter from "./component/counter";
import { Provider } from "react-redux";
import store from "./store/store";
import Todo from "./component/todo";

function App() {
  return (
   <Provider store={store} >
      {/* <Counter /> */}
      <Todo />
   </Provider>
  
  );
}

export default App;