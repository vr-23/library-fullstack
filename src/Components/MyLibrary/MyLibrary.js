import React from 'react';
import './MyLibrary.css'
import Navbar from '../Navbar/Navbar';
import bookImage from '../../assets/image.png'

const MyLibrary = () => {
  return (
    <>
    <Navbar />
    <div className='myCard'>
        <img src={bookImage} height={150} alt='image' />
        <div className='cardInformation'>
            <p>name</p>
            <p>price</p>
            <button className='m-2'>View book</button>
            <button className='m-2'>Remove</button>
        </div>
    </div>
    </>
  )
}

export default MyLibrary;