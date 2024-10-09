import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import MigrationPage from './components/MigrationPage';
import VisaServices from './components/VisaServices';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import MigrationNews from './components/MigrationNews';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';


const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<MigrationPage />} />
        <Route path="/visa-services" element={<VisaServices />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/news" element={<MigrationNews />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
