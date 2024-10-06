import React, { useState } from 'react';
import { motion } from 'framer-motion';

const tabs = ['Molecules', 'Reactions', 'Quizzes', 'Animations'];

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="demo" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Experience the Magic</h2>
        <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
          <div className="flex">
            <div className="w-1/3 bg-gray-800 p-4">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab}
                  className={`w-full py-3 px-4 text-left font-semibold mb-2 rounded ${
                    activeTab === index ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
            <div className="w-2/3 p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-300">
                {tabs[activeTab]} Experience
              </h3>
              <p className="text-gray-300 mb-6">
                Immerse yourself in the world of {tabs[activeTab].toLowerCase()} with ChemVision's cutting-edge VR technology.
              </p>
              <motion.img
                src={`https://source.unsplash.com/800x400/?chemistry,${tabs[activeTab].toLowerCase()}`}
                alt={`${tabs[activeTab]} Demo`}
                className="w-full rounded-lg shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;