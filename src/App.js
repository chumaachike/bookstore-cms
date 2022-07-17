import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import BooksContainer from './components/BooksContainer';
import Categories from './components/Categories';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<BooksContainer />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
