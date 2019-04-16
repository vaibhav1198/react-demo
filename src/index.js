import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import './bootstrap.css'
import {createStore} from 'redux'


import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {ProgressSpinner} from 'primereact/progressspinner';


// var store = createStore(changeState)
// var initial = {
//     name : "",
//     age : "",
//     wallet : 0,
//     type : ''
// }
// var changeState= () => {

// }


// class Main extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             qty : 0
//         }
//     }
//     render(){
//         store.subscribe(() => {
//             var globalState = store.getState();
//             this.setState({qty : globalState.qty})
//         })
//         return(
//             <div>
//                 <Navi/>
//                 <h1>This is home page</h1>
//             </div>
//         )
//     }
// }

ReactDOM.render(<div>
    <App/>
    </div>, document.getElementById('root'));