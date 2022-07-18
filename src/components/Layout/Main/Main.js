import TopStrip from '../TopStrip/TopStrip'
import Title from '../Title/Title'
import ListCards from '../../ListCards/ListCards'
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