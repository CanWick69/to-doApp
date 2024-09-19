import React, { useState } from "react";
function Todo() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] =useState([""])

  const addtask = ()=>{
    if (inputValue.trim()!== ""){
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const deletetask = (index)=>{
    const newTask =task.filter((task, i )=> i !== index);
    setTasks(newTask)
  };

  return (
    <div>
      <h1>To-do List</h1>
      <input
      type="text"
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      />
      <button onClick={addtask}>Add Task</button>
      <ul>
        {tasks.map((tasks,index)=>(
          <li key={index}>
            {tasks}
            <button onClick={()=>deletetask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Todo