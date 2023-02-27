import logo from './logo.svg';
import './App.css';
import AuthorInput from './authorInput';
import BookView from './bookView';

let authorInput = <AuthorInput/>;

function App() {
  return (
    <div className="App">
      <div className="navigation-bar">
        <h1 className="application-name">LeBook</h1>
        {authorInput}
      </div>
      <main>
        <div className="search-books">
        
        </div>
      </main>
    </div>
  );
}

export default App;