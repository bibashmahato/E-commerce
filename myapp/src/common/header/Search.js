import React from 'react';
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Search({ cartItem }) {
  window.addEventListener("scroll",function(){
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.screenY> 100)
  })
  return (
    <>
        <section className="search">
          <div className="container c_flex">
            <div className="logo width">
              <img src={logo} alt="" />
          </div>

          <div className="search-box f_flex">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder='Search and hit enter...' />
          <span>All Category</span>
          </div>

          <div className="icon f_flex width">
          <i class="fa-solid fa-user icon-circle"></i>
          <div className="cart">
            <Link to='/cart'>
            <i class="fa-solid fa-bag-shopping icon-circle"></i>
            <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
            </Link>
          </div>
          </div>
          </div>
        </section>
    </>
  )
}

export default Search;