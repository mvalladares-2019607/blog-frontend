import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>

      <div className="navbar bg-cyan-800 shadow-2xl">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-white">Mi blog</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li> <Link to="/posts" className='text-white text-xl	 font-bold'>Posts</Link></li>
            <li> <Link to="/create" className='text-white text-xl	 font-bold'>Create</Link></li>
          </ul>
        </div>
      </div>
    </>

  );
};

