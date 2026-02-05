import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CategorySection from './components/CategorySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <CategorySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
