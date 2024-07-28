import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div name='navbar' className='navbar'>
        <div>
            <p>Brand Name</p>
        </div>
        <div>
            <select name='search by'>
                <option value='Author'>Author</option>
                <option value="Book Name">Book Name</option>
                <option value='Book Id'>Book Id</option>
            </select>
            <input className='searchBar' type='search' placeholder='Enter your text'/>
            <button>Search</button>
        </div>
        <div name='leftpane'>carticon, profile icon, my library</div>
    </div>
  )
}

export default Navbar