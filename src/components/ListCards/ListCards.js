import React, { useState, useContext } from 'react'
import {v4 as uuidv4} from 'uuid'
import Card from './Card/Card'
import { TasksContext } from '../../data/dataProvider'
import AddFeatureForm from '../UI/AddFeatureForm/AddFeatureForm'
import styles from './ListCards.module.css'
import Icon from "@mdi/react"
import { mdiPlus } from '@mdi/js'

const ListCards = () => {
  
  const {cardsState, addCard} = useContext(TasksContext)
  const [newCard, setNewCard] = useState('')

  const addNewCard = (e) => {
    e.preventDefault()
    const newCardID = uuidv4()
    if(!newCard) {
      return
    } return addCard({newCardID, newCard})
  }

  return (
  <div className={styles.BoardPage_ListWrapper}>
    {cardsState?.map(card => (
      <Card key={uuidv4()} cardId={card.id} cardName={card.cardName} cardTasks={card.tasks}/>
    ))}
    <div className={styles.NewListCard_NewListWrapper}>
      <AddFeatureForm 
        addFeature={'Add another list'} 
        placeholder={'Enter list title...'} 
        buttonName={'Add list'}
        addNewFeature={addNewCard}
        setNewFeature={setNewCard}
      />  
    </div>
    {/* <div className={styles.NewListCard_NewListWrapper}>
      <div className={styles.NewListCard_AddMoreWrapper}>
        <span className="material-icons"><Icon path={mdiPlus} title="Close" size={1}/></span>
        Add another list
      </div>
    </div> */}
  </div>
 )
}

export default ListCards