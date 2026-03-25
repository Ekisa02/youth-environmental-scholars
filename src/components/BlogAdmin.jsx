// src/components/BlogAdmin.jsx
import React, { useState, useContext, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogContext } from '../context/BlogContext';

const BlogAdmin = ({ onClose }) => {
  const { posts, addPost, updatePost, deletePost, logout } = useContext(BlogContext);
  const [editingPost, setEditingPost] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: 'General',
    featured: false,
    image: null
  });

  const categories = ['General', 'Climate Action', 'Conservation', 'Research', 'Community', 'Events', 'Announcement', 'Success Story', 'Tips & Guides'];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setFormData({ ...formData, image: null });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('Please fill in title and content');
      return;
    }

    if (editingPost) {
      updatePost(editingPost.id, {
        ...formData,
        excerpt: formData.excerpt || formData.content.substring(0, 150)
      });
      alert('Post updated successfully!');
    } else {
      addPost({
        ...formData,
        excerpt: formData.excerpt || formData.content.substring(0, 150),
        author: 'Admin'
      });
      alert('Post published successfully!');
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      category: 'General',
      featured: false,
      image: null
    });
    setImagePreview(null);
    setEditingPost(null);
    setShowForm(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const editPost = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt || '',
      category: post.category || 'General',
      featured: post.featured || false,
      image: post.image || null
    });
    setImagePreview(post.image || null);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) {
      deletePost(id);
      alert('Post deleted successfully!');
    }
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen py-8 px-4" onClick={(e) => e.stopPropagation()}>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-5">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white">Blog Admin Panel</h2>
                <p className="text-emerald-100 text-sm mt-1">Manage your blog posts</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="bg-white text-emerald-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2 shadow-md"
                >
                  <i className="fas fa-plus"></i>
                  {showForm ? 'Cancel' : 'Create New Post'}
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-600 transition flex items-center gap-2 shadow-md"
                >
                  <i className="fas fa-sign-out-alt"></i>
                  Logout
                </button>
                <button
                  onClick={onClose}
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition shadow-md"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-b border-gray-200"
              >
                <form onSubmit={handleSubmit} className="p-6 bg-gray-50">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    {editingPost ? (
                      <>
                        <i className="fas fa-edit text-emerald-600"></i>
                        Edit Post
                      </>
                    ) : (
                      <>
                        <i className="fas fa-plus-circle text-emerald-600"></i>
                        Create New Post
                      </>
                    )}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter post title"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required
                      />
                    </div>
                    
                    {/* Image Upload Section */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Featured Image (Optional)
                      </label>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current.click()}
                          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition flex items-center gap-2"
                        >
                          <i className="fas fa-upload"></i>
                          Upload Image
                        </button>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        {imagePreview && (
                          <button
                            type="button"
                            onClick={removeImage}
                            className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1"
                          >
                            <i className="fas fa-trash"></i> Remove
                          </button>
                        )}
                      </div>
                      {imagePreview && (
                        <div className="mt-3">
                          <img 
                            src={imagePreview} 
                            alt="Preview" 
                            className="h-32 w-auto rounded-lg object-cover border border-gray-300"
                          />
                        </div>
                      )}
                      <p className="text-xs text-gray-500 mt-1">
                        <i className="fas fa-info-circle"></i> Recommended size: 1200x630px
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Short Excerpt (Optional)
                      </label>
                      <textarea
                        placeholder="Brief summary of the post (auto-generated if left blank)"
                        value={formData.excerpt}
                        onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                        rows="2"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({...formData, category: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        >
                          {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="flex items-center gap-3 pt-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.featured}
                            onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                            className="w-4 h-4 text-emerald-600"
                          />
                          <span className="text-sm text-gray-700">⭐ Feature this post (appears in featured section)</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Content <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        placeholder="Write your post content here... Use **bold**, *italic*, and bullet points with -"
                        value={formData.content}
                        onChange={(e) => setFormData({...formData, content: e.target.value})}
                        rows="12"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-sm"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        <i className="fas fa-info-circle"></i> Formatting: **bold**, *italic*, - bullet points, ## headings
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <button
                      type="submit"
                      className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition flex items-center gap-2 shadow-md"
                    >
                      <i className={`fas ${editingPost ? 'fa-save' : 'fa-paper-plane'}`}></i>
                      {editingPost ? 'Update Post' : 'Publish Post'}
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
                    >
                      Clear Form
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Posts List */}
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">All Posts</h3>
              <span className="text-sm bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                Total: {posts.length} posts
              </span>
            </div>
            
            <div className="space-y-3 max-h-[500px] overflow-y-auto">
              {posts.length === 0 ? (
                <div className="text-center py-12">
                  <i className="fas fa-newspaper text-5xl text-gray-300 mb-3"></i>
                  <p className="text-gray-500">No posts yet. Click "Create New Post" to get started.</p>
                </div>
              ) : (
                posts.map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex gap-4">
                      {/* Image Thumbnail */}
                      {post.image && (
                        <div className="flex-shrink-0">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-20 h-20 rounded-lg object-cover border border-gray-200"
                          />
                        </div>
                      )}
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <h4 className="font-semibold text-gray-800 text-lg">{post.title}</h4>
                          {post.featured && (
                            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                              <i className="fas fa-star text-xs"></i> Featured
                            </span>
                          )}
                          <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{post.category}</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-2 line-clamp-1">
                          {post.excerpt || post.content.substring(0, 100)}...
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <span><i className="far fa-calendar-alt mr-1"></i>{post.date}</span>
                          <span><i className="far fa-clock mr-1"></i>{post.readTime}</span>
                          <span><i className="far fa-eye mr-1"></i>{post.views || 0} views</span>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() => editPost(post)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition flex items-center gap-2 shadow-sm"
                          title="Edit Post"
                        >
                          <i className="fas fa-edit"></i>
                          <span className="hidden sm:inline">Edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(post.id, post.title)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition flex items-center gap-2 shadow-sm"
                          title="Delete Post"
                        >
                          <i className="fas fa-trash"></i>
                          <span className="hidden sm:inline">Delete</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">{posts.length}</div>
                <div className="text-gray-500">Total Posts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">{posts.filter(p => p.featured).length}</div>
                <div className="text-gray-500">Featured</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{new Set(posts.map(p => p.category)).size}</div>
                <div className="text-gray-500">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{posts.filter(p => p.image).length}</div>
                <div className="text-gray-500">With Images</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogAdmin;