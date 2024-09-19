import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <p>Here are some of our blog posts:</p>
      <ul>
        {[...Array(20).keys()].map(num => (
          <li key={num}>
            <Link to={`/blogs/blog-${num + 1}`}>Blog Post {num + 1}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
