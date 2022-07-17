import React, { useState, useContext } from 'react'
import {v4 as uuidv4} from 'uuid'
import styles from './Card.module.css'
import { TasksContext } from '../../../data/dataProvider'
import Task from '../Task/Task'
import AddFeatureForm from '../../UI/AddFeatureForm/AddFeatureForm'
import Icon from "@mdi/react"
import { mdiDotsHorizontal } from '@mdi/js'

const Card = ({ cardId, cardName, cardTasks }) => {
  
  const {addTask} = useContext(TasksContext)
  const [newTask, setNewTask] = useState('')
  
  const addNewTask = (e) => {
    e.preventDefault()
    const newTaskID = uuidv4()
    if(!newTask) {
      return;
    } return addTask({cardId, newTaskID, newTask})
  }
  
  return (
    <div className={styles.ListCard_MainContainer}>
      <div className={styles.ListCard_TitleWrapper}>
        <h3 className={styles.ListCard_Title}>{cardName}</h3>
        <span className="material-icons">
          <Icon path={mdiDotsHorizontal} title="Three dots" size={1}/>
        </span>
      </div>
      <div className={styles.ListCard_TaskListWrapper} id={cardId}>
        {cardTasks?.map(task => (
          <Task key={task.taskId} task={task}/>
        ))}
      </div>
      <AddFeatureForm 
        cardId={cardId} 
        addFeature={'Add a card'} 
        placeholder={'Enter a title for this card...'} 
        buttonName={'Add card'}
        addNewFeature={addNewTask}
        setNewFeature={setNewTask}
      />
    </div>
  )
}

export default Card