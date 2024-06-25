// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=India,Punjab&APPID=${WEATHER_API_KEY}`


// const todoSlice = createSlice({
//   name: "todos",
//   initialState: [],
//   reducers: {
//     addTodo: (state, action) => {
//       const newTodo = {
//         id: Date.now(),
//         text: action.payload,
//         completed: false,
//       };
//       state.push(newTodo);
//     },
//     toggleComplete: (state, action) => {
//       const todo = state.find((todo) => todo.id === action.payload);
//       if (todo) {
//         todo.completed = !todo.completed;
//       }
//     },
//     deleteTodo: (state, action) => {
//       const index = state.findIndex((todo) => todo.id === action.payload);
//       if (index !== -1) {
//         state.splice(index, 1);
//       }
//     },
//   },
// });
// export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
// export default todoSlice.reducer;

// const intialstate = {
//     counter : 0
// }

//  const reducer = (state = intialstate, action) => {  
//      switch(action.type){
//         case "INCREMENT": 
//              return {...state, counter:state.counter+1 }
//         case "DECREMENT" : 
//             return {...state, counter : state.counter-1}
//         default: 
//           return state;           
//      }
//  }

//     export default reducer;

 const initialstate = {
    loading : false,
    weather : {},
    error: ""
  };

   const Weatherreducer = (state = initialstate, action) => {

    switch(action.type) {
       case "loading" : 
           return {...state, loading : true};
      case "success": 
           return  { loading: false, weather : action.payload, error : ""};
      case "failure" : 
        return { loading : false, weather : "",  error: action.payload};
        default : 
          return state;
      }
    } 

export default Weatherreducer;
