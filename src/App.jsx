import React from 'react'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItemsDriver from './components/TodoItemsDriver'
import "./App.css";

const App = () => {

  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2025"
    },
    {
      name: "Go To College",
      dueDate: "6/10/2025"
    },
    {
      name: "Get Job",
      dueDate: "7/10/2025"
    }
  ]

  return (
    <div>
      <div className='todo-container'>
        <AppName />
        <AddTodo />
        <TodoItemsDriver todoItems={todoItems} />

      </div>
    </div>
  )
}

export default App
