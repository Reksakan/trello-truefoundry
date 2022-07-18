import React, { useState, useContext } from 'react'
import Icon from "@mdi/react"
import { mdiPlus, mdiWindowClose } from '@mdi/js'
import styles from './AddFeatureForm.module.css'

const AddFeatureForm = ({featureName, placeholder, buttonName, onSubmit }) => {
  
  const [isAddTaskActive, setIsTaskActive] = useState(false)
  const [title, setTitle] = useState('')

  const addFeatureWindowHandle = (e) => {
    e.preventDefault();
    setIsTaskActive(!isAddTaskActive)
  }

  const onChange = (e) => {
    setTitle(e.target.value)
  }

  const onClick = () => {
    if (title !== '') {
      onSubmit(title)
    }
  }

  return (
    <>
      <div className={`${isAddTaskActive ? styles.hidden : styles.ListCards_NewListCard_AddMoreWrapper}`} onClick={addFeatureWindowHandle}>
        <span className={styles.NewTaskCard_PlusIcon}>
          <Icon className={styles.Plus} path={mdiPlus} title="Dog" size={1}/>
        </span>
        {featureName}
      </div>
      <div className={`${isAddTaskActive ? '' : styles.hidden}`}> 
        <input 
          className={styles.NewTaskCard_InputBox} 
          type="text" 
          required 
          placeholder={placeholder} 
          onChange={onChange}
        />
        <div className={styles.NewTaskCard_ButtonWrapper}>
          <button className={`${styles.Button_ButtonWrapper} ${styles.Button_Primary}`} onClick={onClick}>
            <span className={styles.Button_Label}>{buttonName}</span>  
          </button>
          <span className={styles.NewTaskCard_CloseIconWrapper} onClick={addFeatureWindowHandle}>
            <Icon path={mdiWindowClose} title="Close" size={1}/>
          </span>
        </div>

      </div>
    </>
  )
}

export default AddFeatureForm