import React, { useContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import Card from './Card/Card'
import { TasksContext } from '../../data/dataProvider'
import styles from './ListCards.module.css'
import Icon from "@mdi/react"
import { mdiPlus } from '@mdi/js'

const ListCards = () => {
const [cards, setCards] = useContext(TasksContext)

  return (
  <div className={styles.BoardPage_ListWrapper}>
    {cards?.map(card => (
      <Card key={uuidv4()} cardId={card.id} cardName={card.cardName} cardTasks={card.tasks}/>
    ))}
    <div className={styles.NewListCard_NewListWrapper}>
      <div className={styles.NewListCard_AddMoreWrapper}>
        <span className="material-icons"><Icon path={mdiPlus} title="Close" size={1}/></span>
        Add another list
      </div>
    </div>
  </div>
 )
}

export default ListCards