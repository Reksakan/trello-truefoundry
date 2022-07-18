import styles from './Header.module.css'
import arrowDown from '../../../assets/arrow-down.png'
import buttonIconExlMark from '../../../assets/button_icon.png'
import buttonIconBell from '../../../assets/button_icon_bell.png'
import Icon from "@mdi/react"
import { mdiMagnify } from '@mdi/js'

const Header = () => {
  return (
    <>
      <header className={styles.topBar_MainContainer}>
        <div className={styles.topBar_LeftMenu}>
          <button className={styles.Button_ButtonWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>
          </button>
          <div className={styles.topBar_MenuItem}>
            <p className={styles.topBar_Logo}></p>
          </div>
          <div className={styles.topBar_MenuItem}>
            <span>Workspace</span>
            <img className={styles.topBar_ArrowDown} src={arrowDown} alt="Carot Down"/>
          </div>
          <div className={styles.topBar_MenuItem}>
            <span>Recent</span>
            <img className={styles.topBar_ArrowDown} src={arrowDown} alt="Carot Down"/>
          </div>
          <div className={styles.topBar_MenuItem}>
            <span>Starred</span>
            <img className={styles.topBar_ArrowDown} src={arrowDown} alt="Carot Down"/>
          </div>
          <div className={styles.topBar_MenuItem}>
            <span>Templates</span>
            <img className={styles.topBar_ArrowDown} src={arrowDown} alt="Carot Down"/>
          </div>
          <button className={`${styles.Button_ButtonWrapper} ${styles.Button_DarkButton}`}>
            <span className={styles.Button_Label}>Create</span>
          </button>
        </div>
        <div className={styles.topBar_RightMenu}>
          <div className={styles.topBar_SearchWrapper}>
            <input className={styles.topBar_SearchInput} type='search' placeholder='Search'/>
            <div id='text-field-container' pseudo='-webkit-textfield-decoration-container'>
              <div id='editing-view-port'>
                <div></div>
              </div>
              <div pseudo='-webkit-search-cancel-button' id='search-clear'></div>
            </div>
            <span className='material-icons'><Icon path={mdiMagnify} title="Search" size={1} /></span>
          </div>
          <button className={styles.Button_ButtonWrapper}>
            <img className={styles.Button_Icon} src={buttonIconExlMark} alt=''/>
          </button>
          <button className={styles.Button_ButtonWrapper}>
            <img className={styles.Button_Icon} src={buttonIconBell} alt=''/>
          </button>
          <span className={styles.UserAvatar_DefultAvatar}>QK</span>
        </div>
      </header>
    </>
  )
}

export default Header