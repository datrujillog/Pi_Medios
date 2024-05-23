// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li><Link to="/users">Go to Dashboard</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
