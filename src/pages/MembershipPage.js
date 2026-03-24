// src/pages/MembershipPage.js
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
      color: 'from-primary-500 to-primary-700',
      icon: '⭐',
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
      color: 'from-yellow-500 to-yellow-700',
      icon: '🏆',
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
      color: 'from-blue-500 to-blue-700',
      icon: '🤝',
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
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Membership
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Join our community of environmental champions and make a difference
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {memberships.map((membership, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  ref={ref}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden h-full"
                >
                  <div className={`h-2 bg-gradient-to-r ${membership.color}`} />
                  <div className="p-8">
                    <div className="text-5xl mb-4">{membership.icon}</div>
                    <h3 className="text-2xl font-heading font-bold mb-3 text-gray-900">
                      {membership.type}
                    </h3>
                    <p className="text-gray-600 mb-6">{membership.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-primary-600 mb-2">
                        {membership.fee}
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {membership.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary-600 mt-1">✓</span>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Member Benefits
              </h2>
              <p className="text-xl text-gray-600">
                What you get when you join the YES community
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Leadership Opportunities', desc: 'Lead environmental initiatives in your community' },
                { title: 'Skill Development', desc: 'Workshops on research, advocacy, and project management' },
                { title: 'Global Network', desc: 'Connect with youth environmentalists worldwide' },
                { title: 'Recognition', desc: 'Certificates and awards for outstanding contributions' },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <div className="text-3xl mb-4">✨</div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default MembershipPage;