import React, { createContext, useState } from 'react'

export const WishlistSliderContext = createContext("")

function WishlistSliderProvider({children}) {
    const [isOpen, setIsOpen] =useState(false)

    function wishlistHandleClick() {
        setIsOpen(!isOpen)
    }
  return (
    <WishlistSliderContext.Provider value={{isOpen, wishlistHandleClick}}>
        {children}
    </WishlistSliderContext.Provider>
  )
}

export default WishlistSliderProvider