import React from 'react';
import { Link } from 'react-router-dom';

export default props =>
    <div className="menu">
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/level1">Level1</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </div>
    