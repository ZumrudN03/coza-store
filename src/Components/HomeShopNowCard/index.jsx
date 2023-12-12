import React from 'react'
import './index.scss'

function HomeShopNowCard({ category, trend, url }) {
  return (
    <div className='homeshopnowcard' style={{
      backgroundImage: "url(" + url + ")",
      backgroundSize: "cover",
      backgroundRepeat: " no-repeat",
      backgroundPosition: "center "
    }}>
      <div className='homeshopnowcard_textBox'>
        <p className='homeshopnowcard_textBox_category'>{category}</p>
        <p className='homeshopnowcard_textBox_trend'>{trend}</p>
      </div>
    </div>
  )
}

export default HomeShopNowCard