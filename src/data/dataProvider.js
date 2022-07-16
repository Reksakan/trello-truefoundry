import React, { useState, createContext} from 'react'
import LISTS_CARDS from "./data";

export const TasksContext = createContext()

const TasksProvider = props => {
  const [cards, setCards] = useState([...LISTS_CARDS])
  console.log('state in dataProvider: ', cards)                  //DELETE AFTER
  return (
    <TasksContext.Provider value={[cards, setCards]}>
      {props.children}
    </TasksContext.Provider>
  )
}

export default TasksProvider