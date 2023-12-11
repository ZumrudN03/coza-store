import React, { useEffect, useState } from 'react'
import './index.scss'

function ProductOverviewCard() {
  const [homeProduct, setHomeProduct] = useState([])

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
        <ul className='productOverviewCard'>
          <li className='productOverviewCard_thumbnail'><img src={x.thumbnail} /></li>
          <div className="productOverviewCard_desc">
            <div className="productOverviewCard_desc_textBox">
              <li className='productOverviewCard_desc_textBox_name'>{x.name}</li>
              <li className='productOverviewCard_desc_textBox_price'>${x.price}</li>
            </div>
            <div className="productOverviewCard_desc_icon">
              <i class="fa-regular fa-heart"></i>
            </div>
          </div>

        </ul>
      )}

    </div>
  )
}

export default ProductOverviewCard