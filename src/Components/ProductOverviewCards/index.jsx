import React, { useContext } from 'react'
import ProductOverviewCard from '../ProductOverviewCard'
import './index.scss'
import { FilterProductContext } from '../../Context/filterProduct'
import { FilterSearchContext } from '../../Context/filterSeach'


function ProductOverviewCards() {

  const { filterProduct } = useContext(FilterProductContext)
  const { searchOpen, isSearchOpen, filterOpen, isFilterOpen } = useContext(FilterSearchContext)
  


  return (
    <div className='productOverviewCards'>
      <div className='productOverview_header'>
        <h1>PRODUCT OVERVIEW</h1>
        <div className='productOverview_header_allProducts'>
          <ul className='productOverview_header_allProducts_filter'>
            <li onClick={() => filterProduct("All")}>All Products</li>
            <li onClick={() => filterProduct("Womens")}>Women</li>
            <li onClick={() => filterProduct("Mens")}>Men</li>
            <li onClick={() => filterProduct("Kids")}>Kids</li>
            <li>Bag</li>
            <li>Watches </li>
          </ul>
          <div className='productOverview_header_allProducts_search'>
            <button onClick={() => isFilterOpen()}><i className="fa-solid fa-filter"></i> Filter</button>
            <button onClick={() => isSearchOpen()}><i className="fa-solid fa-magnifying-glass"></i>Search</button>
          </div>
        </div>
        <div className={searchOpen ? "searchOpen" : "hiddenSearchCover"}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder='Search' />
        </div>
        <div className={filterOpen ? "filterOpen" : "hiddenFilterCover"}>
          <div className="sortBy">
            <h4>Sort By</h4>
            <p>Default</p>
            <p>Popularity</p>
            <p>Average rating</p>
            <p>Newness</p>
            <p>Price: Low to High</p>
            <p>Price: High to Low</p>

          </div>
          <div className="price">
            <h4>Price</h4>
            <p>All</p>
            <p>$0.00 - $50.00</p>
            <p>$50.00 - $100.00</p>
            <p>$100.00 - $150.00</p>
            <p>$150.00 - $200.00</p>
            <p>$200.00+</p>
          </div>
          <div className="color">
            <h4>Color</h4>
            <p><i class="fa-solid fa-circle" style={{ color: "black" }}></i>Black</p>
            <p><i class="fa-solid fa-circle" style={{ color: "blue" }}></i>Blue</p>
            <p><i class="fa-solid fa-circle" style={{ color: "grey" }}></i>Grey</p>
            <p><i class="fa-solid fa-circle" style={{ color: "green" }}></i>Green</p>
            <p><i class="fa-solid fa-circle" style={{ color: "red" }}></i>Red</p>
            <p><i class="fa-solid fa-circle" style={{ color: "white" }}></i>White</p>
          </div>
          <div className="tags">
            <h4>Tags</h4>
            <button>Fashion</button>
            <button>Lifestyle</button>
            <button>Denim</button>
            <button>Streetstyle</button>
            <button>Crafts</button>

          </div>
        </div>
      </div>
      <ProductOverviewCard></ProductOverviewCard>
      <div className='productOverview_btn'><button className='loadMore'>LOAD MORE</button></div>
    </div>
  )
}

export default ProductOverviewCards