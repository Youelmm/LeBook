import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom/client'
import App, { _books } from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

/**
 * Class which represents the author input for searching books
 */
export default class AuthorInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    // Bindings
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    // Set the user input current value
    this.setState({ value: event.target.value })

    // Request
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=inauthor:' +
          event.target.value,
      )
      .then((response) => {
        // Save data
        // If there are no books
        if (typeof response.data.items === 'undefined') {
          // No books
          _books.length = 0
          root.render(<App />)
        } else {
          // There are books
          // Clear data
          _books.length = 0
          // New data
          _books.push(...response.data.items)
          console.log(response.data.items)
          // Refresh
          root.render(<App />)
        }
      })
      .catch((error) => error)
  }

  handleSubmit(event) {
    // Avoid default behavior
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          placeholder="Auteur"
          onChange={this.handleChange}
        />
      </form>
    )
  }
}
