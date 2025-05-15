import React from 'react'
import styles from "./AddTodo.module.css"

const AddTodo = () => {
  return (
    <div>
      <div className="container ">
        <div className='row kg-row'>
          <div className='col-6'>
            <input type="text" className={styles.inputField} placeholder='Enter Todo Here' />
          </div>
          <div className='col-4'>
            <input type="date" />
          </div>
          <div className='col-2'>
            <button type='button' className='btn btn-success kg-button'>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTodo
