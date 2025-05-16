import React, { useState } from 'react'
import styles from "./AddTodo.module.css"

const AddTodo = ({ onNewItem }) => {

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  }

  const handleDueDate = (event) => {
    setDueDate(event.target.value);
  }

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  }


  return (
    <div>
      <div className="container ">
        <form className='row kg-row' onSubmit={handleAddButtonClicked}>
          <div className='col-6'>
            <input type="text" className={styles.inputField} value={todoName} placeholder='Enter Todo Here' onChange={handleNameChange} />
          </div>
          <div className='col-4'>
            <input type="date" value={dueDate} onChange={handleDueDate} />
          </div>
          <div className='col-2'>
            <button type='submit' className='btn btn-success kg-button' >Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTodo
