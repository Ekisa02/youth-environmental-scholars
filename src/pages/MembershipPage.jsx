// src/pages/MembershipPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/PageTransition';

const MembershipPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const memberships = [
    {
      type: 'Full Membership',
      description: 'Active participation in all YES activities and programs',
      features: [
        'Voting rights in general meetings',
        'Access to all YES events and workshops',
        'Opportunity to lead projects',
        'Networking with environmental professionals',
        'Monthly newsletters and updates',
      ],
      fee: 'Paid registration and annual subscription',
      gradient: 'from-emerald-500 to-teal-600',
      icon: '⭐',
      borderColor: 'border-emerald-200',
      buttonColor: 'from-emerald-600 to-emerald-500',
    },
    {
      type: 'Honorary Membership',
      description: 'Recognition for exceptional contributions to environmental conservation',
      features: [
        'Lifetime recognition',
        'Invitation to special events',
        'Mentorship opportunities',
        'Certificate of recognition',
        'Feature in YES publications',
      ],
      fee: 'No fees (by invitation only)',
      gradient: 'from-purple-500 to-purple-600',
      icon: '🏆',
      borderColor: 'border-purple-200',
      buttonColor: 'from-purple-600 to-purple-500',
    },
    {
      type: 'Entity Membership',
      description: 'For organizations and institutions partnering with YES',
      features: [
        'Collaboration on environmental projects',
        'Brand visibility and recognition',
        'Access to YES research and data',
        'Joint event hosting opportunities',
        'Corporate volunteering programs',
      ],
      fee: 'Annual partnership fee',
      gradient: 'from-blue-500 to-blue-600',
      icon: '🤝',
      borderColor: 'border-blue-200',
      buttonColor: 'from-blue-600 to-blue-500',
    },
  ];

  const benefits = [
    { title: 'Leadership Opportunities', desc: 'Lead environmental initiatives in your community', icon: '👑', color: 'from-amber-500 to-orange-500' },
    { title: 'Skill Development', desc: 'Workshops on research, advocacy, and project management', icon: '📚', color: 'from-emerald-500 to-teal-500' },
    { title: 'Global Network', desc: 'Connect with youth environmentalists worldwide', icon: '🌍', color: 'from-blue-500 to-cyan-500' },
    { title: 'Recognition', desc: 'Certificates and awards for outstanding contributions', icon: '🏅', color: 'from-purple-500 to-pink-500' },
    { title: 'Research Access', desc: 'Access to cutting-edge environmental research', icon: '🔬', color: 'from-indigo-500 to-purple-500' },
    { title: 'Community Impact', desc: 'Make real difference in local communities', icon: '🤝', color: 'from-rose-500 to-red-500' },
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-green-400">
                Join Our 
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Community</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Become part of a movement dedicated to environmental conservation and climate action
              </p>
            </motion.div>
          </div>
        </section>

        {/* Membership Cards Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your 
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Membership</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find the membership type that suits your level of engagement
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {memberships.map((membership, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  ref={ref}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden h-full border-2 ${membership.borderColor} hover:shadow-2xl transition-all duration-300 relative group`}
                >
                  {/* Gradient Top Bar */}
                  <div className={`h-2 bg-gradient-to-r ${membership.gradient}`} />
                  
                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-gray-50 opacity-50 rounded-bl-full -z-0"></div>
                  
                  <div className="p-8 relative z-10">
                    {/* Icon with Gradient Background */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${membership.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{membership.icon}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      {membership.type}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{membership.description}</p>
                    
                    {/* Fee Badge */}
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${membership.gradient} bg-opacity-10 rounded-full mb-4`}>
                      <span className={`text-xs font-semibold bg-gradient-to-r ${membership.gradient} bg-clip-text text-transparent`}>
                        {membership.fee}
                      </span>
                    </div>
                    
                    {/* Features List */}
                    <div className="mb-8">
                      <p className="text-sm font-semibold text-gray-700 mb-3">What's included:</p>
                      <ul className="space-y-2">
                        {membership.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className={`text-${membership.gradient.split(' ')[1].replace('to-', '')} mt-0.5`}>
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${membership.buttonColor} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      <span>Learn More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - Enhanced Cards */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
                <span className="text-purple-600">✨</span>
                <span className="text-sm text-purple-700 font-medium">Why Join Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Member 
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Benefits</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Exclusive benefits you'll enjoy as a member of the YES community
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Animated Border Glow */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur`}></div>
                  
                  <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300">
                    {/* Icon Container */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{benefit.icon}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                    
                    {/* Decorative Accent */}
                    <div className={`absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-full opacity-10 group-hover:opacity-20 transition`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-500 to-emerald-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="container-custom text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-white">🌟</span>
                <span className="text-white text-sm">Ready to Make a Difference?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Start Your Journey Today
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                Join hundreds of young environmental leaders already making an impact
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>Apply for Membership</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default MembershipPage;