import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <header>
            <div>
                <nav className="navigation">
                    <NavLink to='/lists' exact style={{textDecoration: 'none'}}>Grocery List</NavLink>
                </nav>
            </div>
        </header>
    )
}