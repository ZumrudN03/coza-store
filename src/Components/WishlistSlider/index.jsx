import React, { useContext } from 'react'
import { WishlistSliderContext } from '../../Context/wishlistSlider'
import './index.scss'
import WishlistCard from '../WishlistCard'
import { WishlistContext } from '../../Context/wishlist'

function WishlistSlider() {
    const { isOpen, wishlistHandleClick } = useContext(WishlistSliderContext)
  const { totalPrice } = useContext(WishlistContext)

    return (
        <>
            <div className={isOpen ? `opacityDiv` : ''}></div>
            <div id='wishlistSlider' className={isOpen ? `translate` : ''}>
                <div className='wishlistSlider'>
                    <div className='wishlistSlider_header'>
                        <p>YOUR CART</p>
                        <i className="fa-solid fa-xmark" onClick={wishlistHandleClick}></i>
                    </div>
                    <div className='wishlistSlider_products'>
                        <WishlistCard/>
                    </div>
                    <div className='wishlistSlider_footer'>
                        <p>Total: {totalPrice()}</p>
                        <div className='wishlistSlider_footer_btn'>
                            <button>VIEW CARD</button>
                            <button>CHECK OUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishlistSlider