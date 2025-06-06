import React from 'react'

const TodoItems = ({ todoName, todoDate, onDeleteItem }) => {
  return (
    <div>
      <div className="container">
        <div className='row kg-row'>
          <div className='col-6'>
            {todoName}
          </div>
          <div className='col-4'>
            {todoDate}
          </div>
          <div className='col-2'>
            <button type='button ' className='btn btn-danger kg-button' onClick={() => onDeleteItem(todoName)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoItems
