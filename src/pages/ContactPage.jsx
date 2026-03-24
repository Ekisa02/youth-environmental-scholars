// src/pages/ContactPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/PageTransition';
import { FaFacebook, FaTwitter, FaTiktok, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'youthenvironmentalscholar@gmail.com',
      link: 'mailto:youthenvironmentalscholar@gmail.com',
    },
    {
      icon: FaFacebook,
      label: 'Facebook',
      value: 'Youth Environmental Scholars',
      link: 'https://facebook.com',
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      value: '@YEScholars',
      link: 'https://twitter.com',
    },
    {
      icon: FaTiktok,
      label: 'TikTok',
      value: '@yescholars',
      link: 'https://tiktok.com',
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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Get in touch with us - we'd love to hear from you!
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                ref={ref}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h2 className="text-2xl font-heading font-bold mb-6 text-gray-900">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors transform hover:scale-105"
                  >
                    Send Message
                  </button>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-100 text-green-700 p-3 rounded-lg text-center"
                    >
                      Message sent successfully!
                    </motion.div>
                  )}
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-primary-50 rounded-2xl p-8 mb-8">
                  <h2 className="text-2xl font-heading font-bold mb-6 text-gray-900">
                    Get in Touch
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={index}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{info.label}</p>
                          <p className="font-medium text-gray-900">{info.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Map Section */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="h-64 bg-gray-200">
                    <iframe
                      title="YES Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8168362040547!2d36.821594!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d3e4c6e5b1%3A0x9c4b9c5b5c5b5c5b!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <FaMapMarkerAlt className="text-primary-600" />
                      <p className="text-gray-700">Nairobi, Kenya</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaPhone className="text-primary-600" />
                      <p className="text-gray-700">+254 700 000 000</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ContactPage;