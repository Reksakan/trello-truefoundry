import styles from './Navbar.module.css'
import buttonIconPeople from '../../../assets/button_icon_people.png'
import buttonIconTwoArrowsRight from '../../../assets/button_icon_2arrows_right.png'

const Navbar = () => {
  return (
    <nav className={styles.Sidebar_SidebarWrapper}>
      <button className={`${styles.Button_ButtonWrapper} ${styles.Button_White}`}>
        <img className={styles.Button_Icon} src={buttonIconPeople} alt=''/>
      </button>
      <button className={`${styles.Button_ButtonWrapper} ${styles.Button_Transparent}`}>
        <img className={styles.Button_Icon} src={buttonIconTwoArrowsRight} alt=''/>
      </button>
    </nav>
  )
}

export default Navbar

