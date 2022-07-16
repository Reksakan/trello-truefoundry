import React, { useState } from 'react'
import Icon from "@mdi/react"
import { mdiPlus, mdiWindowClose } from '@mdi/js'
import styles from './AddTaskForm.module.css'

const AddTaskForm = () => {
  
  const [isAddTaskActive, setIsTaskActive] = useState(false)
  
  const addTaskClick = (e) => {
    e.preventDefault();
    setIsTaskActive(!isAddTaskActive)
  }

  return (
    <>
    <div className={`${isAddTaskActive ? styles.hidden : styles.ListCards_NewListCard_AddMoreWrapper}`} onClick={addTaskClick}>
      <span className={styles.NewTaskCard_PlusIcon}>
        <Icon className={styles.Plus} path={mdiPlus} title="Dog" size={1}/>
      </span>
      Add Card
    </div>
    <form className={`${isAddTaskActive ? '' : styles.hidden}`}> 
      <input className={styles.NewTaskCard_InputBox} type="text" required placeholder='Enter a title for this card...' name='cardTitle'/>
      <div className={styles.NewTaskCard_ButtonWrapper}>
        <button className={`${styles.Button_ButtonWrapper} ${styles.Button_Primary}`}>
          <span className={styles.Button_Label}>Add card</span>  
        </button>
        <span className={styles.NewTaskCard_CloseIconWrapper} onClick={addTaskClick}>
          <Icon path={mdiWindowClose} title="Close" size={1}/>
        </span>
      </div>

    </form>
    </>
  )
}

export default AddTaskForm