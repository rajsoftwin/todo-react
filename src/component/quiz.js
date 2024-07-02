// import { useSelector, useDispatch } from "react-redux";
// // import Weatherreducer from "../reducers";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { answerQuestion } from '../actions/action';
import "./Quiz.css";
import { useNavigate } from 'react-router-dom';

// import { useSelector } from "react-redux";
// import { WEATHER_API_KEY } from "../utils/constants";
// import axios from "axios";


//  const weatherURL = `https://api.openweathermap.org/data/2.5/weather`;


// import { addTodo, toggleComplete, deleteTodo } from "../reducers/index";
// const Counter = ({ counter, increment, decrement }) => {
//   return (
//     <div>
//       <p className="counter_title">Counter: {counter}</p>
//       <button className="button" onClick={increment}>
//         Increment
//       </button>
//       <button className="button" onClick={decrement}>
//         Decrement
//       </button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   counter: state.counter 
//   //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers to ensure that 'counter' matches the correct key in your store.
// });

// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch({ type: "INCREMENT" }),
//   decrement: () => dispatch({ type: "DECREMENT" })
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);


// const Todo = () => {
//   const [text, setText] = useState("");
//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();

//   const handleInputChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleAddTodo = () => {
//     if (text) {
//       dispatch(addTodo(text));
//       setText("");
//     }
//   };

//   const handleToggleComplete = (id) => {
//     dispatch(toggleComplete(id));
//   };

//   const handleDeleteTodo = (id) => {
//     dispatch(deleteTodo(id));
//   };

//   return (
//     <div>
//       <input type="text" value={text} onChange={handleInputChange} />{" "}
//       <button onClick={handleAddTodo}> Add Todo </button>{" "}
//       <ul>
//         {" "}
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             style={{
//               textDecoration: todo.completed ? "line-through" : "none",
//             }}
//           >
//             {todo.text}{" "}
//             <button onClick={() => handleToggleComplete(todo.id)}>
//               {" "}
//               {todo.completed ? "Mark Incomplete" : "Mark Complete"}{" "}
//             </button>{" "}
//             <button onClick={() => handleDeleteTodo(todo.id)}> Delete </button>{" "}
//           </li>
//         ))}{" "}
//       </ul>{" "}
//     </div>
//   );
// };

// export default Todo;

// const Weather = () => {

//      const [city, setCity] =useState("");
//       const weatherData = useSelector(state => state.weather);
//       const dispatch = useDispatch();

//       const handleInputChange = (e) => {
//         setCity(e.target.value);
//           };
        
//        const handleFetch = async() => {
//             dispatch({type : "loading"});
//            try {
//                const response = await axios.get(`${weatherURL}?q=${city.toLowerCase()}&APPID=${WEATHER_API_KEY}`);
//                  dispatch({type : "success", payload : response.data});     
//            } catch (error) {
//               dispatch({type : "failure", error: error.message})
//            }   
//         //    dispatch();
//         // setCity("");
//      }

//       const handleSubmit = (e) => {
//              e.preventDefault();
//         if(city.trim() !== ''){
//             dispatch(handleFetch(city));
//         }
//       }
//        return (
//         <div>
//               <h1 style={{textAlign: "center",  fontFamily: "Verdana, Geneva, Tahoma, sans-serif", color: "greenyellow", border: 1, }}>Welcome to the weather station. Bye</h1>
//            <form onSubmit={handleSubmit}  style={{display: "flex", marginTop: "150px", flexDirection: "column", width : "70vh", marginLeft: "auto", marginRight: "auto"}} >
//               <input type="text" id="input-id" value={city} onChange={handleInputChange} placeholder="Enter a city name"></input>
//               <button id="button-id" type="submit">Submit..</button>
//            </form>
//            {weatherData.loading && <p>Loading...</p>}
//            {weatherData.error && <p>Error: {weatherData.error}</p>}

//            {!weatherData.loading && !weatherData.error && weatherData.data && (
//         <div style={{ color: "green", marginTop: "100px", marginLeft: "20px" }}>
//           <h2 style={{ color: "goldenred", fontSize: "60px" }}>{weatherData.data.name}</h2>
//           <h2>
//             Temperature of the city: <span>{weatherData.data.main.temp} K</span>
//           </h2>
//           <h2>
//             Windspeed of the city: <span>{weatherData.data.wind.speed} m/s</span>
//           </h2>
//           <h2>
//             Humidity of the city: <span>{weatherData.data.main.humidity} %</span>
//           </h2>
//           <h2>
//             Description of the city: <span>{weatherData.data.weather[0].description}</span>
//           </h2>
//         </div>
//       )}
//         </div>
//        )
// }
// export default Weather;


const Quiz = () => {
  const selectedQuizId = useSelector((state) => state.quiz.selectedQuiz);
  const quiz = useSelector((state) => selectedQuizId ? state.quiz.quizzes[selectedQuizId] : null);
 const navigate = useNavigate();
 
   if (!quiz) {
    return <div>Select a quiz to start</div>;
  }

  // const handleAnswer = (questionId, answer) => {
  //   dispatch(answerQuestion(selectedQuizId, questionId, answer));
  // };
     
  

  return (
    <div className="quiz">
      <h2>{quiz.title}</h2>
      <p>{quiz.description}</p>

      {quiz.questions.map((question) => (
        <div key={question.id} style={{ marginBottom: '20px' }}>
          <p>{question.question}</p>
          {question.answers.map((answer) => (
            <button
              key={answer}
              // onClick={() => handleAnswer(question.id, answer)}
              style={{
                display: 'block',
                margin: '5px 0',
                backgroundColor: question.userAnswer === answer ? (answer === question.correctAnswer ? 'green' : 'red') : '',
                color: question.userAnswer === answer ? 'white' : 'black',
              }}
            >
              {answer}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Quiz;

// quizzes 