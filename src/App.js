import "./App.css";
import React, { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  const handleAddTodo = () => {
    const text = inputRef.current.value;
    const newitem = { completed: false, text };
    console.log(text);
    setTodos([...todos, newitem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    console.log(newTodos);
  };


  const hansleDleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }


  return (
    <div className="App">
      <h2>TO DO LIST</h2>
      <div className="to-do-container">
        <ul>
          {todos.map(({ text, completed }, index) => (

            <div className="item">
              <li
                className={completed ? "done" : ""}
                key={index}
                onClick={() => handleItemDone(index)}
              >
                {text}
              </li>
              <span onClick={() => hansleDleteItem(index)}>❌</span>
            </div>
          ))}
        </ul>

        <input
          className="inputbox"
          ref={inputRef}
          placeholder="Enter Something Here...."
        />

        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
