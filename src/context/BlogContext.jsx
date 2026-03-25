// src/context/BlogContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const BlogContext = createContext();

const STORAGE_KEY = 'yes_blog_posts';

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load posts from localStorage on initial load
  useEffect(() => {
    loadPosts();
    checkAuth();
  }, []);

  const loadPosts = () => {
    try {
      const savedPosts = localStorage.getItem(STORAGE_KEY);
      if (savedPosts) {
        setPosts(JSON.parse(savedPosts));
      } else {
        // Add initial welcome post
        const initialPosts = [
          {
            id: Date.now(),
            title: "Welcome to Youth Environmental Scholars Blog",
            content: `We are excited to launch our blog platform! This space will serve as a hub for sharing knowledge, stories, and insights about environmental conservation and climate action.

## What to Expect

- **Research Findings**: Latest studies and discoveries in environmental science
- **Success Stories**: Inspiring tales from our community projects
- **Youth Voices**: Perspectives from young environmental leaders
- **Tips & Guides**: Practical advice for sustainable living

## Get Involved

We encourage all members to contribute articles, share experiences, and engage with our content. Together, we can make a difference!

*Stay tuned for more exciting content coming soon.*`,
            excerpt: "Welcome to our new blog platform! Here we'll share stories, research, and insights about environmental conservation and climate action.",
            author: "YES Admin",
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            category: "Announcement",
            featured: true,
            readTime: "3 min read",
            views: 0,
            image: null
          }
        ];
        setPosts(initialPosts);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialPosts));
      }
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  // Save posts to localStorage whenever they change
  useEffect(() => {
    if (posts.length > 0 && !loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    }
  }, [posts, loading]);

  const addPost = (post) => {
    const newPost = {
      ...post,
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      views: 0,
      readTime: calculateReadTime(post.content)
    };
    setPosts(prevPosts => [newPost, ...prevPosts]);
    return newPost;
  };

  const updatePost = (id, updatedPost) => {
    setPosts(prevPosts => prevPosts.map(post => 
      post.id === id ? { 
        ...post, 
        ...updatedPost, 
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        readTime: calculateReadTime(updatedPost.content)
      } : post
    ));
  };

  const deletePost = (id) => {
    if (window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
      return true;
    }
    return false;
  };

  const incrementViews = (id) => {
    setPosts(prevPosts => prevPosts.map(post => 
      post.id === id ? { ...post, views: (post.views || 0) + 1 } : post
    ));
  };

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s/g).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  const login = (password) => {
    // Admin password
    const adminPassword = 'yes_admin_2025';
    if (password === adminPassword) {
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

  const getPostById = (id) => {
    return posts.find(post => post.id === parseInt(id));
  };

  const getPostsByCategory = (category) => {
    if (category === 'All') return posts;
    return posts.filter(post => post.category === category);
  };

  const getFeaturedPosts = () => {
    return posts.filter(post => post.featured);
  };

  const getRecentPosts = (limit = 5) => {
    return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, limit);
  };

  const searchPosts = (query) => {
    if (!query) return posts;
    const lowerQuery = query.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery) ||
      post.excerpt?.toLowerCase().includes(lowerQuery) ||
      post.category?.toLowerCase().includes(lowerQuery)
    );
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
      getPostById,
      getPostsByCategory,
      getFeaturedPosts,
      getRecentPosts,
      searchPosts,
      incrementViews
    }}>
      {children}
    </BlogContext.Provider>
  );
};