import React from 'react';
import './nav.css';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    return (
        <div>

            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Link to="/">home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </Toolbar>
            </AppBar>

        </div>
    );
};

export default Navbar
