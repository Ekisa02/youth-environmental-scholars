// src/pages/OurWorkPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/PageTransition';

const OurWorkPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const activities = [
    {
      title: 'Tree Planting and Restoration',
      description: 'Organizing community tree planting events to restore forests and combat deforestation. We have planted over 10,000 trees in the last year.',
      icon: '🌳',
      color: 'from-emerald-500 to-teal-600',
      borderColor: 'border-emerald-200',
      stats: '10,000+ trees planted',
    },
    {
      title: 'Clean-up Campaigns',
      description: 'Leading clean-up drives in beaches, parks, and urban areas to reduce pollution and promote recycling initiatives.',
      icon: '🗑️',
      color: 'from-blue-500 to-cyan-600',
      borderColor: 'border-blue-200',
      stats: '5,000+ kg waste collected',
    },
    {
      title: 'Environmental Awareness',
      description: 'Educating communities about environmental issues, sustainable practices, and climate action through workshops and outreach programs.',
      icon: '📢',
      color: 'from-amber-500 to-orange-600',
      borderColor: 'border-amber-200',
      stats: '50+ communities reached',
    },
    {
      title: 'Research & Data Collection',
      description: 'Conducting scientific research to inform environmental policies and develop evidence-based solutions for conservation.',
      icon: '🔬',
      color: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-200',
      stats: '15 research papers',
    },
    {
      title: 'Innovation Hub',
      description: 'Developing tech-driven solutions for environmental challenges, including mobile apps and data visualization tools.',
      icon: '💡',
      color: 'from-rose-500 to-red-600',
      borderColor: 'border-rose-200',
      stats: '5 innovations launched',
    },
    {
      title: 'Youth Mentorship',
      description: 'Empowering young environmental leaders through mentorship programs and capacity building workshops.',
      icon: '👥',
      color: 'from-indigo-500 to-purple-600',
      borderColor: 'border-indigo-200',
      stats: '200+ youth trained',
    },
  ];

  const projects = [
    {
      title: 'Green Schools Initiative',
      description: 'Partnering with schools to establish tree nurseries and environmental clubs',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3',
      impact: '15 schools, 2,000 students',
    },
    {
      title: 'River Restoration Project',
      description: 'Restoring local rivers through clean-up and riparian zone protection',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3',
      impact: '3 rivers, 50 km restored',
    },
    {
      title: 'Plastic-Free Campaign',
      description: 'Advocating for plastic reduction and promoting sustainable alternatives',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3',
      impact: '10,000+ pledges',
    },
    {
      title: 'Urban Farming Program',
      description: 'Promoting urban agriculture and food security in urban areas',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3',
      impact: '50 urban gardens',
    },
    {
      title: 'Climate Education Workshops',
      description: 'Training teachers and students on climate change and adaptation',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3',
      impact: '100+ workshops',
    },
    {
      title: 'Waste Management Program',
      description: 'Implementing sustainable waste management systems in communities',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3',
      impact: '5,000 households',
    },
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section - Same as BlogPage */}
        <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 py-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>
          <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <i className="fas fa-leaf text-emerald-600"></i>
                <span className="text-sm text-emerald-700">Youth Environmental Scholars</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-green-500">
                Our 
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Impact</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the impactful activities and projects we're leading to protect our environment and empower communities
              </p>
            </motion.div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
                <span className="text-purple-600">🌟</span>
                <span className="text-sm text-purple-700 font-medium">What We Do</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Key 
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Activities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Creating lasting environmental change through diverse initiatives
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
            </motion.div>

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
                  <div className={`bg-white rounded-2xl shadow-xl overflow-hidden h-full border-2 ${activity.borderColor} hover:shadow-2xl transition-all duration-300 relative`}>
                    {/* Gradient Top Bar */}
                    <div className={`h-2 bg-gradient-to-r ${activity.color}`} />
                    
                    {/* Decorative Element */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-50 to-transparent rounded-bl-full opacity-50"></div>
                    
                    <div className="p-8 relative z-10">
                      {/* Icon Container with Gradient */}
                      <div className={`w-20 h-20 bg-gradient-to-r ${activity.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-4xl">{activity.icon}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {activity.description}
                      </p>
                      
                      {/* Impact Stat Badge */}
                      <div className={`inline-block px-3 py-1 bg-gradient-to-r ${activity.color} bg-opacity-10 rounded-full`}>
                        <span className={`text-xs font-semibold bg-gradient-to-r ${activity.color} bg-clip-text text-transparent`}>
                          📊 {activity.stats}
                        </span>
                      </div>
                      
                      {/* Hover Arrow */}
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                        <span className="text-sm text-purple-600 font-medium flex items-center gap-1">
                          Learn more <span>→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Gallery Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
                <span className="text-emerald-600">📸</span>
                <span className="text-sm text-emerald-700 font-medium">Recent Projects</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our 
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Recent Activities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Check out our latest environmental initiatives and their impact
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Impact Badge */}
                      <div className="absolute bottom-3 left-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.impact}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-purple-600 transition">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-purple-600 font-medium">Learn more →</span>
                        <span className="text-xs text-gray-400">{project.impact}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Statistics Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-500 to-emerald-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-white">📊</span>
                <span className="text-white text-sm">Our Impact</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Making a Difference Together
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                The collective impact of our work across communities
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '10+', label: 'Trees Planted', icon: '🌳' },
                { number: '50+', label: 'Youth Engaged', icon: '👥' },
                { number: '5+', label: 'Communities', icon: '🏘️' },
                { number: '1+', label: 'Workshops', icon: '📚' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
                <span className="text-purple-600">🤝</span>
                <span className="text-sm text-purple-700">Get Involved</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Want to Make a Difference?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join us in our mission to protect the environment and create sustainable communities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
                >
                  Volunteer With Us
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  Partner With Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default OurWorkPage;