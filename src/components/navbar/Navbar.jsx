import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <Link className="btn-ghost">Blog</Link>
        </div>
        <div className="flex-none">
          <ul className="menu-horizontal">
            <li>
              <Link to="/posts" className="btn-ghost">Posts</Link>
            </li>
            <li>
              <Link to="/create" className="btn-ghost">Create</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

