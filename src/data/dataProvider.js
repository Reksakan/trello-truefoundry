import React, { useState, useReducer, createContext} from 'react'
import LISTS_CARDS from "./data";

export const TasksContext = createContext()

const defaultCardsState = [...LISTS_CARDS]

const cardsReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TASK' : {
      const cardToUpdate = state.filter(cardToChange => cardToChange.id === action.cardId)[0]
      const indexOfUpdatedCard = state.indexOf(cardToUpdate)
      const updatedCard = {
        id: cardToUpdate.id,
        cardName: cardToUpdate.cardName,
        tasks: [
          ...cardToUpdate.tasks, 
          {
            taskId: action.newTaskID,
            taskName: action.newTask,
            isHard: false}] 
      }
      const newState = [
        ...state.slice(0, indexOfUpdatedCard),
        updatedCard,
        ...state.slice(indexOfUpdatedCard + 1)
      ]
      return newState
    }
    case 'ADD_CARD' : {
      return defaultCardsState
    }
    default: return defaultCardsState
  }  
  
}

const TasksProvider = props => {
  const [ cardsState, dispatchCardsState ] = useReducer(cardsReducer, defaultCardsState)

  const addTaskToCard = ({cardId, newTaskID, newTask}) => {
    console.log(`cardID is ${cardId} and taskID is ${newTaskID} with the task is ${newTask}`)  // DELETE
    dispatchCardsState({
      type: 'ADD_TASK', 
      cardId: cardId,
      newTaskID: newTaskID,
      newTask: newTask
    })
  }

  const addCardToList = (card) => {
    console.log('addCardToList is triggered')
    // dispatchCardsState({type: 'ADD_CARD', card: card})
  }

  const cardsContext = {
    cardsState: cardsState,
    addTask: addTaskToCard,
    addCard: addCardToList,
  }

  return (
    <TasksContext.Provider value={cardsContext}>
      {props.children}
    </TasksContext.Provider>
  )
}

export default TasksProvider





/***
import React, { useState, useReducer, createContext} from 'react'
import LISTS_CARDS from "./data";

export const TasksContext = createContext()

const TasksProvider = props => {
  const [cards, setCards] = useState([...LISTS_CARDS])
  
  return (
    <TasksContext.Provider value={[cards, setCards]}>
      {props.children}
    </TasksContext.Provider>
  )
}

export default TasksProvider 

* ***/