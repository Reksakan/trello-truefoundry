import React, { useState, useContext } from 'react'
import {v4 as uuidv4} from 'uuid'
import Icon from "@mdi/react"
import { mdiPlus, mdiWindowClose } from '@mdi/js'
import { TasksContext } from '../../../data/dataProvider'
import styles from './AddTaskForm.module.css'

const AddTaskForm = ({cardId}) => {
  
  const [isAddTaskActive, setIsTaskActive] = useState(false)
  const [newTask, setNewTask] = useState('')
  const {addTask} = useContext(TasksContext)

  const addTaskWindowHandle = (e) => {
    e.preventDefault();
    setIsTaskActive(!isAddTaskActive)
  }

  const addNewTask = (e) => {
    e.preventDefault();
    const newTaskID = uuidv4()
    if(!newTask) {
      return;
    } return addTask({cardId, newTaskID, newTask})
  }

  return (
    <>
    <div className={`${isAddTaskActive ? styles.hidden : styles.ListCards_NewListCard_AddMoreWrapper}`} onClick={addTaskWindowHandle}>
      <span className={styles.NewTaskCard_PlusIcon}>
        <Icon className={styles.Plus} path={mdiPlus} title="Dog" size={1}/>
      </span>
      Add Card
    </div>
    <form className={`${isAddTaskActive ? '' : styles.hidden}`}> 
      <input 
        className={styles.NewTaskCard_InputBox} 
        type="text" 
        required 
        placeholder='Enter a title for this card...' 
        name='cardTitle' 
        onChange={e => {setNewTask(e.target.value)}}
      />
      <div className={styles.NewTaskCard_ButtonWrapper}>
        <button className={`${styles.Button_ButtonWrapper} ${styles.Button_Primary}`} onClick={addNewTask}>
          <span className={styles.Button_Label}>Add card</span>  
        </button>
        <span className={styles.NewTaskCard_CloseIconWrapper} onClick={addTaskWindowHandle}>
          <Icon path={mdiWindowClose} title="Close" size={1}/>
        </span>
      </div>

    </form>
    </>
  )
}

export default AddTaskForm