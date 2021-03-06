import styles from './Title.module.css'
import earthWhiteIcon from '../../../assets/earth_white.b0d834ac.svg'
import Icon from "@mdi/react"
import { mdiStarOutline } from '@mdi/js'

const Title = () => {
  return (
    <div className={styles.BoardPage_TitleWrapper}>
      <h1 className={styles.BoardPage_BoardTitle}>Kanban Board</h1>
      <div className={styles.BoardPage_StarWrapper}>
        <span className="material-icons"><Icon className={styles.Star}path={mdiStarOutline} title="Star" size={1}/></span>
      </div>
      <div className={styles.BoardPage_Separator}></div>
      <button className={`${styles.Button_ButtonWrapper} ${styles.Button_Secondary}`}>
        <img src={earthWhiteIcon} alt="" className={styles.Button_Icon} />
        <span className={styles.Button_Label}>Public</span>
      </button>
      <div className={styles.BoardPage_Separator}></div>
      <span className={styles.UserAvatar_DefaultAvatar}>AH</span>
    </div>
  )
}

export default Title