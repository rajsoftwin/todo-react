import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

function QuizFetch(){
  
    const [question, setQuestion] = useState("");
      const [options, setOptions] = useState(null);
      const [answer, checkAnswer] = useState(false);
      const quizData = useSelector(state => state.quizData);

       const dispatch = useDispatch();


    function handleQuestionChange(e){
        dispatch(setQuestion(e.target.value));
      
    }

    function appendOption(){

       
    }


  
    function checkAns(){
        
      }
    

     return (
        <>
          <div class = "quiz-fetch-container">
               <p style={{}} id="question">{/* here do something */}</p>
                <input type="checkbox"value={setOptions()} onClick={checkAns(checkAnswer)} /> 
                <input type="checkbox"value={setOptions()}/>
                <input type="checkbox"value={setOptions()}/>
                <input type="checkbox"value={setOptions()}/> 
               <button onClick={handleQuestionChange} type="submit"> </button>
          </div>
         
          {
            quizData["Quiz-1"]["Question-1"].map(question)
          }
          
      </>
     )
     
}

export default QuizFetch;