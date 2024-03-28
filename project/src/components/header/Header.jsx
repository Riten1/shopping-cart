import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to='/'>
          Home
          </Link>
          <Link to='/cart'>
          Cart
          </Link>
        
        </nav>
      </header>
    </div>
  )
}

export default Header