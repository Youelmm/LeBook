import logo from './logo.svg'
import './App.css'
import AuthorInput from './authorInput'
import BookView from './bookView'

export var _books = []

function App() {
  return (
    <div className="App">
      <div className="navigation-bar">
        <h1 className="application-name">LeBook</h1>
        <AuthorInput books={_books} />
      </div>
      <main>
        <div className="search-books">
          <BookView books={_books} />
        </div>
      </main>
    </div>
  )
}

export default App
