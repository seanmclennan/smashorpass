import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/scroll" element={[<Header />, <Cards />]} />
      </Routes>
    </Router>
  );
}

export default App;
