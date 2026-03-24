// src/pages/OurWorkPage.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/PageTransition';

const OurWorkPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const activities = [
    {
      title: 'Tree Planting and Restoration',
      description: 'Organizing community tree planting events to restore forests and combat deforestation.',
      icon: '🌳',
      color: 'from-green-500 to-green-700',
    },
    {
      title: 'Clean-up Campaigns',
      description: 'Leading clean-up drives in beaches, parks, and urban areas to reduce pollution.',
      icon: '🗑️',
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Environmental Awareness Campaigns',
      description: 'Educating communities about environmental issues and sustainable practices.',
      icon: '📢',
      color: 'from-yellow-500 to-yellow-700',
    },
    {
      title: 'Research and Data Collection',
      description: 'Conducting scientific research to inform environmental policies and solutions.',
      icon: '🔬',
      color: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Innovation',
      description: 'Developing tech-driven solutions for environmental challenges.',
      icon: '💡',
      color: 'from-red-500 to-red-700',
    },
  ];

  return (
    <PageTransition>
      <div className="pt-24">
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
          <div className="container-custom text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-white to-purple-700 bg-clip-text text-transparent"
            >
              Our Work
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Discover the impactful activities and projects we're leading to protect our environment
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  ref={ref}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                    <div className={`h-2 bg-gradient-to-r ${activity.color}`} />
                    <div className="p-8">
                      <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        {activity.icon}
                      </div>
                      <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Recent Activities
              </h2>
              <p className="text-xl text-gray-600">
                Check out our recent environmental initiatives
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3',
                'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3',
                'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3',
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 rounded-xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Activity ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-semibold">View Project</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default OurWorkPage;