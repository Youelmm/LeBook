import React from 'react';
import axios from 'axios';
import BookView from './bookView';

/**
 * Class which represents the author input for searching books
 */
export default class AuthorInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.books = [];
  
      // Bindings
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      // Set the user input current value
      this.setState({value: event.target.value});
  
      // Request
      axios.get("https://www.googleapis.com/books/v1/volumes?q=inauthor:" + this.state.value)
        .then(response => {
          // Save data
          // If there are no books
          if (typeof response.data.items === 'undefined') {
            this.books = [];
          } else {
            this.books = response.data.items;
            console.log(this.books)
          }
        }
        )
        .catch(error => {
          let content = document.querySelector('main');
          content.innerHTML = "Oups... Il semblerait qu'une erreur se soit produite: " + error;
        }
        )
    }
  
    handleSubmit(event) {
      // Avoid default behaviour
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} placeholder='Auteur' onChange={this.handleChange}/>
        </form>
      );
    }
  }