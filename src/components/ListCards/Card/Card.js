import Task from '../Task/Task'
import styles from './Card.module.css'
import AddTaskForm from '../../UI/AddTaskForm/AddTaskForm'

const Card = ({ cardId, cardName, cardTasks }) => {
  return (
    <div className={styles.ListCard_MainContainer}>
      <div className={styles.ListCard_TitleWrapper}>
        <h3 className={styles.ListCard_Title}>{cardName}</h3>
        <span className="material-icons"></span>
      </div>
      <div className={styles.ListCard_TaskListWrapper} id={cardId}>
        {cardTasks?.map(task => (
          <Task key={task.taskId} task={task}/>
        ))}
      </div>
      <AddTaskForm />
    </div>
  )
}

export default Card