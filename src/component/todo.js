import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, deleteTodo } from "../reducers";
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
const Todo = () => {
    const [Input, setInput] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const handleOnchange = (e) => {
         setInput(e.target.value);
    }

    const handleAdd = () => {
        dispatch(addTodo());
        setInput("");
    }

     const handleUpdate = (id)=>{
        dispatch(updateTodo(id));
        
     }
     
     const handleDelete = (id)=> {
        dispatch(deleteTodo(id));

     }
    return(
        <>
           <input id='input-id' type='text' value={Input} onChange={handleOnchange}
              placeholder='add a new todo' 
           ></input>{""}
           <button id="add-button" onClick={handleAdd}>submit</button>{""}
        <ul>
           {
            todos.map((todo) => 
               (<li key={todo.id}>
                <span style={{textDecoration: todo.completed? 'line-through': 'none'}} onClick={()=> handleUpdate(todo.id)} >{todo.todo}</span>
              <button onClick={()=> handleDelete(todo.id)}>delete</button>{""}
              </li>)
              
           )}
           </ul>
         </>
       )
}

export default Todo;