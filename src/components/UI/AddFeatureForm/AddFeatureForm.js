import React, { useState, useContext } from 'react'
import Icon from "@mdi/react"
import { mdiPlus, mdiWindowClose } from '@mdi/js'
import styles from './AddFeatureForm.module.css'

const AddFeatureForm = ({addFeature, placeholder, buttonName, addNewFeature, setNewFeature}) => {
  
  const [isAddTaskActive, setIsTaskActive] = useState(false)

  const addFeatureWindowHandle = (e) => {
    e.preventDefault();
    setIsTaskActive(!isAddTaskActive)
  }

  return (
    <>
    <div className={`${isAddTaskActive ? styles.hidden : styles.ListCards_NewListCard_AddMoreWrapper}`} onClick={addFeatureWindowHandle}>
      <span className={styles.NewTaskCard_PlusIcon}>
        <Icon className={styles.Plus} path={mdiPlus} title="Dog" size={1}/>
      </span>
      {addFeature}
    </div>
    <form className={`${isAddTaskActive ? '' : styles.hidden}`}> 
      <input 
        className={styles.NewTaskCard_InputBox} 
        type="text" 
        required 
        placeholder={placeholder} 
        name='cardTitle' 
        onChange={e => {setNewFeature(e.target.value)}}
      />
      <div className={styles.NewTaskCard_ButtonWrapper}>
        <button className={`${styles.Button_ButtonWrapper} ${styles.Button_Primary}`} onClick={addNewFeature}>
          <span className={styles.Button_Label}>{buttonName}</span>  
        </button>
        <span className={styles.NewTaskCard_CloseIconWrapper} onClick={addFeatureWindowHandle}>
          <Icon path={mdiWindowClose} title="Close" size={1}/>
        </span>
      </div>

    </form>
    </>
  )
}

export default AddFeatureForm