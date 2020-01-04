import React, { Component } from 'react';
import Center from 'react-center';

class Home extends Component {
    render() {
        return (
            <div>
                <h1> Welcome to Online Book Shopping</h1><br></br>
                <Center>
                
                <body>
                <br></br>
                    This ia a Simple app created using react js as front End and JSON Server to Fake multiple REST API calls.
                    <br></br><br></br>
                    It uses a file with db.json which act as a database for this App.
                    <br></br><br></br>
                    JSON server is being started on localhost as react js App. 
                    <br></br><br></br>
                    Post starting it starts serving request made by front end.
                    <br></br><br></br>
                    All books related information have been stored in it as json data.
                    <br></br> <br></br>
                    I am using two collections to store Books related information and capture Orders.                     
                </body>
           
                </Center>
                <br></br><br></br><br></br><br></br>
                <footer>
                <small>
                    Code by Raj Singh
                </small>
            </footer>
            </div>
        );
    }
}

export default Home;