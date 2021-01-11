
import React, { useState, useRef } from 'react';

import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([])
  const refNextId = useRef(1)
  const handleAddTodoItem=(text)=> {
    const nextId = refNextId.current
    refNextId.current++

    setTodos([...todos , {
      id:nextId,
      text: text,
      done: false
    }])
  }

  const handleDeleteTodoItem=(id)=> {
    const filtedTodos = todos.filter((todo)=> todo.id !== id)
    setTodos(filtedTodos)
  }

  const handleToggleTodoItem = (id) => {
    const changedTodos = todos.map((todo)=>{
      if(todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        }
      }

      return todo
    })
    setTodos(changedTodos)
  }

  const handleModifyTodoItem = ({id, text}) => {
    const changedTodos = todos.map((todo)=>{
      if(todo.id === id) {
        return {
          ...todo,
          text: text
        }
      }

      return todo
    })
    setTodos(changedTodos)
  }

  return (
    <div className="App">
      <TodoTemplate todos={todos} onAdd={handleAddTodoItem} onDelete={handleDeleteTodoItem} onToggle={handleToggleTodoItem} onModify={handleModifyTodoItem}/>
    </div>
  );
}

export default App;
