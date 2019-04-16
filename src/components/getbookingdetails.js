import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {BrowserRouter, Switch, Route, Redirect,Link} from 'react-router-dom'
import {createStore} from 'redux' 
import Navi from './navigation'


class CustomerBookings extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cid : '',
            fid : '',
            bid : 0,
            nos : 0,
            cost : 0,
            result : "",
            formErrors: {
                cid : '',
                fid : '',
            },
            fieldValidity: {
                cid : false,
                fid : false
            },
            formValid: false,
            successMessage: ''
        }
    }
    getDetails = (event) => {
        event.preventDefault()
            axios.get('http://localhost:1050/customerBookings/'+this.state.cid+'/'+this.state.fid).then((response) => {
                console.log(response.data[0]);
                this.setState({
                    result : response.data
                    // bid : response.data[0].bookingId,
                    // nos : response.data[0].noOfTickets,
                    // cost : response.data[0].bookingCost
                })
                console.log(this.state.result);
            })
            .catch(function (error) {
                console.log(error);
            });


        }
    validateCid = (e) => {
        const cid = e.target.value;
        var formErrors = this.state.formErrors;
        var fieldValidity = this.state.fieldValidity;
        this.setState({ cid : e.target.value });
        console.log(cid);
        const reg = "^[PSG][0-9]{4}$"
    if (!cid.match(reg)) {
            formErrors.cid = "Enter Correct Id in proper Format";
            fieldValidity.cid = false;
        }
        else {
            formErrors.cid = "";
            fieldValidity.cid = true;
        }
        this.setState({ fieldValidity: fieldValidity })
        this.setState({ formValid: fieldValidity.cid && fieldValidity.fid })
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
        this.setState({ formValid: fieldValidity.cid && fieldValidity.fid })
    }


    render(){
        return(
            <div>
                <br/>
                <div class="container">
                <div class="jumbotron">
  <form>
    <div class="form-group">
      <label for="cid">Customer Id:</label>
      <input type="text" class="form-control" id="cid" placeholder="Enter your customer Id" name="cid" onChange ={this.validateCid}/>
      <div class="text text-danger">{this.state.formErrors.cid}</div>
    </div>
    <div class="form-group">
      <label for="fid">Flight Id:</label>
      <input type="text" class="form-control" id="fid" placeholder="Enter complete flight Id " name="fid" onChange ={this.validateFid}/>
      <div class="text text-danger">{this.state.formErrors.fid}</div>
    </div>
    <button type="button" class="btn btn-primary" disabled={!this.state.formValid} onClick={this.getDetails}>Fetch Details</button>


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

export default CustomerBookings;