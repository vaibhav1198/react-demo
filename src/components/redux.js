import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider, connect} from 'react-redux'

var initialState = {
    qty: 0,
    price: 0
}

function changeState(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            var stateCopy1 = Object.assign({}, state);
            stateCopy1.qty = stateCopy1.qty + action.qty;
            stateCopy1.price = stateCopy1.price + action.price;
            return stateCopy1;
        default:
            return state;

    }
}
var store = createStore(changeState);

export default class Redu extends React.Component {
    render() {
        return (
            <div className="container">
            <Provider store={store}>
                <Comp1 /><br />
                <Comp2 />
            </Provider>
            </div>
        )
    }
}
class Comp1 extends React.Component {
    increase = () => {
        var action = {
            type: 'INCREMENT',
            qty: 1,
            price: 100
        }
        store.dispatch(action);
    }


    render() {
        return (
            <button className="btn" type="button" onClick={this.increase}>Increase</button>
        )
    }

}


class Comp2 extends React.Component {
    render() {
        return (
            <div>
                <h1>Total items in cart: {this.props.cartQty}</h1>
                <h1>Total price of cart :{this.props.cartPrice}</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        cartQty:state.qty,
        cartPrice:state.price
    }
}

Comp2 = connect(mapStateToProps)(Comp2)
