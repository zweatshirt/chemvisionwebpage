import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Alex McKinney', role: 'Software Engineer', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'Jingru Zhang', role: 'Software Engineer', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'Zach Linscott', role: 'Software Engineer', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
];

const Team = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-cyan-300">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="bg-gray-800 rounded-lg p-8 shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-3xl font-semibold mb-6 text-center text-cyan-400">Special Thanks</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-xl text-white mb-2">Dr. Michael Shaw</p>
              <p className="text-sm text-gray-400">SIUE</p>
            </div>
            <div className="hidden md:block h-16 w-px bg-gray-700"></div>
            <div className="text-center">
              <p className="text-xl text-white mb-2">Kaleb Cole</p>
              <p className="text-sm text-gray-400">Contributor</p>
            </div>
          </div>
          <p className="text-gray-300 mt-8 text-center">
            For their invaluable contributions to the earliest version of this concept.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;