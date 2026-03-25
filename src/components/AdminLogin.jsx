// src/components/AdminLogin.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdminLogin = ({ onLogin, onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin(password)) {
      // Success - handled by parent
    } else {
      setError('Invalid password. Please try again.');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full"
    >
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-lock text-white text-2xl"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Admin Access</h2>
        <p className="text-gray-500 mt-1">Enter password to manage blog posts</p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 mb-3"
          autoFocus
        />
        
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mb-3 text-center"
          >
            {error}
          </motion.p>
        )}
        
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition"
        >
          Login
        </button>
      </form>
    </motion.div>
  );
};

export default AdminLogin;