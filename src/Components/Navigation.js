import '../App.css';
import React, {
} from 'react';

import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="navigation">
    <Link to="/discover" activeClassName="selectedPage">Discover</Link>
    <Link to="/search" activeClassName="selectedPage">Search</Link>
    <Link to="/map" activeClassName="selectedPage">Map</Link>
    <Link to="/profile" activeClassName="selectedPage">Profile</Link>
  </div>
);

export default Navigation;
