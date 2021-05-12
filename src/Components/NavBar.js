import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <header>
            <div>
                <nav className="navigation">
                    <h2 className="hello">Hello Phong</h2>
                    <NavLink 
                        to='/lists' 
                        exact style={{textDecoration: 'none'}}
                    >
                        <img 
                            src="http://cdn.onlinewebfonts.com/svg/img_82026.png" 
                            alt="list-icon" 
                            className="list-icon"
                        />
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}