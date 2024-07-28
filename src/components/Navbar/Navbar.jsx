import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div name="navbar" className="navbar">
      <div>
        <p>Brand Name</p>
      </div>
      <div>
        <select name="search by">
          <option value="Author">Author</option>
          <option value="Book Name">Book Name</option>
          <option value="Book Id">Book Id</option>
        </select>
        <input
          className="searchBar"
          type="search"
          placeholder="Enter your text"
        />
        <button>Search</button>
      </div>

      <div name="leftpane">
        <Link className={'mr-3 color'} to={"/AddBook"}>Add Book</Link>
        <Link className={'mr-3 color'} to={"/MyLibrary"}>My Library</Link>
        <Link className={'mr-3 color'} to={"/Cart"}>carticon</Link>
        <Link className={'mr-3 color'} to={"/Signup"}>Signup</Link>
        <Link className={'mr-3 color'} to={"/SignIn"}>SignIn</Link>
      </div>
    </div>
  );
};

export default Navbar;
