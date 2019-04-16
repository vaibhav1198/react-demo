import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {BrowserRouter, Switch, Route, Redirect,Link} from 'react-router-dom'
import {createStore} from 'redux' 
import Navi from './navigation'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {ProgressSpinner} from 'primereact/progressspinner';


class FlightBookings extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            result : "",
            tt : false,
            formErrors: {
                fid : '',
            },
            fieldValidity: {
                fid : false
            },
            formValid: false,
            successMessage: ''
        }
    }
    getDetails = (event) => {
        event.preventDefault()
        this.setState({tt : true})
            axios.get('http://localhost:1050/bookingsByFlight/'+this.state.fid).then((response) => {
                console.log(response.data[0]);
                this.setState({
                    result : response.data,
                    tt:false
                })
                console.log(this.state.result);
            })
            .catch(error => {
                console.log(error);
            });


        }
    validateFid = (e) => {
        const fid = e.target.value;
        var formErrors = this.state.formErrors;
        var fieldValidity = this.state.fieldValidity;
        this.setState({ fid : e.target.value });
        console.log(fid);
        if (fid.length !== 7) {
            formErrors.fid = "Enter Correct Flight Id in 'IND-101' Format";
            fieldValidity.fid = false;
        }
        else {
            formErrors.fid = "";
            fieldValidity.fid = true;
        }
        this.setState({ fieldValidity: fieldValidity })
        this.setState({ formValid: fieldValidity.fid })
    }

    render(){
        var l = null
        if(this.state.tt){
            l = <ProgressSpinner style={{width: '25px', height: '25px'}} strokeWidth="7" fill="#EEEEEE" animationDuration=".5s"/>
        }
        return(
            <div>
                <br/>
                <div class="container">
                <div class="jumbotron">
  <form>
    <div class="form-group">
      <label for="fid">Flight Id:</label>
      <input type="text" class="form-control" id="fid" placeholder="Enter complete flight Id " name="fid" onChange ={this.validateFid}/>
      <div class="text text-danger">{this.state.formErrors.fid}</div>
    </div>

    <div className="row">
    <div className="col-sm-2">
    <button type="button" class="btn btn-primary" disabled={!this.state.formValid} onClick={this.getDetails}>Fetch Details</button>
    </div>

    <div className="col-sm-10">
    {l}
    </div>
    </div>
    </form>
    </div>
    <div class = "text text-primary">     
    {JSON.stringify(this.state.result)}
    </div>
    </div>
            </div>
        )
    }
}

export default FlightBookings;