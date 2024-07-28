import React from 'react'
import Navbar from '../Navbar/Navbar'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <p>Dashboard</p>
            <div>
                <div class="card" style={{width: '12rem', border:'1px solid black'}}>
                    <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body align">
                            <h5 class="card-title">Book Name</h5>
                            <p class="card-text">Price</p>
                            <a href="#" class="btn btn-primary">checkout</a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard