import logo from './logo.svg';
import Home from './Pages/home';
import GDA from './Pages/gda';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Common/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gda" element={<GDA />} />
      </Routes>

    </Router>
  );
}

export default App; 