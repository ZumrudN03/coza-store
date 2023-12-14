import React, { useContext } from 'react'
import ProductOverviewCard from '../ProductOverviewCard'
import './index.scss'
import { FilterProductContext } from '../../Context/filterProduct'


function ProductOverviewCards() {

  const {filterProduct} = useContext(FilterProductContext)

  return (
    <div className='productOverviewCards'>
      <div className='productOverview_header'>
        <h1>PRODUCT OVERVIEW</h1>
        <div className='productOverview_header_allPrducts'>
          <ul className='productOverview_header_allPrducts_filter'>
            <li onClick={()=>filterProduct("All")}>All Products</li>
            <li onClick={()=>filterProduct("Womens")}>Women</li>
            <li onClick={()=>filterProduct("Mens")}>Men</li>
            <li onClick={()=>filterProduct("Kids")}>Kids</li>
            <li>Bag</li>
            <li>Watches </li>
          </ul>
          <div className='productOverview_header_allPrducts_search'>
            <button><i className="fa-solid fa-filter"></i> Filter</button>
            <button><i className="fa-solid fa-magnifying-glass"></i>Search</button>
          </div>
        </div>
      </div>
      <ProductOverviewCard></ProductOverviewCard>
      <div className='productOverview_btn'><button className='loadMore'>LOAD MORE</button></div>
    </div>
  )
}

export default ProductOverviewCards