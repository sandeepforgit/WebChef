import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header class="bg-orange-500 flex items-center justify-between w-screen">
      <div class="flex items-center">
        <img class="w-20" src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-master-chef-logo-illustration-png-image_8703909.png" alt="logo"/>
        <h3>WebChef</h3>
      </div>
      <ul class="text-lg font-medium flex gap-5 mr-10">
        <NavLink 
        to={"/"}
        className={({isActive}) => isActive ? "text-white" : "text-black"  }
        >
          Home
        </NavLink>
        <NavLink 
          to={"Categories"}
          className={({isActive}) => isActive ? "text-white" : "text-black" }
          >
            Categories
        </NavLink>
        <NavLink 
          to={"About"}
          className={({isActive}) => isActive ? "text-white" : "text-black" }
          >
            About
        </NavLink>
      </ul>
    </header>
  )
}

export default Header