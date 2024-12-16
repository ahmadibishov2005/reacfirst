import React from 'react'

function Header() {
  return (
    <div className='header'>
         <div className='navbar'>
        <div className='navbar-left'>
            <h1>Start Bootstrap</h1>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><select name="dropdown" id="">
            <option value="">Shop</option>
            <option value="">All Prdoucts</option>
            <option value="">Popular Items</option>
            <option value="">New Arrivals</option>
            </select></li>
        </div>
        <div className='navbar-right'>
           <button> <i className="fa-solid fa-cart-shopping"></i> <span>Card</span> <p>0</p></button>
        </div>
    </div>
    <div className='shop'>
        <h1>Shop In Style</h1>
        <h4>With this shop hompeage template</h4>
    </div>
    </div>
    

  )
}

export default Header
