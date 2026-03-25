// src/pages/HomePage.jsx
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
    { number: '10+', label: 'Active Members', icon: '👥', description: 'Passionate youth environmentalists' },
    { number: '5+', label: 'Projects Completed', icon: '🌍', description: 'Community-driven initiatives' },
    { number: '1,000+', label: 'Trees Planted', icon: '🌳', description: 'Restoring our forests' },
    { number: '5+', label: 'Communities', icon: '🏘️', description: 'Across the region' },
  ];

  const activities = [
    {
      title: 'Tree Planting & Restoration',
      description: 'Restoring ecosystems through community tree planting and forest conservation efforts.',
      icon: '🌳',
      color: 'from-emerald-500 to-teal-600',
      link: '/our-work'
    },
    {
      title: 'Clean-up Campaigns',
      description: 'Organizing community clean-ups in urban areas, parks, and water bodies.',
      icon: '🗑️',
      color: 'from-blue-500 to-cyan-600',
      link: '/our-work'
    },
    {
      title: 'Environmental Education',
      description: 'Raising awareness through workshops, seminars, and community outreach programs.',
      icon: '📢',
      color: 'from-amber-500 to-orange-600',
      link: '/our-work'
    },
  ];

  const upcomingEvents = [
    {
      title: 'Community Tree Planting',
      date: 'April 15, 2024',
      location: 'Eldoret Forest',
      icon: '🌱'
    },
    {
      title: 'Youth Climate Summit',
      date: 'May 5, 2024',
      location: 'Online & In-person',
      icon: '🎯'
    },
    {
      title: 'Waste Management Workshop',
      date: 'May 20, 2024',
      location: 'Community Center',
      icon: '♻️'
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section - Unchanged */}
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
            Youth environmental scholars is a youth led CBO comprising of passionate professionals in conservation matters possessing positive attitude and zeal to conserve and protect the environment.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Join Us button removed - only Learn More remains */}
            <Link to="/about" className="btn-secondary inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
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

      {/* Stats Section - Simplified for Small Startup */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
              <span className="text-purple-600">📊</span>
              <span className="text-sm text-purple-700 font-medium">Our Impact So Far</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Making a Difference
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Together</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every step we take brings us closer to a sustainable future
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                ref={ref}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">{stat.number}</div>
                <div className="text-gray-800 font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-gray-500 text-xs">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
              <span className="text-emerald-600">🌟</span>
              <span className="text-sm text-emerald-700 font-medium">What We Do</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Our Key 
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Activities</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Creating meaningful environmental change through focused initiatives
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <Link to={activity.link}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                    <div className={`h-2 bg-gradient-to-r ${activity.color}`} />
                    <div className="p-6 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-r ${activity.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-4xl">{activity.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {activity.description}
                      </p>
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-purple-600 text-sm font-medium">Learn more →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
              <span className="text-purple-600">📅</span>
              <span className="text-sm text-purple-700 font-medium">Stay Involved</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Upcoming 
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Events</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us in our upcoming activities and be part of the change
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-purple-50 to-emerald-50 rounded-2xl p-6 border border-purple-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">{event.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{event.title}</h3>
                    <p className="text-xs text-purple-600">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <span>📍</span>
                  <span>{event.location}</span>
                </div>
                <button className="w-full py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 border border-purple-200">
                  Register Interest
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Simplified */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-white">🤝</span>
              <span className="text-white text-sm">Get Involved</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join our community of young environmental leaders and start creating impact today
            </p>
            <Link 
              to="/membership" 
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              <span>Become a Member</span>
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;