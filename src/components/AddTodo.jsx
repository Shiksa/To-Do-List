import React, { useRef } from 'react'
//import { useState } from 'react'
import styles from "./AddTodo.module.css"

const AddTodo = ({ onNewItem }) => {

  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // }

  // const handleDueDate = (event) => {
  //   setDueDate(event.target.value);
  // }

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    onNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    // setTodoName("");
    // setDueDate("");
  }


  return (
    <div>
      <div className="container ">
        <form className='row kg-row' onSubmit={handleAddButtonClicked}>
          <div className='col-6'>
            <input type="text"
              ref={todoNameElement}
              className={styles.inputField}
              //value={todoName}
              //onChange={handleNameChange}
              placeholder='Enter Todo Here'
            />
          </div>
          <div className='col-4'>
            <input type="date"
              //value={dueDate} 
              //onChange={handleDueDate}
              ref={dueDateElement}
            />
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
