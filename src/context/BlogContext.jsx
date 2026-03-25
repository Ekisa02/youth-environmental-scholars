// src/context/BlogContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import * as db from '../lib/db';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load posts from database
  useEffect(() => {
    loadPosts();
    checkAuth();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const allPosts = await db.getAllPosts();
      setPosts(allPosts);
    } catch (error) {
      console.error('Error loading posts:', error);
      alert('Failed to load posts. Please refresh the page.');
    } finally {
      setLoading(false);
    }
  };

  const addPost = async (post) => {
    try {
      const readTime = calculateReadTime(post.content);
      const newPost = await db.createPost({
        ...post,
        readTime,
        author: 'Admin'
      });
      
      setPosts([newPost, ...posts]);
      alert('✅ Post published successfully!');
      return newPost;
    } catch (error) {
      console.error('Error adding post:', error);
      alert('❌ Failed to publish post. Please try again.');
    }
  };

  const updatePost = async (id, updatedPost) => {
    try {
      const readTime = calculateReadTime(updatedPost.content);
      const updated = await db.updatePost(id, {
        ...updatedPost,
        readTime
      });
      
      setPosts(posts.map(post => 
        post.id === id ? updated : post
      ));
      alert('✅ Post updated successfully!');
    } catch (error) {
      console.error('Error updating post:', error);
      alert('❌ Failed to update post. Please try again.');
    }
  };

  const deletePost = async (id) => {
    if (!window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      return;
    }
    
    try {
      await db.deletePost(id);
      setPosts(posts.filter(post => post.id !== id));
      alert('✅ Post deleted successfully!');
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('❌ Failed to delete post. Please try again.');
    }
  };

  const incrementViews = async (id) => {
    try {
      await db.incrementViews(id);
      setPosts(posts.map(post => 
        post.id === id ? { ...post, views: (post.views || 0) + 1 } : post
      ));
    } catch (error) {
      console.error('Error incrementing views:', error);
    }
  };

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s/g).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  const login = (password) => {
    if (password === 'yes_admin_2025') {
      setIsAuthenticated(true);
      localStorage.setItem('blog_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('blog_auth');
  };

  const checkAuth = () => {
    const auth = localStorage.getItem('blog_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  };

  return (
    <BlogContext.Provider value={{
      posts,
      loading,
      isAuthenticated,
      addPost,
      updatePost,
      deletePost,
      login,
      logout,
      incrementViews
    }}>
      {children}
    </BlogContext.Provider>
  );
};