import './App.css';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import BooksContainer from './components/BooksContainer';
import Categories from './components/Categories';

function App() {
  return (
    <div className="container">
      <Router>
        <nav>
          <h1>Bookstore CMS</h1>
          <ul>
            <li><Link to="/">Books</Link></li>
            <li><Link to="/categories">Categories</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<BooksContainer />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
