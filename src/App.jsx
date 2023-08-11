import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import About from '../src/components/About';
import Portfolio from '../src/components/Portfolio';
import Contact from '../src/components/Contact';
import Resume from '../src/components/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/*" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;