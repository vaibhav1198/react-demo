import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {BrowserRouter, Switch, Route, Redirect,Link} from 'react-router-dom'
import {createStore} from 'redux' 
import Navi from './navigation'


export default class Form extends React.Component{
    constructor(){
        super()
        this.state ={  
        cid: '',
        fid: '',
        nos : '',
        gender : '',
        hobby:[],
        result: undefined,
        formErrors: {
            name: '',
            city: '',
            type: '',
            wallet : '',
            gender : '',
            hobby:''
        },
        fieldValidity: {
            name: false,
            city: false,
            wallet : false,
            gender : false,
            hobby:false
        },
        formValid: false,
        successMessage: ''
    }
    }

    // validateCid = (e) => {
    //     const cid = e.target.value;
    //     var formErrors = this.state.formErrors;
    //     var fieldValidity = this.state.fieldValidity;
    //     this.setState({ cid : e.target.value });
    //     console.log(cid);
    //     const reg = "^[PSG][0-9]{4}$"
    // if (!cid.match(reg)) {
    //         formErrors.cid = "Enter Correct Id in proper Format";
    //         fieldValidity.cid = false;
    //     }
    //     else {
    //         formErrors.cid = "";
    //         fieldValidity.cid = true;
    //     }
    //     this.setState({ fieldValidity: fieldValidity })
    //     this.setState({ formValid: fieldValidity.cid && fieldValidity.fid && fieldValidity.nos})
    // }
    // validateFid = (e) => {
    //     const fid = e.target.value;
    //     var formErrors = this.state.formErrors;
    //     var fieldValidity = this.state.fieldValidity;
    //     this.setState({ fid : e.target.value });
    //     console.log(fid);
    //     if (fid.length !== 7) {
    //         formErrors.fid = "Enter Correct Flight Id in 'IND-101' Format";
    //         fieldValidity.fid = false;
    //     }
    //     else {
    //         formErrors.fid = "";
    //         fieldValidity.fid = true;
    //     }
    //     this.setState({ fieldValidity: fieldValidity })
    //     this.setState({ formValid: fieldValidity.cid && fieldValidity.fid && fieldValidity.nos})
    // }

    // bookFlight = (event) => {
    //     event.preventDefault()
    //     var data = {
    //         cid: this.state.cid,
    //         fid: this.state.fid,
    //         nos : this.state.nos
    //     }
    //         axios.post('http://localhost:1050/bookFlight/',data).then((response) => {
    //             console.log(response.data[0]);
    //             this.setState({
    //                 result : response.data
    //             })
    //             console.log(this.state.result);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //     }

    validateName = (e) => {
        const name = e.target.value;
        var formErrors = this.state.formErrors;
        var fieldValidity = this.state.fieldValidity;
        this.setState({ name: e.target.value });
        console.log(name);
        if (name.length < 6) {
            formErrors.name = "Name must be at least 6 chars";
            fieldValidity.name = false;
        }
        else {
            formErrors.name = "";
            fieldValidity.name = true;
        }
        this.setState({ fieldValidity: fieldValidity })
        this.setState({ formValid: fieldValidity.name && fieldValidity.gender && fieldValidity.hobby })
    }

    // validatenos = (e) => {
    //     let nos = parseInt(e.target.value);
    //     var formErrors = this.state.formErrors;
    //     var fieldValidity = this.state.fieldValidity;
    //     this.setState({ nos: e.target.value });
    //     console.log(nos);
    //     if (nos < 1 && nos > 5) {
    //         formErrors.nos = "Select a value";
    //         fieldValidity.nos = false;
    //     }
    //     else {
    //         formErrors.nos = "";
    //         fieldValidity.nos = true;
    //     }
    //     this.setState({ fieldValidity: fieldValidity })
    //     this.setState({ formValid: fieldValidity.cid && fieldValidity.fid && fieldValidity.nos})
    // }

    validategender = (e) => {
        const gender = e.target.value;
        console.log(gender)
        this.setState({ gender: e.target.value });
        var formErrors = this.state.formErrors;
        var fieldValidity = this.state.fieldValidity;
        if (gender === "") {
            formErrors.gender = "Select gender"
            fieldValidity.gender = false;
        }
        else {
            formErrors.gender = "";
            fieldValidity.gender = true;
        }
        this.setState({ formErrors: formErrors });
        this.setState({ formValid: fieldValidity.name && fieldValidity.gender && fieldValidity.hobby })
    }


