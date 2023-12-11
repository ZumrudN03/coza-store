import React from 'react'
import Navbar from '../../Layout/Navbar'
import HomeShopNowCards from '../../Components/HomeShopNowCards'
import ProductOverviewCards from '../../Components/ProductOverviewCards'
import Footer from '../../Layout/Footer'

function HomePage() {
  return (
    <div>
        <Navbar></Navbar>
        <HomeShopNowCards></HomeShopNowCards>
        <ProductOverviewCards></ProductOverviewCards>
        <Footer></Footer>
    </div>
  )
}

export default HomePage