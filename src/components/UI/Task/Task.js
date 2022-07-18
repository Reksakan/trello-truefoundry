import { useState, useRef } from 'react'
import styles from './Task.module.css'
import { useDrag } from 'react-dnd'

const Task = ({cardID, task}) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: "TASK",
    item: { task, cardIdFrom: cardID }
  }))

  return collected.isDragging ? (
    <div ref={dragPreview}
      className={styles.ListCard_TaskCardWrapper} >

      <div className={styles.TaskCard_MainContainer}>
        <div className={`${task.isHard === true ? styles.TaskCard_TaskLabelWrapperHard : styles.TaskCard_TaskLabelWrapper}`  }></div>
        <h3 className={styles.TaskCard_Message}>{task.taskName}</h3>
      </div>
    </div>
  ) : (
    <div ref={drag} {...collected} 
    className={styles.ListCard_TaskCardWrapper} >
      <div className={styles.TaskCard_MainContainer}>
        <div className={`${task.isHard === true ? styles.TaskCard_TaskLabelWrapperHard : styles.TaskCard_TaskLabelWrapper}`  }></div>
        <h3 className={styles.TaskCard_Message}>{task.taskName}</h3>
      </div>
    </div>
  )
}

export default Task