import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/PageTransition';

const HomePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: '500+', label: 'Active Members', icon: '👥' },
    { number: '50+', label: 'Projects Completed', icon: '🌍' },
    { number: '10,000+', label: 'Trees Planted', icon: '🌳' },
    { number: '20+', label: 'Communities Reached', icon: '🏘️' },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-primary-50 to-earth-100" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10" />
        
        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent"
          >
            Youth Environmental <span className="text-purple-500">Scholars</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            Empowering youth to lead climate action, innovation, and sustainable change
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/membership" className="btn-primary inline-block bg-gradient-to-r from-purple-500 to-primary-700 text-white">
              Join Us
            </Link>
            <Link to="/about" className="btn-secondary inline-block bg-gradient-to-r from-primary-500 to-purple-500 text-white">
              Learn More
            </Link>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-600 rounded-full">
            <div className="w-1 h-2 bg-primary-600 rounded-full mx-auto mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                ref={ref}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Join YES?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be part of a movement that's creating real change for our planet
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Make Impact',
                description: 'Participate in real environmental projects that make a difference in communities.',
                icon: '🌱',
              },
              {
                title: 'Learn & Grow',
                description: 'Access workshops, training, and mentorship from environmental experts.',
                icon: '📚',
              },
              {
                title: 'Build Network',
                description: 'Connect with like-minded youth and professionals across the country.',
                icon: '🤝',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card p-8 text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;