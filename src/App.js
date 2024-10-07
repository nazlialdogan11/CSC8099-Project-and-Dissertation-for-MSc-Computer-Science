import Home from './Pages/home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './Components/Common/Navbar';
import About from './Pages/about';
import Introduction from './Pages/introduction';
import GeneChemicalInteractions from './Pages/GeneChemicalInteractions';
import DISGENET from './Pages/DISGENET';
import GeneDiseaseAssociations from './Pages/GeneDiseaseAssociations';
import CTD from './Pages/CTD';
import DiseaseChemicalAssociations from './Pages/DiseaseChemicalAssociations';
import Conclusion from './Pages/conclusion';
import Resources from './Pages/resources';
import Comparison from './Pages/comparison';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/genediseaseassociations" element={<GeneDiseaseAssociations />} />

        <Route path="/DISGENET" element={<DISGENET />} />
        <Route path="/CTD" element={<CTD />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/genechemicalinteractions" element={<GeneChemicalInteractions />} />
        <Route path="/diseasechemicalassociations" element={<DiseaseChemicalAssociations />} />
        <Route path="/conclusion" element={<Conclusion />} />
        <Route path="/resources" element={<Resources />} />

      </Routes>

    </Router>
  );
}

export default App; 