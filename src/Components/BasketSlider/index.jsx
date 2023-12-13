import React, { useContext } from 'react'
import { BasketSliderContext } from '../../Context/basketSlider'
import './index.scss'
import BasketCard from '../BasketCard'
import { BasketContext } from '../../Context/basket'



function BasketSlider() {
  const { isOpen, handleClick } = useContext(BasketSliderContext)
  const { totalPrice } = useContext(BasketContext)
  console.log(totalPrice);
  return (
    <>
      {console.log(isOpen)}
      <div className={isOpen ? `opacityDiv` : ''}></div>
      <div id='basketSlider' className={isOpen ? `translate` : ''}>
        <div className='basketSlider'>
          <div className='basketSlider_header'>
            <p>YOUR CART</p>
            <i className="fa-solid fa-xmark" onClick={handleClick}></i>
          </div>
          <div className='basketSlider_products'>
            <BasketCard/>
          </div>
          <div className='basketSlider_footer'>
            <p>Total: {totalPrice()}</p>
            <div className='basketSlider_footer_btn'>
              <button>VIEW CARD</button>
              <button>CHECK OUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BasketSlider