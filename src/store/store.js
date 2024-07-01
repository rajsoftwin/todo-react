// import reducer from "../reducers/reducer";
import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../reducers/reducer";

// 
 const store = configureStore({
    reducer: quizReducer
 });


 export default store;

