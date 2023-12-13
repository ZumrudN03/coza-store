import React, { useContext } from 'react'
import './index.scss'
import { WishlistContext } from '../../Context/wishlist'
import { NavLink } from 'react-router-dom'
import { BasketContext } from '../../Context/basket'
import { BasketSliderContext } from '../../Context/basketSlider'
import { WishlistSliderContext } from '../../Context/wishlistSlider'

function Navbar() {
    const { wishlist } = useContext(WishlistContext)
    const { basket } = useContext(BasketContext)
    const { handleClick } = useContext(BasketSliderContext)
    const { wishlistHandleClick } = useContext(WishlistSliderContext)


    return (
        <div className='navbarContainer'>
            <div className="navbarBg">
                <div className="navbar">
                    <div className='navbar_left'>
                        <p>Free shipping for standard order over $100</p>
                    </div>
                    <div className='navbar_right'>
                        <button>Help & FAQs</button>
                        <button>My Account</button>
                        <button>EN</button>
                        <button className='usd'>USD</button>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className='navmenu'>
                    <div className="navmenu_left">
                        <div className="navmenu_logo">
                            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp" alt="LOGO" />
                        </div>
                        <div className='navmenu_menu'>
                            <ul>
                                <li>
                                    <NavLink
                                        to="/"
                                        style={({ isActive }) => {
                                            return {
                                                color: isActive ? "#717FE0" : "black",
                                            };
                                        }}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/shop"
                                        style={({ isActive }) => {
                                            return {
                                                color: isActive ? "#717FE0" : "black",
                                            };
                                        }}
                                    >
                                        Shop
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/features"
                                        style={({ isActive }) => {
                                            return {
                                                color: isActive ? "#717FE0" : "black",
                                            };
                                        }}
                                    >
                                        Features<sup>HOT</sup>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/blog"
                                        style={({ isActive }) => {
                                            return {
                                                color: isActive ? "#717FE0" : "black",
                                            };
                                        }}
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        style={({ isActive }) => {
                                            return {
                                                color: isActive ? "#717FE0" : "black",
                                            };
                                        }}
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        style={({ isActive }) => {
                                            return {
                                                color: isActive ? "#717FE0" : "black",
                                            };
                                        }}
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navmenu_icons">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-solid fa-cart-shopping" onClick={handleClick}><sup>{basket.length ? basket.length : "0"}</sup></i>
                        <i className="fa-regular fa-heart" onClick={wishlistHandleClick}><sup>{wishlist.length ? wishlist.length : "0"}</sup></i>
                    </div>
                </div>
                <div className="header_newCollection">
                    <div className='header_textBox'>
                        <h2>Women Collection 2018</h2>
                        <h1>NEW SEASON</h1>
                        <button className='shopNow'>SHOP NOW</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar