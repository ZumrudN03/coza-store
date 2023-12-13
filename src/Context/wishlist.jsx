import React, { createContext } from 'react'
import useLocalStorage from '../Hook/useLocalStorage'

export const WishlistContext = createContext()

function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useLocalStorage("wishlist", [])
    function addWishlist(item) {
        const index= wishlist.findIndex((x)=> x.id === item.id)
        if (index === -1) {
            setWishlist([...wishlist, {...item}])
            return
        }else{
            removeWishlist(item)
        }
    }

    function removeWishlist(item) {
        setWishlist(wishlist.filter((x)=> x.id !== item.id))
    }

    function totalPrice() {
        return wishlist.reduce((acc, wishlist) => acc + wishlist.price, 0).toFixed(2)
    }

  return (
    <WishlistContext.Provider value={{wishlist, addWishlist, removeWishlist, totalPrice}}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider