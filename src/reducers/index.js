import { createSlice } from "@reduxjs/toolkit";

// const baseUrl = `http://localhost:8080`;

const slicerfunction = createSlice({
    name : "todos",
    initialState : [],
    reducers : {
           addTodo : (state, action) => {
            const newTodo = {
                // object
                todo : action.payload,
                completed : false
            }
            state.push(newTodo);
           },
           deleteTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
              state.splice(index, 1);
            }
          },
        updateTodo : (state, action, id) => {
                 const todo = state.findIndex((todo) => todo.id === action.payload)
                 if(!todo){
                    console.log("not found");
                 } else {
                    todo.completed = !todo.completed;
                 }
        }
    }
})

export  const {addTodo, deleteTodo, updateTodo} = slicerfunction.actions;
export default slicerfunction.reducer;

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

