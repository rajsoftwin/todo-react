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

// //     export default reducer;

//  const initialstate = {
//     loading : false,
//     weather : {},
//     error: ""
//   };

//    const Weatherreducer = (state = initialstate, action) => {

//     switch(action.type) {
//        case "loading" : 
//            return {...state, loading : true};
//       case "success": 
//            return  { loading: false, weather : action.payload, error : ""};
//       case "failure" : 
//         return { loading : false, weather : "",  error: action.payload};
//         default : 
//           return state;
//       }
//     } 

// export default reducer;

 // quizzes = quiz 1, quiz 2, quiz 3.. 
// quiz 1 = question 1, question 2, question 3...
// question 1 = answer 1, answer 2, answer 3.... 

const quizzes = 
    {
        "Quiz-1" : {
             "title" : "GK Quiz",
             "description" : "This quiz contains general knowledge questions.",
            "Question-1" : { 
                "id" : 1,
                "question" :  "How many states does India currently have ?",
                 "answers": [23,24,21,29],
                 "Correct Answer" : 29,
           },
            "Question-2" : { 
                "id" : 2,
                "question" :  "Who is the prime minister of India in 1991 ?",
                 "answers" : ["Rahul Gandhi","Narendra Mudi","Chandra Babu naidu","pv narasimha rao"],
                 "Correct Answer" : "Rahul Gandhi",
            },
            "Question-3" : { 
                "id" : 3,
                "question" :  "Why do male peacocks dance ?",
                 "answers" : ["Feel Hungry","Mating call","Its wish","Wants to sleep"],
                 "Correct Answer" : "Mating call",
            },
            "Question-4" : { 
                "id" : 4,
                "question" : "What is the longest coast line in India ?",
                 "answers" : ["Andhra", "Kerala", "Karnataka","Mumbai"],
                 "Correct Answer" : "Andhra",
        }
    },
   "Quiz-2" :   { 
        "title" : "GK Quiz",
        "description" : "This quiz contains general knowledge questions.",
        "Question-1" : { 
            "id" : 1,
            "question" :  "What is the 7th element of periodic table ?",
            "answers": ["Nitrogen", "oxygen", "helium","neon"],
            "Correct Answer" : "Nitrogren",
        },
        "Question-2" : { 
            "id" : 2,
            "question" :  "Who invented radium and uranium ?",
            "answers" : ["Marie Curie","Narendra Mudi","Adolf Hitler","George Bush"],
            "Correct Answer" : "Narendra Modi",
        },
        "Question-3" : { 
            "id" : 3,
            "question" :  "How is the percentage of oxygen on earth ?",
            "answers" : [45, 23, 34, 1],
            "Correct Answer" : 23,
                 "User's Answer" : ""
        },
        "Question-4" : { 
            "id" : 4,
            "question" : "What is the chemical formula of farts ?",
            "answers" : ["O2", "SO2", "S2O", "N2O"],
            "Correct Answer" : "SO2",
      }
    },
    "Quiz-3" : {
        "title" : "GK Quiz",
        "description" : "This quiz contains general knowledge questions.",
        "Question-1" : { 
            "id" : 1,
            "question" :  "Who is the actor that player bahubali ?",
            "answers": ["Narendra Modi", "Hrithik Roshan", "Shahrukh Khan", "Prabhas"],
            "Correct Answer" : "Prabhas",
        },
        "Question-2" : { 
            "id" : 2,
            "question" :  "What are the boxoffice collections of movie sholay in crs?",
            "answers" : [15,54,42,10],
            "Correct Answer" : 10,
        },
        "Question-3" : { 
            "id" : 3,
            "question" :  "What is the habitual dialogue phrase of Allu arjun in pushpa ?",
            "answers" : ["Mai jukhega nahi sala", "ded sow rupaya dega", "hahahahahaha", "jai prabhas"],
            "Correct Answer" : "Mai jukhega nahi sala",
        },
        "Question-4" : { 
            "id" : 4,
            "question" : "who did shahrukh khan clash his with movie in 2018 ?",
            "answers" : ["Yash", "Prabhas", "Allu arjun", "salman khan"],
            "Correct Answer" : "Yash",
      }
    },
  }

const initialState = {
    options :
        { 
            loading : false,
            quizdata : quizzes,
            categorySelected : "",
            selectedAnswer : "",
            // correctAnswers : 0,
            submitted : false,
            totalQuestions : 12,
            error: '',}
}

const quizReducer = (state = initialState, action) => {

      switch(action.type){
        case "loading" : 
              return {...state, options : {...state.options, loading : action.value}};
         case "select_category":
              return {...state, options : {...state.options, categorySelected : action.payload}};
          case "select_answer" :
            return {...state, options : {...state.options, selectedAnswer : action.payload}};
        case "submitted?" : 
            return {...state, options : {...state.options, submitted : true}};
         case "error":
              return {...state, options : {...state.options, error: action.payload}};
        default : 
          return state;
      }
}
export default quizReducer;
