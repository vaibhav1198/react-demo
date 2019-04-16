import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {BrowserRouter, Switch, Route, Redirect,Link} from 'react-router-dom'
import {createStore} from 'redux' 
import Navi from './navigation'
import CardForm from './cardform'
import image from '../public/lo.png'



export default class Card extends React.Component {
    constructor(props) {
        super(props);
        console.log("sbgdhabfhbashdb")
        console.log(this.props.data[0].flightId)
        this.d = this.props.data
    }
    render() {
        return (
            <div className= "container">
                <h3 className="text-primary">Booking Details</h3>
                <div className="row">
                
                {this.d.map(b => <Dummy key={b.flightId} data={b} />)}
                </div>
                </div>
        )
    }
}

class Dummy extends React.Component {
    constructor(props) {
        super(props);
        console.log("ddddddddddddddddddddddddddddd")
       console.log(this.props.data.bookings)
        this.d = this.props.data.bookings
        this.f = this.props.data.flightId
    }
    render() {
        return (
            <div>
                <h2>FId : {this.f}</h2>
                {this.d.map(b => <CardForm key={b.bookingId} data={b} />)}
                </div>
        )
    }
}

