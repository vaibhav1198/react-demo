import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {BrowserRouter, Switch, Route, Redirect,Link} from 'react-router-dom'
import {createStore} from 'redux' 
import Card from './card'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {ProgressSpinner} from 'primereact/progressspinner';


class AllBookings extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            result : undefined,
            temp : false,
            t : false,
            tt : false
        }
    }
    getDetails = (event) => {
        event.preventDefault()
        this.setState({tt : true})
            axios.get('http://localhost:1050/getAllBookings').then((response) => {
                //console.log(response.data[0].bookings);
                this.setState({
                    result : response.data,
                    t : true,
                    tt:false,
                    temp : true
                })
                console.log(this.state.result);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        // callCard = () => {
        //     this.setState({temp : true})
        // }
    render(){
        var red = null 
        var l = null
        if(this.state.tt){
            l = <ProgressSpinner style={{width: '25px', height: '25px'}} strokeWidth="7" fill="#EEEEEE" animationDuration=".5s"/>
        }

        if(this.state.temp){
            red = <Card data = {this.state.result}/>
        }
        return(
            <div>
                <br/>
                <div class="container">
                <div class="jumbotron">
                <br/>
                <button type="button" class="btn btn-primary" onClick={this.getDetails} disabled = {this.state.t}>Show all bookings</button>
                &nbsp;&nbsp;&nbsp;&nbsp;{l}
                <br/><br/>
    {/* <button type="button" class="btn btn-primary" onClick={this.callCard} disabled = {!this.state.t}>Show All Details</button> */}


    </div>
    <div class="container">
    {red}

    </div>
    
    </div>
    </div>
        )
    }
}

export default AllBookings;