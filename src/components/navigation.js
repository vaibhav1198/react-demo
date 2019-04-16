import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {BrowserRouter, Switch, Route, Redirect,Link} from 'react-router-dom'
import {createStore} from 'redux' 

class Navi extends React.Component{
    constructor(){
        super()
        this.state ={}
    }
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <Link class="navbar-brand" to="/home">Flight Service</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link" to="/bookFlight">Book <br/> Flight</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/updateBooking">Update <br/> Bookings</Link>
      </li>    
      <li class="nav-item">
        <Link class="nav-link" to="/customerBookings">View Bookings <br/> By Customer</Link>
      </li>    
      <li class="nav-item">
        <Link class="nav-link" to="/bookingsByFlight">View Bookings <br/> by Flight</Link>
      </li>    
      <li class="nav-item">
        <Link class="nav-link" to="/getAllBookings">View All <br/> Bookings</Link>
      </li>    
    </ul>
  </div>  
</nav>
            </div>
        )
    }
}

export default Navi;