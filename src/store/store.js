// import reducer from "../reducers/reducer";
import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../reducers/reducer";

// // // Configure the store with the root reducer and apply thunk middleware

 const store = configureStore({
    reducer: quizReducer
 });


 export default store;

