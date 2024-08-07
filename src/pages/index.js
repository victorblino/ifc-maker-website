// pages/index.js
import React from 'react';
import MainSection from '../components/MainSection';
import Projects from '../components/Projects';
import TeamSection from '../components/TeamSection';
import peopleData from '../data/peopleData'; // Ajuste o caminho conforme necessário
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Home = () => {
  return (
    <div className="bg-white text-primary-dark">
      <MainSection />
      <Projects />
      <TeamSection people={peopleData} />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
