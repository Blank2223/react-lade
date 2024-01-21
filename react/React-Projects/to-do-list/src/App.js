import React, {useState} from "react";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState(' ');

    function addTodo () {
        if(task !== ""){
            setTodos([...todos,task]);
            setTask(' ');
        }
    };

    const remove = (index) =>{
        const update = [...todos];
        update.splice(index,1);
        setTodos(update);
    };

    return(
        <>
          <h1>Welcome To-Do-List</h1>

          <input type="text" value={task} onChange={(e) =>setTask(e.target.value)}/>
          <button onClick={addTodo}>ADD</button>

          <ul>
            {todos.map((todos, index) =>(
                <li key={index}>{todos}
                <button onClick={() => remove(index)}>del</button></li>
            ))}
          </ul>
        </>
    );
}

export default App;