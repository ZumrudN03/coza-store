import React from 'react'
import './index.scss'

function Navbar() {
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
                                <li>Home</li>
                                <li>Shop</li>
                                <li>Features<sup>HOT</sup></li>
                                <li>Blog</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className="navmenu_icons">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <i class="fa-solid fa-cart-shopping"><sup>2</sup></i>
                        <i class="fa-regular fa-heart"><sup>0</sup></i>
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