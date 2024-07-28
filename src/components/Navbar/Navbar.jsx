import React from 'react'
import './Navbar.css'
import { Link } from '@mui/material';

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
      {/* <div name='leftpane'>carticon, profile icon, my library</div> */}
      <Link href="Cart" className='Cart'>Cart Icon</Link>
      <Link href="SignIn" className='Profile'>Profile</Link>
      <Link href="SignIn" className='MyLibrary'>My Library</Link>
    </div>
  )
}

export default Navbar