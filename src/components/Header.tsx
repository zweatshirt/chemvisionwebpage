import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="py-6 px-4 bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-cyan-400">ChemVision</h1>
          <p className="text-sm text-gray-400">by Southern Illinois University Edwardsville</p>
        </motion.div>
        <motion.nav
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-cyan-400 transition-colors">Features</a></li>
            <li><a href="#demo" className="hover:text-cyan-400 transition-colors">Demo</a></li>
            <li>
              <a href="#" className="bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition-colors">
                Download
              </a>
            </li>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;