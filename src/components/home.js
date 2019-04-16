import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {BrowserRouter, Switch, Route, Redirect,Link} from 'react-router-dom'
import {createStore} from 'redux' 
import Navi from './navigation'


class Main extends React.Component{
    render(){
        return(
            <div>
                <h1>This is home page</h1>
            </div>
        )
    }
}

export default Main;