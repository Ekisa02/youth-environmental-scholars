// src/pages/AboutPage.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/PageTransition';

const AboutPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const objectives = [
    'Build community awareness on climate action and ecosystem protection',
    'Conduct multidisciplinary research',
    'Mentor youth in tech-driven environmental projects',
    'Influence policy through advocacy and partnerships',
  ];

  const structure = [
    { role: 'Chairperson', name: 'Position Available' },
    { role: 'Vice Chairperson', name: 'Position Available' },
    { role: 'Secretary', name: 'Position Available' },
    { role: 'Treasurer', name: 'Position Available' },
    { role: 'Organizing Secretary', name: 'Position Available' },
    { role: 'Committee Members', name: 'Multiple Positions' },
  ];

  return (
    <PageTransition>
      <div className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
          <div className="container-custom text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-white to-purple-700 bg-clip-text text-transparent"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Learn about our mission, vision, and the passionate team behind YES
            </motion.p>
          </div>
        </section>

        {/* Description */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              ref={ref}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                <h2 className="text-3xl font-heading font-bold mb-6 text-gray-900">Who We Are</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Youth Environmental Scholars is a youth-led CBO comprising passionate professionals in conservation with a strong commitment to protecting the environment.
                </p>
                
                <h2 className="text-3xl font-heading font-bold mb-6 text-gray-900">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  To advance innovative, evidence-based solutions addressing climate change through research, community engagement, and sustainable conservation practices.
                </p>
                
                <h2 className="text-3xl font-heading font-bold mb-6 text-gray-900">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be a dynamic force of young innovators transforming communities through sustainable solutions and environmental stewardship.
                </p>
              </div>

              {/* Objectives */}
              <div className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-12">
                <h2 className="text-3xl font-heading font-bold mb-8 text-gray-900">Our Objectives</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {objectives.map((objective, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm">
                        ✓
                      </div>
                      <span className="text-gray-700">{objective}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Organization Structure */}
              <div>
                <h2 className="text-3xl font-heading font-bold mb-8 text-gray-900 text-center">
                  Organization Structure
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {structure.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl shadow-lg p-6 text-center"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-3xl text-white">👤</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{member.role}</h3>
                      <p className="text-gray-600">{member.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default AboutPage;