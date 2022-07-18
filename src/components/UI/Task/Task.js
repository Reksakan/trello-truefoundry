import { useState, useRef } from 'react'
import styles from './Task.module.css'
import { useDrag } from 'react-dnd'

const getStyles = () => {
  return styles.currentTask
}

const Task = ({cardID, task}) => {
  // const [isDragging, setIsDragging] = useState(false)
  // const dragItem = useRef()
  // const dragNode = useRef()

  // const handleDragStart = (e, params) => {
  //   dragItem.current = params
  //   dragNode.current = e.target
  //   dragNode.current.addEventListener('dragend', handleDragEnd)
  //   setTimeout(()=> {
  //     setIsDragging(true)
  //   }, 0)
  // }

  // const handleDragEnd = () => {
  //   setIsDragging(false)
  //   dragNode.current.removeEventListener('dragend', handleDragEnd)
  //   dragItem.current = null
  //   dragNode.current = null
  // }

  // const handleDragEnter = (e) => {
  //   console.log('Entering drag..')
  // }

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