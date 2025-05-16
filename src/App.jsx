import React, { useState } from 'react'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItemsDriver from './components/TodoItemsDriver'
import "./App.css";
import WelcomeMessage from './components/WelcomeMessage';

const App = () => {


  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added, Name: ${itemName} Due on: ${itemDueDate}`);
    const newTodoItem = [...todoItems, { name: itemName, dueDate: itemDueDate }]
    setTodoItems(newTodoItem);
  }

  const handleDeleteItem = (todoItemName) => {
    // console.log(`Item Deleted ${todoItemName}`);
    const newTodoItem = todoItems.filter((items) =>
      items.name !== todoItemName
    )
    setTodoItems(newTodoItem);
  }

  return (
    <div>
      <div className='todo-container'>
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {!todoItems.length && <WelcomeMessage />}
        <TodoItemsDriver todoItems={todoItems} onDeleteItem={handleDeleteItem} />

      </div>
    </div>
  )
}

export default App