    validatehobby = (e) => {
        var h = this.state.hobby
        const hobby = e.target.value;
        var ind = null
        if(h.length > 0){
        for(let i =0;i<h.length;i++){
            if(hobby === h[i]){
                ind = i+1
            }
        }}
         if(ind > 0){
             h.splice(ind-1,1)
         }
         else{
            h.push(hobby)
         }
         this.setState({ hobby: h });
        var formErrors = this.state.formErrors;
        var fieldValidity = this.state.fieldValidity;
        if (hobby.length === 0) {
            formErrors.hobby = "Select hobby"
            fieldValidity.hobby = false;
        }
        else {
            formErrors.hobby = "";
            fieldValidity.hobby = true;
        }
        ind = 0
        this.setState({ formErrors: formErrors });
        this.setState({ formValid: fieldValidity.name && fieldValidity.gender && fieldValidity.hobby })
    }

    // validateCity = (e) => {
    //     const city = e.target.value;
    //     this.setState({ age: city });
    //     var formErrors = this.state.formErrors;
    //     var fieldValidity = this.state.fieldValidity;
    //     if (city !== "Custom Select Menu") {
    //         formErrors.city = "Select City"
    //         fieldValidity.city = false;
    //     }
    //     else {
    //         formErrors.city = "";
    //         fieldValidity.city = true;
    //     }
    //     this.setState({ formErrors: formErrors });
    //     this.setState({ formValid: fieldValidity.empName && fieldValidity.age })
    // }
    // update = (e) => {
    //     e.preventDefault();
    //     if (this.state.formValid) {
    //         var formJSON = {
    //             id: this.props.match.params.empId,
    //             name: this.state.empName,
    //             age: this.state.age,
    //             salary: this.state.salary,
    //             achievements: this.state.achievements
    //         }
    //         console.log(JSON.stringify(formJSON));
    //         this.setState({ successMessage: JSON.stringify(formJSON) });
    //     }
    // }

    render(){
        return(
            <div>
                <div class="container">
  <form >
{/*  <div class="form-group">
       <label for="cid">Customer Id:</label>
      <input type="text" class="form-control" id="cid" placeholder="Enter your customer Id" name="cid" onChange ={this.validateCid}/>
      <div class="text text-danger">{this.state.formErrors.cid}</div>
    </div> */}
    {/* <div class="form-group">
      <label for="ctype">Customer Type:</label>
      <input type="text" class="form-control" id="ctype" placeholder="Enter Customer Type" name="ctype" onChange ={this.validateType}/>
      <div class="text text-danger">{this.state.formErrors.name}</div>
    </div>
    <div class="form-group">
      <label for="wallet">Wallet:</label>
      <input type="text" class="form-control" id="wallet" placeholder="Enter wallet amout" name="wallet" onChange ={this.validateWallet}/>
      <div class="text text-danger">{this.state.formErrors.name}</div>
    </div>/*/}
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" id="name" placeholder="Enter name" name="name" onChange ={this.validateName}/>
      <div class="text text-danger">{this.state.formErrors.name}</div>
    </div>

        <div class="form-group">
      <label for="gender">Gender :</label>
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" class="custom-control-input" id="male" name="gender" value="male" onChange={this.validategender}/>
      <label class="custom-control-label" for="male">Male</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" class="custom-control-input" id="female" name="gender" value="female" onChange={this.validategender}/>
      <label class="custom-control-label" for="female">Female</label>
    </div>
    </div>

        <div class="custom-control custom-checkbox mb-3">
      <input type="checkbox" class="custom-control-input" id="swim" name="example1" value="swim" onChange={this.validatehobby}/>
      <label class="custom-control-label" for="swim">swim</label>
    </div>
    <div class="custom-control custom-checkbox mb-3">
      <input type="checkbox" class="custom-control-input" id="box" name="example2" value="box" onChange={this.validatehobby}/>
      <label class="custom-control-label" for="box">box</label>
    </div>
    <div class="custom-control custom-checkbox mb-3">
      <input type="checkbox" class="custom-control-input" id="custbox" name="example3" value="custbox" onChange={this.validatehobby}/>
      <label class="custom-control-label" for="custbox">custbox</label>
    </div>
    <div class="custom-control custom-checkbox mb-3">
      <input type="checkbox" class="custom-control-input" id="run" name="example4" value="run" onChange={this.validatehobby}/>
      <label class="custom-control-label" for="run">run</label>
    </div>



    {/* <div class="form-group">
      <label for="uname">City</label>   
    <select name="cars" class="custom-select">
    <option selected>Custom Select Menu</option>
    <option value="Chandigarh">Chandigarh</option>
    <option value="Mphali">Mphali</option>
    <option value="Panchkula">Panchkula</option>
  </select>
  </div> */} 

    {/* <div class="form-group">
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
    </div> */}

    <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck" name="example1" required/>
    <label class="custom-control-label" for="customCheck">Agree</label>
  </div>
  <button type="button" class="btn btn-primary" disabled={!this.state.formValid}>Book Flight</button>
  </form>
</div>

            </div>
        )
    }
}
