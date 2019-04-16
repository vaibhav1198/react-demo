import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {BrowserRouter, Switch, Route, Redirect,Link} from 'react-router-dom'
import {createStore} from 'redux' 
import Navi from './navigation'
import CardForm from './cardform'
import image from '../public/lo.png'


class Book extends React.Component{
    constructor(){
        super()
        this.state ={  
        cid: '',
        fid: '',
        nos : '',
        result: undefined,
        formErrors: {
            cid: '',
            fid: '',
            nos: '',
        },
        fieldValidity: {
            cid: false,
            fid: false,
            nos : false
        },
        formValid: false,
        successMessage: ''
    }
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
        this.setState({ formValid: fieldValidity.cid && fieldValidity.fid && fieldValidity.nos})
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
        this.setState({ formValid: fieldValidity.cid && fieldValidity.fid && fieldValidity.nos})
    }

    bookFlight = (event) => {
        event.preventDefault()
        var data = {
            cid: this.state.cid,
            fid: this.state.fid,
            nos : this.state.nos
        }
            axios.post('http://localhost:1050/bookFlight/',data).then((response) => {
                console.log(response.data[0]);
                this.setState({
                    result : response.data
                })
                console.log(this.state.result);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        validatenos = (e) => {
            let nos = parseInt(e.target.value);
            var formErrors = this.state.formErrors;
            var fieldValidity = this.state.fieldValidity;
            this.setState({ nos: e.target.value });
            console.log(nos);
            if (nos < 1 && nos > 5) {
                formErrors.nos = "Select a value";
                fieldValidity.nos = false;
            }
            else {
                formErrors.nos = "";
                fieldValidity.nos = true;
            }
            this.setState({ fieldValidity: fieldValidity })
            this.setState({ formValid: fieldValidity.cid && fieldValidity.fid && fieldValidity.nos})
        }
    
    render(){
        return(
            <div>
                <div className="container">
                <br/>
                <div className = "jumbotron">
                <form >
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

    <div class="form-group">
      <label for="nos">No Of Tickets:</label>
      <select name="nos" id="nos" class="custom-select" onChange ={this.validatenos}>
    <option value="1" selected={true}>1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
      <div class="text text-danger">{this.state.formErrors.nos}</div>
    </div>

  <button type="button" class="btn btn-primary" disabled={!this.state.formValid} onClick={this.bookFlight}>Book Flight</button>
  </form>
  {JSON.stringify(this.state.result)}
                </div>
                </div>
            </div>
        )
    }
}

export default Book;

