import React from 'react'

export default class BookView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.books.length == 0) {
      return <p>Aucun ouvrage correspondant à votre recherche.</p>
    }
    return this.props.books.map((book) => {
      let coverLink = ''
      // Check if the book has a thumbnail
      if (book.volumeInfo.hasOwnProperty('imageLinks')) {
        coverLink = book.volumeInfo.imageLinks.thumbnail
      } else {
        coverLink =
          'https://historyexplorer.si.edu/sites/default/files/book-348.jpg'
      }
      return (
        <div className="book">
          <img src={coverLink} alt="Couverture" />
          <a
            href={book.volumeInfo.previewLink}
            target="_blank"
            className="book-title"
          >
            {book.volumeInfo.title}
          </a>
          <p className="book-description">{book.volumeInfo.description}</p>
        </div>
      )
    })
  }
}
