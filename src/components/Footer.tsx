import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-2 text-cyan-400">ChemVision</h3>
            <p className="text-sm text-gray-400 mb-2">by Southern Illinois University Edwardsville</p>
            <p className="text-gray-300">Revolutionizing chemistry education through mind-bending VR experiences.</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">Connect With</h4>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Email</a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Chemistry | SIUE</a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">SIUE Mainpage</a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-300">&copy; 2024 ChemVision. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-1">by Southern Illinois University Edwardsville</p>
            <p className="mt-2">
              <a href="#" className="text-cyan-400 hover:underline">Privacy Policy</a> | 
              <a href="#" className="text-cyan-400 hover:underline ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;