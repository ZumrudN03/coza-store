import React from 'react'
import Navbar from '../../Layout/Navbar'
import HomeShopNowCards from '../../Components/HomeShopNowCards'
import ProductOverviewCards from '../../Components/ProductOverviewCards'
import Footer from '../../Layout/Footer'
import BasketSlider from '../../Components/BasketSlider'
import WishlistSlider from '../../Components/WishlistSlider'

function HomePage() {
  return (
    <div>
      <Navbar></Navbar>
      <HomeShopNowCards/>
      <BasketSlider />
      <WishlistSlider/>
      <ProductOverviewCards/>
      <Footer></Footer>
    </div>
  )
}

export default HomePage