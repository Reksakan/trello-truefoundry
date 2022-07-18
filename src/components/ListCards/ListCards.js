import React, { useState, useContext } from 'react'
import Card from '../UI/Card/Card'
import { TasksContext } from '../../data/dataProvider'
import AddFeatureForm from '../UI/AddFeatureForm/AddFeatureForm'
import styles from './ListCards.module.css'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

const ListCards = (props) => {
  const {cardsState, addCard} = useContext(TasksContext)

  const addNewCard = (cardName) => {
    addCard(cardName)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.BoardPage_ListWrapper}>
        {cardsState?.map(({ id, cardName, tasks }) => (
          <Card key={id} cardId={id} cardName={cardName} cardTasks={tasks}/>
        ))}
        <div className={styles.NewListCard_NewListWrapper}>
          <AddFeatureForm 
            featureName={'Add another list'} 
            placeholder={'Enter list title...'} 
            buttonName={'Add list'}
            onSubmit={addNewCard}
          />  
        </div>
      </div>
    </DndProvider>
 )
}

export default ListCards