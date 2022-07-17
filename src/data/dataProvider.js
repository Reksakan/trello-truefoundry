import React, { useState, useReducer, createContext} from 'react'
import LISTS_CARDS from "./data";

export const TasksContext = createContext()

const defaultCardsState = [...LISTS_CARDS]

const cardsReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TASK' : {
      //Minimized the code: Should be brought separately in Helpers
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
       const newState = state.concat({
        id: action.newCardID,
        cardName: action.newCard,
        tasks: [],
       })
      return newState
    }
    default: return defaultCardsState
  }  
  
}

const TasksProvider = props => {
  const [ cardsState, dispatchCardsState ] = useReducer(cardsReducer, defaultCardsState)

  const addTaskToCard = ({cardId, newTaskID, newTask}) => {
    dispatchCardsState({
      type: 'ADD_TASK', 
      cardId: cardId,
      newTaskID: newTaskID,
      newTask: newTask
    })
  }

  const addCardToList = ({newCardID, newCard}) => {
    console.log('new card ID and new card description are:', newCardID + newCard)       //DELETE
    dispatchCardsState({type: 'ADD_CARD', newCardID: newCardID, newCard: newCard})
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
