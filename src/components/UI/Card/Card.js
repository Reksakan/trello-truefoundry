import React, { useContext } from 'react'
import styles from './Card.module.css'
import { TasksContext } from '../../../data/dataProvider'
import Task from '../Task/Task'
import AddFeatureForm from '../AddFeatureForm/AddFeatureForm'
import Icon from "@mdi/react"
import { mdiDotsHorizontal } from '@mdi/js'
import {useDrop} from 'react-dnd'

const Card = ({ cardId, cardName, cardTasks }) => {
   
  const {addTask, dragTask} = useContext(TasksContext) 

  const [collectedProps, drop] = useDrop(() => ({
    accept: "TASK",
    drop: ({cardIdFrom, task}, monitor) => {
      dragTask({ cardIdFrom, taskId: task.taskId, cardIdTo: cardId })
    }
  }))
  
  
  const addNewTask = (taskName) => {
    addTask(cardId, taskName)
  }
  
  return (
    <div className={styles.ListCard_MainContainer} ref={drop}>
      <div className={styles.ListCard_TitleWrapper}>
        <h3 className={styles.ListCard_Title}>{cardName}</h3>
        <span className="material-icons">
          <Icon path={mdiDotsHorizontal} title="Three dots" size={1}/>
        </span>
      </div>
      <div className={styles.ListCard_TaskListWrapper} id={cardId} >
        {cardTasks?.map(task => (
          <Task 
            key={task.taskId} 
            cardID={cardId} 
            task={task}
          />
        ))}
      </div>
      <AddFeatureForm 
        cardId={cardId} 
        featureName={'Add a card'} 
        placeholder={'Enter a title for this card...'} 
        buttonName={'Add card'}
        onSubmit={addNewTask} 
      />
    </div>
  )
}

export default Card