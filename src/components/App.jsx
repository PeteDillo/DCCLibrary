import React, { Component } from "react";
import './App.css'
import TitleBar from "./TitleBar/TitleBar";

class App extends Component {
    constructor(props){
        super(props);
        this.books =[
            {title:"The Alchemist", author: "Paulo Coelho"},
            {title:"Twilight", author: "Stephenie Meyer"},
            {title:"If You Give A Mouse A Cookie", author: "Laura Numeroff"},
            {title:"Harry Potter and The Sorcerer's Stone", author: 'J.K. Rowling'}
        ];
        this.state = {
            bookNumber: 2
        };
    }
    goToNextBook = () =>{
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }
    goToPreviousBook = () =>{
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0 ){
            tempBookNumber = this.books.length - 1;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }
    render(){
        return(
            <div className="container-fluid">
                <TitleBar/>
                <div className="row">
                <div className="col-md-4">
                    {/**Buitton to move to last book */}
                    <button onClick={this.goToPreviousBook}>Previous Book</button>
                    </div>
                <div className="col-md-4">
                    {/** display book with cover here */}
                    <h1>{this.books[this.state.bookNumber].title}</h1>
                    <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                <div className="col-md-4">
                    {/**Buitton to move to next book */}
                    <button onClick={this.goToNextBook}>Next Book</button>
                    </div>
                </div>
        
            </div>
        )
    }
}

export default App;