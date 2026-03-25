// src/lib/db.js
import { Pool } from 'pg';

// Create connection pool using the DATABASE_URL from environment
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Helper function to execute queries
export async function query(text, params) {
  const start = Date.now();
  try {
    const result = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: result.rowCount });
    return result;
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
}

// Blog post specific functions
export async function getAllPosts() {
  const result = await query(
    'SELECT * FROM blog_posts ORDER BY created_at DESC'
  );
  return result.rows;
}

export async function getPostById(id) {
  const result = await query(
    'SELECT * FROM blog_posts WHERE id = $1',
    [id]
  );
  return result.rows[0];
}

export async function createPost(post) {
  const result = await query(
    `INSERT INTO blog_posts (
      title, content, excerpt, author, category, featured, image, read_time, date
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *`,
    [
      post.title,
      post.content,
      post.excerpt,
      post.author || 'Admin',
      post.category,
      post.featured,
      post.image,
      post.readTime,
      new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    ]
  );
  return result.rows[0];
}

export async function updatePost(id, post) {
  const result = await query(
    `UPDATE blog_posts 
     SET 
       title = $1,
       content = $2,
       excerpt = $3,
       category = $4,
       featured = $5,
       image = $6,
       read_time = $7,
       updated_at = CURRENT_TIMESTAMP
     WHERE id = $8
     RETURNING *`,
    [
      post.title,
      post.content,
      post.excerpt,
      post.category,
      post.featured,
      post.image,
      post.readTime,
      id
    ]
  );
  return result.rows[0];
}

export async function deletePost(id) {
  const result = await query(
    'DELETE FROM blog_posts WHERE id = $1 RETURNING id',
    [id]
  );
  return result.rows[0];
}

export async function incrementViews(id) {
  const result = await query(
    'UPDATE blog_posts SET views = views + 1 WHERE id = $1 RETURNING views',
    [id]
  );
  return result.rows[0];
}

// Close pool on app termination
process.on('SIGTERM', () => {
  pool.end();
});