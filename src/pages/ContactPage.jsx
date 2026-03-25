// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/PageTransition';
import { FaFacebook, FaTwitter, FaTiktok, FaEnvelope, FaMapMarkerAlt, FaPhone, FaInstagram, FaLinkedin, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const ContactPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    setFocused({ ...focused, [field]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700',
    },
    {
      icon: FaFacebook,
      label: 'Facebook',
      value: 'Youth Environmental Scholars',
      link: 'https://www.facebook.com/profile.php?id=61580688276090&sk=directory_links',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      value: '@YouthEnvSholars',
      link: 'https://x.com/YouthEnvSholars',
      color: 'from-sky-500 to-sky-600',
      hoverColor: 'hover:from-sky-600 hover:to-sky-700',
    },
    {
      icon: FaTiktok,
      label: 'TikTok',
      value: '@youthenvironmentalscholars',
      link: 'https://vm.tiktok.com/ZS9RuQYTYrRmv-ylz7t/',
      color: 'from-black to-gray-800',
      hoverColor: 'hover:from-gray-800 hover:to-black',
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
                Get in 
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Touch</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions, ideas, or want to collaborate? We'd love to hear from you!
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form - Enhanced */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                ref={ref}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-8 py-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <FaPaperPlane className="text-white" />
                    Send us a Message
                  </h2>
                  <p className="text-purple-100 text-sm mt-1">
                    We'll get back to you within 24 hours
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <div className={`relative transition-all duration-300 ${focused.name ? 'transform scale-[1.02]' : ''}`}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={() => handleBlur('name')}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className={`relative transition-all duration-300 ${focused.email ? 'transform scale-[1.02]' : ''}`}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <div className={`relative transition-all duration-300 ${focused.message ? 'transform scale-[1.02]' : ''}`}>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={() => handleBlur('message')}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 resize-none"
                        placeholder="Tell us what you'd like to share..."
                      />
                    </div>
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane />
                    Send Message
                  </motion.button>
                  
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl text-center flex items-center justify-center gap-2"
                    >
                      <FaCheckCircle className="text-green-600" />
                      Message sent successfully! We'll get back to you soon.
                    </motion.div>
                  )}
                </form>
              </motion.div>

              {/* Contact Information - Enhanced */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                {/* Contact Cards */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                    <span className="text-2xl">📞</span>
                    Connect With Us
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={index}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 8, scale: 1.02 }}
                        className={`flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 group`}
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 uppercase tracking-wide">{info.label}</p>
                          <p className="font-medium text-gray-800 group-hover:text-purple-600 transition">
                            {info.value}
                          </p>
                        </div>
                        <div className="text-gray-400 group-hover:text-purple-600 transition">
                          <i className="fas fa-arrow-right"></i>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Location & Contact Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="relative h-56 bg-gradient-to-br from-emerald-400 to-teal-500">
                    <iframe
                      title="YES Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8168362040547!2d36.821594!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d3e4c6e5b1%3A0x9c4b9c5b5c5b5c5b!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      className="opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4 p-3 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <FaMapMarkerAlt className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                        <p className="text-gray-700 font-medium">Eldoret, Kenya</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <FaPhone className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                        <p className="text-gray-700 font-medium">+254 740 433099</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Hours Card */}
                <div className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <i className="fas fa-clock text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold">Working Hours</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-100">Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-100">Saturday</span>
                      <span className="font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-100">Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-purple-400/30">
                    <p className="text-sm text-purple-100">
                      <i className="fas fa-envelope mr-2"></i>
                      Response within 24 hours
                    </p>
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