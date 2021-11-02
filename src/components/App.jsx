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

    render(){
        return(
            <div className="container-fluid">
                <TitleBar/>
                <div className="row">
                <div className="col-md-4">
                    {/**Buitton to move to last book */}
                    </div>
                <div className="col-md-4">
                    {/** display book with cover here */}
                    <h1>{this.books[this.state.bookNumber].title}</h1>
                    <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                <div className="col-md-4">
                    {/**Buitton to move to next book */}
                    </div>
                </div>
               
            </div>
        )
    }
}

export default App;