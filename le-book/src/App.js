import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

// All current search books will be saved here
let books = [];

function App() {
  return (
    <div className="App">
      <div className="navigation-bar">
        <h1 className="application-name">LeBook</h1>
        <AuthorInput/>
      </div>
      <main>
      </main>
    </div>
  );
}

class AuthorInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

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
          books = [];
        } else {
          books = response.data.items;
          console.log(books);
        }
      }
      )
      .catch(error => {
        let content = document.querySelector('main');
        content.innerHTML = "Oups... Il semblerait qu'une erreur se soit produite."
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

class BookView extends React.Component {
  constructor(props) {
    super(props);
    
  }
}

export default App;
