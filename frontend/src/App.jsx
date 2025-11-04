import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookView from './components/BookView';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:cityName" element={<BookView />} />
      </Routes>
    </Router>
  );
}

export default App;
