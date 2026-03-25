// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Chairperson from '../assets/images/Chairperson.jpeg';
import Vicechairperson from '../assets/images/Vicechairperson.jpeg';
import Secretary from '../assets/images/Secretary.jpeg';
import Treasurer from '../assets/images/tresuarer.jpeg';
import OrganizingSecretary from '../assets/images/Organisingsecretary.jpeg';
import CommitteeTeam from '../assets/images/CommitteeMember.jpeg';
import CantactPage from '../pages/ContactPage'

const AboutPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const navigate = useNavigate();

  const objectives = [
    'Build community awareness on climate action and ecosystem protection',
    'Conduct multidisciplinary research on biodiversity and conservation',
    'Mentor youth in tech-driven environmental projects and innovation',
    'Influence policy through advocacy and strategic partnerships',
  ];

  const values = [
    { title: 'Innovation', description: 'Embracing creative solutions to environmental challenges', icon: '💡', color: 'from-purple-500 to-purple-600' },
    { title: 'Sustainability', description: 'Committed to long-term environmental impact', icon: '🌱', color: 'from-emerald-500 to-teal-600' },
    { title: 'Collaboration', description: 'Working together with communities and partners', icon: '🤝', color: 'from-blue-500 to-cyan-600' },
    { title: 'Excellence', description: 'Striving for the highest standards in our work', icon: '⭐', color: 'from-amber-500 to-orange-600' },
  ];

  const leaders = [
    { role: 'Chairperson', name: 'Antony Aluvale', image: Chairperson, icon: '👑', color: 'from-purple-500 to-purple-600', bio: 'Leading the organization with passion for environmental conservation' },
    { role: 'Vice Chairperson', name: 'Naomi Makhoha', image: Vicechairperson, icon: '🌟', color: 'from-emerald-500 to-teal-600', bio: 'Dedicated to driving sustainable solutions and community engagement' },
    { role: 'Secretary', name: 'Heykerl Adala', image: Secretary, icon: '📝', color: 'from-blue-500 to-cyan-600', bio: 'Expert in organizational management and environmental policy' },
    { role: 'Treasurer', name: 'Ashanet Atieno', image: Treasurer, icon: '💰', color: 'from-amber-500 to-orange-600', bio: 'Financial stewardship for sustainable conservation projects' },
    { role: 'Organizing Secretary', name: 'Byrone Abiero', image: OrganizingSecretary, icon: '📅', color: 'from-rose-500 to-red-600', bio: 'Coordinating events and programs for environmental awareness' },
    { role: 'Committee Members', name: 'Peter Muchiri & Laura Aketch', image: CommitteeTeam, icon: '👥', color: 'from-indigo-500 to-purple-600', bio: 'Dedicated committee members supporting organizational activities' },
  ];

  const handleViewFullTeam = () => {
    navigate('/structure');
  };
  const handlegetinvold = () =>{
    navigate('/contact');
  }

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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About 
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Us</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn about our mission, vision, and the passionate team behind YES
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              ref={ref}
              className="max-w-5xl mx-auto"
            >
              {/* Main Content Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-gray-100">
                <div className="h-2 bg-gradient-to-r from-purple-500 to-emerald-500"></div>
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Youth Environmental Scholars is a youth-led Community Based Organization (CBO) comprising 
                    passionate professionals in conservation matters. We possess a positive attitude and unwavering 
                    zeal to conserve and protect the environment for current and future generations.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {/* Mission */}
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xl">🎯</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        To advance innovative, evidence-based solutions that address the challenges of climate change 
                        and environmental degradation through cutting-edge research, community engagement, and sustainable 
                        conservation practices.
                      </p>
                    </div>
                    
                    {/* Vision */}
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 rounded-xl p-6 border border-emerald-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xl">👁️</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Our Vision</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        To be a dynamic force of young innovators transforming our communities through sustainable solutions, 
                        climate action, and environmental stewardship for a resilient future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Values */}
              <div className="mb-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
                    <span className="text-purple-600">✨</span>
                    <span className="text-sm text-purple-700 font-medium">Our Principles</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    Core 
                    <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Values</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    The principles that guide our work and shape our impact
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group"
                    >
                      <div className="bg-white rounded-xl p-6 text-center border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300">
                        <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-3xl">{value.icon}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-gray-800">{value.title}</h3>
                        <p className="text-sm text-gray-600">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Objectives */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/30 rounded-2xl p-8 md:p-12 mb-12 border border-purple-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📋</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Our Objectives</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {objectives.map((objective, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all"
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{objective}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Organization Structure with Photos */}
              <div>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
                    <span className="text-emerald-600">🏛️</span>
                    <span className="text-sm text-emerald-700 font-medium">Leadership Team</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    Meet Our 
                    <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Leaders</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Passionate individuals driving environmental change through dedicated leadership
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {leaders.map((leader, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group cursor-pointer"
                      onClick={() => navigate('/structure')}
                    >
                      <div className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-${leader.color.split(' ')[1].replace('to-', '')}-200 hover:shadow-xl transition-all duration-300`}>
                        <div className={`h-2 bg-gradient-to-r ${leader.color}`}></div>
                        
                        {/* Image Container */}
                        <div className="relative h-56 overflow-hidden">
                          <img 
                            src={leader.image} 
                            alt={leader.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-3 left-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View Profile
                          </div>
                        </div>
                        
                        <div className="p-6 text-center">
                          <div className={`w-16 h-16 bg-gradient-to-r ${leader.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 -mt-12 border-4 border-white`}>
                            <span className="text-2xl text-white">{leader.icon}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-1 text-gray-800">{leader.name}</h3>
                          <p className="text-purple-600 font-medium text-sm mb-2">{leader.role}</p>
                          <p className="text-gray-500 text-xs leading-relaxed">{leader.bio}</p>
                          
                          {/* Decorative Line */}
                          <div className={`w-12 h-1 bg-gradient-to-r ${leader.color} mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* View Full Team Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  className="text-center"
                >
                  <button
                    onClick={handleViewFullTeam}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-semibold hover:from-purple-700 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span>View Full Leadership Team</span>
                    <span>→</span>
                  </button>
                  <p className="text-sm text-gray-500 mt-3">
                    Click on any leader or button to see the complete organization structure
                  </p>
                </motion.div>
              </div>

              {/* Call to Action */}
              <div className="mt-12 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  className="bg-gradient-to-r from-purple-600 to-emerald-500 rounded-2xl p-8 text-white"
                >
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                    <span className="text-white">🤝</span>
                    <button
                    onClick={handlegetinvold}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-semibold hover:from-purple-700 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span className="text-white text-sm">Join Our Movement</span>
                    </button>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Be Part of the Change</h3>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    Join our community of young environmental leaders and help us create a sustainable future
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                  >  
                  <button
                    onClick={handlegetinvold}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-semibold hover:from-purple-700 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span>Get Involved</span>
                    <span>→</span>
                  </button>
                    
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default AboutPage;