import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import { WishlistContext } from '../../Context/wishlist'
import { BasketContext } from '../../Context/basket'
import BasketSlider from '../BasketSlider'

function ProductOverviewCard() {
  const [homeProduct, setHomeProduct] = useState([])
  const { addWishlist } = useContext(WishlistContext)
  const { addBasket } = useContext(BasketContext)

  function getFetch() {
    fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
      .then((res) => res.json())
      .then((data) => setHomeProduct(data))
  }
  useEffect(() => {
    getFetch()
  }, [])

  return (
    <div className='productoverviewcard'>
      {homeProduct.map((x) =>
        <ul className='productOverviewCard' key={x.id}>
          <li className='productOverviewCard_thumbnail'>
            <img src={x.thumbnail} />
            <button className='tumbnail_hover'>Quick View</button>
          </li>
          <div className="productOverviewCard_desc">
            <div className="productOverviewCard_desc_textBox">
              <li className='productOverviewCard_desc_textBox_name'>{x.name}</li>
              <li className='productOverviewCard_desc_textBox_price'>${x.price}</li>
            </div>
            <div className="productOverviewCard_desc_icon" >
              <i className="fa-regular fa-heart" onClick={() => addWishlist(x)}></i>
              <i className="fa-solid fa-cart-shopping" onClick={() => addBasket(x)}></i>
            </div>
          </div>

        </ul>
      )}
    </div>
  )
}

export default ProductOverviewCard