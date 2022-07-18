import React, { useState, useReducer, createContext} from 'react'
import LISTS_CARDS from "./data";
import {v4 as uuidv4} from 'uuid'

export const TasksContext = createContext()

const defaultCardsState = [...LISTS_CARDS]

export const ACTION_TYPES = {
  ADD_TASK: 'ADD_TASK',
  ADD_CARD: 'ADD_CARD',
  DRAG_TASK: 'DRAG_TASK',
  DRAG_CARD: 'DRAG_CARD',
}

const addCardAction = (cardName) => {
  const cardId = uuidv4()
  return { type: ACTION_TYPES.ADD_CARD, cardId, cardName }
}

const addTaskAction = (cardId, taskName) => {
  const taskId = uuidv4()
  return { type: ACTION_TYPES.ADD_TASK, cardId, taskId, taskName }
}

const dragTaskAction = ({ cardIdFrom, cardIdTo, taskId }) => {
  return {
    type: ACTION_TYPES.DRAG_TASK,
    cardIdFrom, cardIdTo, taskId
  }
}


const cardsReducer = (state, action) => {
  switch(action.type) {
    case ACTION_TYPES.ADD_TASK : {
      const  { cardId, taskId, taskName } = action
      const cardIndex = state.findIndex(({ id }) => cardId === id);
      const card = state[cardIndex]

      const updatedCard = {
        ...card,
        tasks: [
          ...card.tasks,
          {
            taskId,
            taskName,
            isHard: false
          },
        ]
      }
      const updatedState = [
        ...state.slice(0, cardIndex),
        updatedCard,
        ...state.slice(cardIndex + 1)
      ]
      return updatedState
    }

    case ACTION_TYPES.ADD_CARD : {
      const { cardName, cardId } = action;
      const newState = state.concat({
        id: cardId,
        cardName: cardName,
        tasks: [],
      })
      return newState
    }

    case ACTION_TYPES.DRAG_CARD: {
      const { cardId, position } = action
      const card = state.find((id) => id === cardId)
      const stateWithoutCard = state.filter((id) => id !== cardId)

      const reorderedState = [
        ...stateWithoutCard.slice(0, position),
        card,
        ...stateWithoutCard.slice(position)
      ]

      return reorderedState
    }

    case ACTION_TYPES.DRAG_TASK: {
      const { cardIdFrom, cardIdTo, taskId: draggedTaskId } = action
      const cardIndexFrom = state.findIndex(({id}) => id === cardIdFrom)
      const cardFrom = state[cardIndexFrom];
      const cardIndexTo = state.findIndex(({id}) => id === cardIdTo)
      const cardTo = state[cardIndexTo]
      
      const task = cardFrom.tasks.find(({taskId: _taskId}) => _taskId === draggedTaskId);

      const filteredTasks = cardFrom.tasks.filter(({taskId: _taskId}) => _taskId !== draggedTaskId);

      const updatedCardTo = {
        ...cardTo,
        tasks: [
          ...cardTo.tasks,
          task,
        ]
      }

      const updatedCardFrom = {
        ...cardFrom,
        tasks: filteredTasks
      }

      const updatedStateWithCardTo = [
        ...state.slice(0, cardIndexTo),
        updatedCardTo,
        ...state.slice(cardIndexTo+1)
      ]
      
      const updatedStateWithCardFrom = [
        ...updatedStateWithCardTo.slice(0, cardIndexFrom),
        updatedCardFrom,
        ...updatedStateWithCardTo.slice(cardIndexFrom+1)
      ]

      return updatedStateWithCardFrom
    }

    default: {
      return state
    }
  }  
  
}

const TasksProvider = props => {
  const [ cardsState, dispatchCardsState ] = useReducer(cardsReducer, defaultCardsState)

  const addTask = (cardId, taskName) => {
    dispatchCardsState(addTaskAction(cardId, taskName))
  }

  const addCard = (cardName) => {
    dispatchCardsState(addCardAction(cardName))
  }

  const dragTask = ({ cardIdFrom, cardIdTo, taskId }) => {
    dispatchCardsState(dragTaskAction({ cardIdFrom, cardIdTo, taskId }))
  }

  const cardsContext = {
    cardsState: cardsState,
    addTask,
    addCard,
    dragTask,
  }

  return (
    <TasksContext.Provider value={cardsContext}>
      {props.children}
    </TasksContext.Provider>
  )
}

export default TasksProvider
