import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import MoleculeViewer from './components/MoleculeViewer';
import InteractiveDemo from './components/InteractiveDemo';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <Hero />
        <Features />
        <MoleculeViewer />
        <InteractiveDemo />
        <Team />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;