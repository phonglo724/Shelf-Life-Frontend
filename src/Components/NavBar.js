import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to='/lists' exact>Grocery List</NavLink>
                </nav>
            </div>
        </header>
    )
}