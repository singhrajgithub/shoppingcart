import React, { Component } from 'react';

class BookCreate extends Component {


    constructor(){

        super();
        this.state={
            title :null,
            author:null,
            price:0,
            quantity:0
        }
    }
    create(){

        fetch("http://localhost:4000/bookstore",{
            method :"Post",
            headers : {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(this.state)
            }).then((result)=> { 
                result.json().then( (resp)=>{
                    console.warn(resp)
                    alert("New Book has been Added")
            })
        })}
        
    

    render() {
        return (
            <div>
                <h1>BookCreate</h1>
                <div>
                    <input onChange={(event)=> { this.setState({title:event.target.value})}} 
                    placeholder="Book Title" /><br></br><br></br>
                    <input onChange={(event)=> { this.setState({author:event.target.value})}} 
                    placeholder="Book Author" /><br></br><br></br>
                    <input onChange={(event)=> { this.setState({price:event.target.value})}} 
                    placeholder="Book Price" /><br></br><br></br>
                    <input onChange={(event)=> { this.setState({quantity:event.target.value})}} 
                    placeholder="Book Quantity" /><br></br><br></br>
                    <button onClick={()=>{this.create()}}>Add New Book</button>
                </div>
            </div>
        );
    }
}

export default BookCreate;