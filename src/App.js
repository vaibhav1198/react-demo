import React, { Component } from 'react';
import './App.css';
import CustomerBookings from './components/getbookingdetails.js'
import {BrowserRouter, Switch, Route, Redirect,Link} from 'react-router-dom'
import Update from './components/update.js'
import Book from './components/book'
import Navi from './components/navigation.js'
import Main from './components/home.js'
import AllBookings from './components/getallbookings'
import FlightBookings from './components/getflightbookings'
import Card from './components/card.js'
import Redu from './components/redux.js'
import Form from './components/form.js'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navi/>
        <Switch>
        <Route exact path="/" render={() => (<Redirect to="/home"/>)}/>
        <Route exact path="/home" component={Main}/>
        <Route path="/customerBookings" component={CustomerBookings}/>
        <Route path="/updateBooking" component={Update}/>
        <Route path="/card" component={Card} />    
        <Route path="/bookFlight" component={Book}/>
        <Route path="/getAllBookings" component={AllBookings}/>
        <Route path="/bookingsByFlight" component={FlightBookings}/>
        <Route path="/redu" component={Redu}/>
        <Route path="/form" component={Form}/>

        <Route path="/contact" render={() => <h3>Contact Us</h3>}/>
    </Switch>
    </BrowserRouter>

        </div>
    );
  }
}

export default App;
