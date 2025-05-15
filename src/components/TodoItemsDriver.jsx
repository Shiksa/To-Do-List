import React from 'react'
import TodoItems from './TodoItems'
import styles from "./TodoItemsDriver.module.css"

const TodoItemsDriver = ({ todoItems }) => {
  return (
    <div>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItems todoName={item.name} todoDate={item.dueDate} />
        ))}
      </div>
    </div>
  )
}

export default TodoItemsDriver
