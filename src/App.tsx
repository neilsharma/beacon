import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Partners from './components/Partners';
import Modernization from './components/Modernization';
import Security from './components/Security';
import Team from './components/Team';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Careers from './pages/Careers';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <Modernization />
      <Security />
      <Partners />
      <Team />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
}

export default App;