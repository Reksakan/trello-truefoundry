import styles from './Task.module.css'

const Task = ({task}) => {
  console.log('task complexity: ', task.isHard)
  return (
    <div draggable className={styles.ListCard_TaskCardWrapper} id={task.taskId}>
      <div className={styles.TaskCard_MainContainer}>
        <div className={`${task.isHard === true ? styles.TaskCard_TaskLabelWrapperHard : styles.TaskCard_TaskLabelWrapper} ` }></div>
        <h3 className={styles.TaskCard_Message}>{task.taskName}</h3>
      </div>
    </div>
  )
}

export default Task