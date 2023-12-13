import React, { createContext, useState } from 'react'


export const BasketSliderContext = createContext("")

function BasketSliderProvider({children}) {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        setIsOpen(!isOpen)
    }
  return (
    <BasketSliderContext.Provider value={{isOpen, handleClick}}>
        {children}
    </BasketSliderContext.Provider>
  )
}

export default BasketSliderProvider