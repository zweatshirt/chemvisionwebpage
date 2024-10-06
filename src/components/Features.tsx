import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: 'Molecular Playground',
    description: 'Manipulate 3D molecules in a vibrant virtual space with intuitive hand controls.'
  },
  {
    title: 'Explosive Reactions',
    description: 'Trigger and observe chemical reactions in stunning VR simulations.'
  },
  {
    title: 'Brain-Bending Quizzes',
    description: 'Test your knowledge with immersive VR quizzes and unlock achievements.'
  }
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Unleash Your Inner Chemist</h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg p-8 shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;