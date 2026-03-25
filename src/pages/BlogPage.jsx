// src/pages/BlogPage.jsx
import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BlogContext } from '../context/BlogContext';
import PageTransition from '../components/PageTransition';
import AdminLogin from '../components/AdminLogin';
import BlogAdmin from '../components/BlogAdmin';
import BlogPostModal from '../components/BlogPostModal';

const BlogPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { 
    posts, 
    isAuthenticated, 
    login, 
    loading 
  } = useContext(BlogContext);
  
  const [showAdmin, setShowAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique categories
  const categories = ['All', ...new Set(posts.map(post => post.category))];
  
  // Filter posts
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleAdminClick = () => {
    if (isAuthenticated) {
      setShowAdmin(true);
    } else {
      setShowLogin(true);
    }
  };

  const handleLogin = (password) => {
    if (login(password)) {
      setShowLogin(false);
      setShowAdmin(true);
      return true;
    }
    return false;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-500">Loading posts...</p>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section - Original Background Retained */}
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
                Our Stories & 
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"> Insights</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover inspiring stories, research findings, and updates from our environmental conservation journey
              </p>

              {/* Admin Button - Enhanced with purple accent */}
              <button
                onClick={handleAdminClick}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-green-500 text-white rounded-full text-bold hover:bg-emerald-700 transition shadow-lg hover:shadow-purple-200"
              >
                <i className="fas fa-crown bg-purple-600 text-white p-2 rounded-full"></i>
                <span>Blog Admin</span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section - Enhanced with Purple Accents */}
        <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-20 shadow-sm">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
              {/* Enhanced Search Bar */}
              <div className="relative flex-1 max-w-2xl w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400"></i>
                </div>
                <input
                  type="text"
                  placeholder="Search articles by title, content, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 text-gray-700 placeholder-gray-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>

              {/* Enhanced Category Filter with Purple Active State */}
              <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide w-full lg:w-auto">
                {categories.map(cat => (
                  <motion.button
                    key={cat}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 font-medium ${
                      selectedCategory === cat
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                    }`}
                  >
                    {cat === 'All' ? '📚 All Posts' : `📁 ${cat}`}
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Search Stats with Purple Color */}
            {searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center"
              >
                <p className="text-sm text-purple-600">
                  <i className="fas fa-search mr-1"></i> Found {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} matching "{searchQuery}"
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50" ref={ref}>
          <div className="container-custom">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <i className="fas fa-star text-yellow-500"></i>
                  Featured Stories
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      onClick={() => setSelectedPost(post)}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-all"
                    >
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        {post.image ? (
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                            <i className="fas fa-leaf text-white text-6xl opacity-50"></i>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                            ⭐ Featured
                          </span>
                          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                            📁 {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 flex-wrap">
                          <span>📅 {post.date}</span>
                          <span>•</span>
                          <span className="text-purple-600 font-medium">{post.category}</span>
                          <span>•</span>
                          <span>⏱️ {post.readTime}</span>
                          <span>•</span>
                          <span>👁️ {post.views} views</span>
                        </div>
                        <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt || post.content.substring(0, 150)}...
                        </p>
                        <button className="text-purple-600 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                          Read Full Story <i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Posts */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
              {regularPosts.length === 0 && filteredPosts.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
                  <i className="fas fa-newspaper text-6xl text-gray-300 mb-4"></i>
                  <p className="text-gray-500">No articles found. Check back soon!</p>
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="mt-4 text-purple-600 hover:text-purple-700 font-semibold"
                    >
                      Clear search <i className="fas fa-arrow-right"></i>
                    </button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                      onClick={() => setSelectedPost(post)}
                      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group hover:shadow-xl transition-all"
                    >
                      {/* Image Container */}
                      <div className="h-48 overflow-hidden relative">
                        {post.image ? (
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-emerald-300 to-teal-400 flex items-center justify-center">
                            <i className="fas fa-seedling text-white text-5xl opacity-50"></i>
                          </div>
                        )}
                        <div className="absolute top-3 left-3">
                          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-lg text-xs font-medium">
                            📁 {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2 flex-wrap">
                          <span>📅 {post.date}</span>
                          <span>•</span>
                          <span className="text-purple-600">{post.category}</span>
                          <span>•</span>
                          <span>⏱️ {post.readTime}</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-purple-600 transition line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                          {post.excerpt || post.content.substring(0, 100)}...
                        </p>
                        <button className="text-purple-600 text-sm font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                          Read More <i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </div>

            {/* Post Count with Purple Accent */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm">
                  <i className="fas fa-chart-line text-purple-600"></i>
                  <span className="text-gray-600">
                    Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                  </span>
                  {searchQuery && (
                    <span className="text-purple-600">matching "{searchQuery}"</span>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section - Original Gradient */}
        <section className="py-16 bg-gradient-to-r from-emerald-700 to-teal-700">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <i className="fas fa-envelope-open-text text-white text-5xl mb-4"></i>
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest stories, research findings, and event updates
              </p>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button 
                  onClick={() => alert('Newsletter subscription feature coming soon!')}
                  className="bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition shadow-lg"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-emerald-100 text-xs mt-4">No spam, unsubscribe anytime.</p>
            </motion.div>
          </div>
        </section>

        {/* Modals */}
        <AnimatePresence>
          {selectedPost && (
            <BlogPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showLogin && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
              <div className="relative">
                <button
                  onClick={() => setShowLogin(false)}
                  className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl"
                >
                  <i className="fas fa-times"></i>
                </button>
                <AdminLogin onLogin={handleLogin} onClose={() => setShowLogin(false)} />
              </div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showAdmin && (
            <BlogAdmin onClose={() => setShowAdmin(false)} />
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default BlogPage;