import React, { Component } from 'react';
import { Table, Form, Container } from 'react-bootstrap'
class BookSearch extends Component {
    constructor() {
        super();
        this.state =
        {
            searchData: null,
            noData: false
        }
    }
    search(key) {
        console.log(key)
        fetch("http://localhost:4000/bookstore?q=" + key).then((data) => {
            data.json().then((resp) => {
                console.warn(resp);

                if (resp.length > 0) {
                    this.setState({ searchData: resp, noData: false })
                }
                else {
                    this.setState({ noData: true, searchData: null })
                }
            })
        })
    }
    render() {
        return (
            <Container>
                <h1>Book Search</h1>
                {/* <input type="text" onChange={(event)=> this.search(event.target.value)}></input> */}
                <Form.Control type="text" onChange={(event) => this.search(event.target.value)} placeholder="Search Books" />
                <div>
                    {
                        this.state.searchData ?
                            <div>
                                {
                                    this.state.searchData.map((item) =>
                                        <div className="search-row">
                                            {item.title}</div>
                                    )
                                }
                            </div>
                            : ""
                    }
                    {
                        this.state.noData ? <h3>No data Found</h3> : null
                    }
                </div>
            </Container>
        );
    }
}
export default BookSearch;