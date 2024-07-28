import React from 'react'
import Navbar from '../Navbar/Navbar'
import { booksData } from '../Data/Books'
import './Dashboard.css';

const Dashboard = () => {
    const data = booksData
    return ( 
        <div>
            <Navbar />
            <p>Dashboard</p>
            <div class="container-fluid">
                <div class="row">
            {data.map((item)=>{
            return (
                
             <div class="col-sm-2 d-flex justify-content-center">
                <div class="card" style={{width: '12rem', border:'1px solid black'}}>
                    <img className="img" src={item.image} alt="image not found" width="180px"></img>
                    <div class="card-body align">
                            <h5 class="card-title">{item.Author}</h5>
                            <p class="card-text">{item.price}</p>
                            <a href="#" class="btn btn-primary">checkout</a>
                        </div>
                        </div>
                       
                </div>
            )
        })}
            {/* <div>
                <div class="card" style={{width: '12rem', border:'1px solid black'}}>
                <div class="card-body align">
                            <h5 class="card-title">Book Name</h5>
                            <p class="card-text">Price</p>
                            <a href="#" class="btn btn-primary">checkout</a>
                        </div>
                   
                </div>
            </div> */}
        </div>
        </div>
        </div>
    )
}

{/* <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body align">
                            <h5 class="card-title">Book Name</h5>
                            <p class="card-text">Price</p>
                            <a href="#" class="btn btn-primary">checkout</a>
                        </div> */}
export default Dashboard