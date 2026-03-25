// src/components/BlogPostModal.jsx
import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BlogContext } from '../context/BlogContext';

const BlogPostModal = ({ post, onClose }) => {
  const { incrementViews } = useContext(BlogContext);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // Set current URL for sharing
    setCurrentUrl(window.location.href);
    
    // Increment view count when post is opened
    incrementViews(post.id);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [post.id, incrementViews]);

  // Simple markdown parser
  const formatContent = (content) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('## ')) {
          return `<h2 key={index} class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">${line.slice(3)}</h2>`;
        }
        if (line.startsWith('# ')) {
          return `<h1 key={index} class="text-3xl font-bold mt-10 mb-5">${line.slice(2)}</h1>`;
        }
        
        // Bold
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-emerald-700">$1</strong>');
        // Italic
        line = line.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
        
        // Bullet points
        if (line.startsWith('- ')) {
          return `<li key={index} class="ml-6 mb-2 flex items-start gap-2">
                    <span class="text-emerald-600 mt-1">•</span>
                    <span>${line.slice(2)}</span>
                  </li>`;
        }
        
        // Numbered lists
        if (/^\d+\./.test(line)) {
          return `<li key={index} class="ml-6 mb-2 flex items-start gap-2">
                    <span class="text-emerald-600 font-semibold">${line.match(/^\d+/)[0]}.</span>
                    <span>${line.replace(/^\d+\.\s*/, '')}</span>
                  </li>`;
        }
        
        // Empty line
        if (line.trim() === '') return '<br key={index}/>';
        
        // Regular paragraph
        return `<p key={index} class="mb-4 leading-relaxed text-gray-700">${line}</p>`;
      })
      .join('');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`, '_blank', 'width=600,height=400');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + currentUrl)}`, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(post.title)}`, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image if available */}
        {post.image ? (
          <div className="relative">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* Close Button - Using emoji fallback */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-200 text-2xl transition bg-black/50 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
              aria-label="Close"
            >
              ✕
            </button>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-emerald-500/90 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  📁 {post.category}
                </span>
                {post.featured && (
                  <span className="inline-block bg-yellow-500/90 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                    ⭐ Featured
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-white/90">
                <span>📅 {post.date}</span>
                <span>⏱️ {post.readTime}</span>
                <span>👤 {post.author || 'YES Admin'}</span>
                <span>👁️ {post.views || 0} views</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white">
            {/* Close Button - Using emoji fallback */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-200 text-2xl transition bg-black/30 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
              aria-label="Close"
            >
              ✕
            </button>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                📁 {post.category}
              </span>
              {post.featured && (
                <span className="inline-block bg-yellow-500/90 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  ⭐ Featured
                </span>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-white/90">
              <span>📅 {post.date}</span>
              <span>⏱️ {post.readTime}</span>
              <span>👤 {post.author || 'YES Admin'}</span>
              <span>👁️ {post.views || 0} views</span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
          
          {/* Author Bio Section */}
          <div className="mt-10 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-xl">
                👤
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{post.author || 'YES Admin'}</h4>
                <p className="text-sm text-gray-600">Youth Environmental Scholars • Environmental Advocate</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Passionate about environmental conservation and empowering youth to take climate action.
              Follow our journey as we work towards a sustainable future.
            </p>
          </div>
          
          {/* Share Section - Enhanced with emoji icons for guaranteed visibility */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-sm text-gray-600 font-medium flex items-center gap-2">
                🔗 Share this article:
              </p>
              
              <div className="flex flex-wrap gap-3">
                {/* Facebook Share */}
                <button 
                  onClick={shareOnFacebook}
                  className="group relative px-5 py-3 bg-[#1877f2] text-white rounded-xl hover:bg-[#0c63d4] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2 font-medium"
                  title="Share on Facebook"
                >
                  <span className="text-xl">📘</span>
                  <span className="hidden sm:inline">Facebook</span>
                </button>
                
                {/* Twitter Share */}
                <button 
                  onClick={shareOnTwitter}
                  className="group relative px-5 py-3 bg-[#1da1f2] text-white rounded-xl hover:bg-[#0c8bdf] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2 font-medium"
                  title="Share on Twitter"
                >
                  <span className="text-xl">🐦</span>
                  <span className="hidden sm:inline">Twitter</span>
                </button>
                
                {/* WhatsApp Share */}
                <button 
                  onClick={shareOnWhatsApp}
                  className="group relative px-5 py-3 bg-[#25d366] text-white rounded-xl hover:bg-[#20bd5a] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2 font-medium"
                  title="Share on WhatsApp"
                >
                  <span className="text-xl">💬</span>
                  <span className="hidden sm:inline">WhatsApp</span>
                </button>
                
                {/* LinkedIn Share */}
                <button 
                  onClick={shareOnLinkedIn}
                  className="group relative px-5 py-3 bg-[#0077b5] text-white rounded-xl hover:bg-[#006396] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2 font-medium"
                  title="Share on LinkedIn"
                >
                  <span className="text-xl">🔗</span>
                  <span className="hidden sm:inline">LinkedIn</span>
                </button>
                
                {/* Copy Link */}
                <button 
                  onClick={copyToClipboard}
                  className="group relative px-5 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2 font-medium"
                  title="Copy Link"
                >
                  {copied ? (
                    <>
                      <span className="text-xl">✅</span>
                      <span className="hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <span className="text-xl">📋</span>
                      <span className="hidden sm:inline">Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          
          {/* Tags Section */}
          <div className="mt-6 pt-4">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-500">🏷️ Related topics:</span>
              <button className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-emerald-100 hover:text-emerald-600 transition">
                {post.category}
              </button>
              <button className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-emerald-100 hover:text-emerald-600 transition">
                Environmental Conservation
              </button>
              <button className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-emerald-100 hover:text-emerald-600 transition">
                Climate Action
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer with Navigation */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex justify-between items-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition flex items-center gap-2 font-medium"
          >
            ← Close
          </button>
          
          <div className="flex gap-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition flex items-center gap-2 font-medium"
            >
              ↑ Top
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogPostModal;