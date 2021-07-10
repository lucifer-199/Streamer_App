import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                <h2 className="header">Streamy</h2>
            </Link>
            <div className="right menu">
               <Link to="/" className="item">
                    <h2 className="header">All streams</h2>
               </Link>
               <div className="item">
                    <GoogleAuth />
               </div>
            </div>        
        </div>
    )
}

export default Header;
