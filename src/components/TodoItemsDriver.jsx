import React from 'react'
import TodoItems from './TodoItems'
import styles from "./TodoItemsDriver.module.css"

const TodoItemsDriver = ({ todoItems, onDeleteItem }) => {
  return (
    <div>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItems key={item.name} todoName={item.name} todoDate={item.dueDate}
            onDeleteItem={onDeleteItem} />
        ))}
      </div>
    </div>
  )
}

export default TodoItemsDriver
