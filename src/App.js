import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
}
  from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faHome, faSearch, faPlus ,faShoppingCart, faCheck } from '@fortawesome/free-solid-svg-icons'

import Home from "./components/Home"
import BooksList from "./components/BooksList"
import BookDetail from "./components/BookDetail"
import BookCreate from "./components/BookCreate"
import BookSearch from "./components/BookSearch"
import BookCart from "./components/BookCart"
import BookOrders from "./components/BookOrders"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Online-BookStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome} /> Home </Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faList} /> BooksList </Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/create"><FontAwesomeIcon icon={faPlus} />CreateNewBook</Link></Nav.Link>
              <Nav.Link href="#home"><Link to="/search"><FontAwesomeIcon icon={faSearch} />Search</Link></Nav.Link>
              <Nav.Link href="#home"><Link to="/check"><FontAwesomeIcon icon={faCheck} />CheckAllOrders</Link></Nav.Link>
              {/* <Nav.Link href="#home"><Link to="/detail">Details</Link></Nav.Link> */}
              {/* <Nav.Link href="#home"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} />Cart</Link></Nav.Link> */}

            </Nav>

          </Navbar.Collapse>
        </Navbar>



        <Route path="/list">
          <BooksList />
        </Route>

        <Route path="/detail">
          <BookDetail></BookDetail>
        </Route>

        <Route path="/create">
          <BookCreate></BookCreate>
        </Route>

        <Route path="/search">
          <BookSearch></BookSearch>
        </Route>

        <Route path="/cart/:id" render={props=>(
        <BookCart {...props}  />
        )}
        >
         
        </Route>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/check">
          <BookOrders></BookOrders>
        </Route>


      </Router>
    </div>
  );
}

export default App;
