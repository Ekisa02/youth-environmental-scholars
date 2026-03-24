// src/pages/BlogPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/PageTransition';

const BlogPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const articles = [
    {
      id: 1,
      title: 'The Power of Youth in Climate Action',
      description: 'How young people are leading the charge against climate change through innovative solutions and community engagement.',
      date: 'January 15, 2024',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3',
      author: 'Sarah Kimani',
    },
    {
      id: 2,
      title: 'Sustainable Farming Practices for Kenyan Farmers',
      description: 'Exploring eco-friendly agricultural methods that boost productivity while protecting our natural resources.',
      date: 'January 10, 2024',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3',
      author: 'John Otieno',
    },
    {
      id: 3,
      title: 'Plastic Pollution: A Call to Action',
      description: 'Understanding the impact of plastic waste on our environment and what we can do to reduce it.',
      date: 'January 5, 2024',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3',
      author: 'Mary Wanjiku',
    },
    {
      id: 4,
      title: 'Renewable Energy Innovations',
      description: 'Latest developments in solar and wind energy technologies for African communities.',
      date: 'December 28, 2023',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      author: 'James Mwangi',
    },
    {
      id: 5,
      title: 'Conservation Success Stories',
      description: 'Celebrating the achievements of communities that have successfully restored their local ecosystems.',
      date: 'December 20, 2023',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3',
      author: 'Esther Njeri',
    },
    {
      id: 6,
      title: 'The Future of Environmental Policy',
      description: 'How youth advocacy is shaping environmental legislation and policy decisions.',
      date: 'December 15, 2023',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3',
      author: 'David Ochieng',
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
              Our Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Insights, stories, and updates from the environmental frontlines
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  ref={ref}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>By {article.author}</span>
                    </div>
                    <h2 className="text-xl font-heading font-semibold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {article.description}
                    </p>
                    <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                      Read More →
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-center mt-12"
            >
              <button className="btn-primary">
                Load More Articles
              </button>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-primary-600">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Get the latest updates on environmental news and YES activities
              </p>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default BlogPage;