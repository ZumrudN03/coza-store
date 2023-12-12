import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/wishlist'

function WishlistCard() {
    const {wishlist, removeWishlist} = useContext(WishlistContext)
  return (
    <div className='wishlistCard'>
        {wishlist.length ? (wishlist.map((x)=>(
            <ul key={x.id}>
                <li><img src={x.thumbnail} /></li>
                <li>{x.name}</li>
                <li>${x.price}</li>
                <button onClick={()=>removeWishlist(x)}>X</button>
            </ul>
        ))) : (<p>Wishlist is empty...</p>)}

    </div>
  )
}

export default WishlistCard