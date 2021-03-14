import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <div className="rmdb-header">
        <div className="rmdb-header-content">
          
        <Link to="/">
        <a><h1>TrevorIMDBReact</h1></a>
        </Link>
        
        </div>
        
     </div>
    )

}

export default Header;