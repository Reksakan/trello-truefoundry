import styles from './TopStrip.module.css'
import earthIcon from '../../assets/earth_green.f5dba22e.svg'
import Icon from "@mdi/react"
import { mdiWindowClose } from '@mdi/js'


const TopStrip = () => {
  return (
    <div className={styles.BoardPage_TopStrip}>
      <div>
        <img className={styles.BoardPage_EarthIcon} src={earthIcon} alt='Earth Icon' />
        <span className={styles.BoardPage_Message}>This board is set to public. Board admins can change its visibility setting at any time.</span>
        <a className={styles.BoardPage_KnowMore}>Learn more here</a>
      </div>
      <span className="material-icons"><Icon path={mdiWindowClose} title="Close" size={1}/></span>
    </div>
  )
}

export default TopStrip