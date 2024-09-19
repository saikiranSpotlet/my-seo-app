import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our blog site! Here are some of our latest blog posts:</p>
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

export default Home;
