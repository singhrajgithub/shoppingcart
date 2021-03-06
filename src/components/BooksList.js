import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Route,
    Link
  }
    from 'react-router-dom'

class BooksList extends Component {
    constructor() {
        super();
        this.state =
        {
            list: null,
        }
    }

    componentDidMount() {
        fetch("http://localhost:4000/bookstore").then((response) => {
            response.json().then((result) => {
                //console.log(result);
                this.setState({ list: result })

            })
        })
    }


    render() {
        console.warn(this.state)
        return (
            <div>
                <h1>Available Books to Order</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>AddToCart</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.list.map((item, i) =>
                                        <tr>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.author}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td><Link to={"/cart/"+item.id}><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</Link></td>
                                      </tr>
                                        
                                        )
                                }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please wait ...</p>
                }
            </div>
        );
    }
}

export default BooksList;