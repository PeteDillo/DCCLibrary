import React, { Component } from 'react';
import "./BookCreator.css"

class BookCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name: '',
            author: ''
        }
    }

handleChange = (event)=>{
    console.log(event.target.value)
    this.setState({
        name: event.target.value
    });
        
}

    render() { 
        return ( 
            <form>
                <label>Book Name</label>
                <input onChange={this.handleChange} value={this.state.name} />
                <label>Author</label>
                <input onChange={this.handleChange} value={this.state.author} />
                <button type="submit">Create Book</button>
            </form>
         );
    }
}
 
export default BookCreator;