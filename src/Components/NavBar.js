import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'

export default function NavBar() {
    return (
        <header>
            <div>
                <nav className="navigation">
                    <Typography 
                        variant="h5" 
                        className="hello"
                    >Hello Phong</Typography>
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