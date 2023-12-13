import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/wishlist'
import './index.scss'

function WishlistCard() {
  const { wishlist, removeWishlist } = useContext(WishlistContext)
  return (
    <>
      {wishlist.length ? (wishlist.map((x) => (
        <div className='wishlistCard' key={x.id}>
          <div className='wishlistCard_img'>
            <i className="fa-solid fa-xmark" onClick={() => removeWishlist(x)}></i>
            <img src={x.thumbnail} />
            <div className='icon_bkg'></div>
          </div>
          <div className='wishlistCard_textbox'>
            <p className='wishlistCard_textbox_name'>{x.name}</p>
            <div className='wishlistCard_textbox_price_stock'>
              <p>${x.price}</p>
              <p className='stock'>{x.stockStatus}</p>
            </div>
          </div>
        </div>
      ))) : (<p className='empty'>Wishlist is empty...</p>)}
    </>
  )
}

export default WishlistCard