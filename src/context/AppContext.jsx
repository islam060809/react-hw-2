import React, { createContext, useState } from 'react'

export const CounterContext = createContext()

const AppContext = ({ children }) => {
  const [counter, setCounter] = useState(11)
  const [isVisible, setIsVisible] = useState(false)

  const plus = () => setCounter((prevState) => prevState += 1)
  const minus = () => {
    if (counter === 1) return;
    setCounter((prevState) => prevState -= 1)
  }
  const delCounter = () => setIsVisible(true)

  const value = {
    counter, isVisible, delCounter, plus, minus
  }
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  )
}

export default AppContext