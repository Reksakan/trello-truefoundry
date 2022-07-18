import TopStrip from '../TopStrip/TopStrip'
import Title from '../Title/Title'
import ListCards from '../../ListCards/ListCards'
// import Card from '../../UI/Card/Card'
// import Task from '../../UI/Task/Task'
import styles from './Main.module.css'

const Main = () => {
  return (
    <main className={styles.main}>
      <section>
        <TopStrip />
        <div className={styles.BoardPage_MainContainer}>
          <Title />
          <ListCards />
        </div>
    </section>
    </main>
    
  )
}

export default Main