import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {BrowserRouter, Switch, Route, Redirect,Link} from 'react-router-dom'
import {createStore} from 'redux' 
import Navi from './navigation'
import '../index.css'

class CardForm extends React.Component {
    constructor() {
        super();
        this.state = {
            achievements: null,
            edit: null
        }
    }
    render() {
        return (
            <div className="col-md-3">
             <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">Booking Id :{this.props.data.bookingId}</h5>
                    <p className="card-text text-center">
                        <span>Customer Id: {this.props.data.customerId}</span><br />
                        <span>Booking Cost: {this.props.data.bookingCost}</span><br />
                        <span>No Of Tickets: {this.props.data.noOfTickets}</span><br />
                    </p>
                </div>
                </div>
                </div>
        )
    }
}
export default CardForm;