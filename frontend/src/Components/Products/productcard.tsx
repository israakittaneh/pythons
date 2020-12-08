//the file that show information for single product
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css'
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import store from '../../store';
import addToCart from '../../store/actions/addtocartaction'


//props type
interface Props {
    price: number,
    imge: string,
    name: string,
    location: {
        state: {
            theproduct: {
                product_quantity: number;
                product_description: string;
                product_price: number;
                product_name: string;
                product_img: string,
                _id: string
            }
        }
    }
}

//product type
interface Product {
    product_quantity: number;
    product_description: string;
    product_price: number;
    product_name: string;
    product_img: string,
    _id: string
}
interface State {
    quantity: number
}
let theproduct: Product
export default class ProductsCard extends Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props)
        this.state = {
            quantity: 1
        }

        this.incrementQuantity = this.incrementQuantity.bind(this)
        this.decrementQuantity = this.decrementQuantity.bind(this)
        this.addtothecart = this.addtothecart.bind(this)
    }

    incrementQuantity() {
        this.setState({
            quantity: this.state.quantity + 1
        })

    }
    decrementQuantity() {
        if (this.state.quantity)
            this.setState({
                quantity: this.state.quantity - 1
            })

    }
    addtothecart() {
        console.log('in')
        store.dispatch(addToCart({ s: this.state.quantity }))
        var storedata = store.getState()
        console.log(storedata.cartReducer.whatincart)
    }
    render() {
        theproduct = this.props.location.state.theproduct

        return (
            <div>
                <div className=" ">
                    <img className="" alt="100x100" src={theproduct.product_img}
                        data-holder-rendered="true" />
                    <h2 className="my-5 h2">{theproduct.product_name}</h2>
                    <h4 className="my-5 h4">{theproduct.product_price}</h4>
                    <h5 className="my-5 h5">{theproduct.product_quantity}</h5>
                    <p>{theproduct.product_description}</p>
                    <div className='quantity'>
                        <button className='btn minus-btn' type='button' onClick={this.decrementQuantity} >-</button>
                        <input type='text' id='quantity' value={this.state.quantity}></input>
                        <button className='btn plus-btn' type='button' onClick={this.incrementQuantity} >+</button>
                    </ div>
                    <Button onClick={this.addtothecart} endIcon={<ShoppingCartIcon></ShoppingCartIcon>} className="addtocart" variant="contained" color="primary" >Add to Cart</Button>
                </div>
            </div >
        )
    }
}