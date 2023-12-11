import React from 'react'
import HomeShopNowCard from '../HomeShopNowCard'
import './index.scss'

function HomeShopNowCards() {
  return (
    <div className='homeshopnowcards'>
        <HomeShopNowCard category="Women" trend="Spring 2018"url={"https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp"} ></HomeShopNowCard>
        <HomeShopNowCard category="Men" trend="Spring 2018" url={"https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp"}></HomeShopNowCard>
        <HomeShopNowCard category="Accessories" trend="New Trend" url={"https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp"}></HomeShopNowCard>

    </div>
  )
}

export default HomeShopNowCards