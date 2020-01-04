import React, { Component } from 'react';
import nextId from "react-id-generator";
var id;

class BookCart extends Component {
    
    constructor() {

        super();
        this.state = {
            orderId : null,
            price: 0,
            quantity: 0,
            title: null,
            author: null
        }
        

    }

    componentDidMount() {

        fetch('http://localhost:4000/bookstore/' + this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.log(result);
                this.setState({
                    price: result.price,
                    quantity: 1,
                    title: result.title,
                    author: result.author,
                    orderId: nextId()

                })

            })
        })
    }

    order() {

        id = this.state.orderId;

        fetch("http://localhost:4000/orders", {
            method: "Post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                var id = resp.orderId;
                var price = resp.price;
                var quantity = resp.quantity;

                alert("Order Completed . Thank you For Placing Order!!. Your Order Number is : " + id + " Total Price :" + price + " Ordered Quantity :" + quantity)

            })
        })
    }

    render() {

        console.warn(this.state)
        return (
            <div>
                <h2>Final Book Cart List. Click on Checkout to Place Order</h2>
                <br></br>
                <div>
                    <label>Title :</label>
                    <input onChange={(event) => { this.setState({ title: event.target.value }) }}
                        placeholder="Book Title"  value={this.state.title} /><br></br><br></br>
                    <label>Author : </label>
                    <input onChange={(event) => { this.Add({ title: event.target.value }) }}
                        placeholder="Book Author" value={this.state.author} /><br></br><br></br>
                    <label>Price : </label>
                    <input onChange={(event) => { this.Add({ title: event.target.value }) }}
                        placeholder="Book Price" value={this.state.price} /><br></br><br></br>
                    <button onClick={() => { this.order() }}>CheckOut</button>
                </div>
            </div>
        );

    }
}

export default BookCart;