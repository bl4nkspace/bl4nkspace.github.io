import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import { SiItchdotio, SiGithub } from "react-icons/si";
import './NavBar.css';
import logo from '../assets/logo.png';

const NavBar = () => {
    const toggleDarkMode = () => {
        document.body.classList.toggle("dark-mode")
    }

    return (
        <nav className="navbar">
            <div>
                <img className="navbar-logo" src={logo} alt="logo" />
            </div>
            <div className="navbar-brand">BL4NK_SPACE</div>
            <a className="navbar-links" href="https://bl4nk-space.itch.io/" target="_blank" title="Itch.io">
                <SiItchdotio size={32} />
            </a>
            <a className="navbar-links" href="https://github.com/bl4nkspace" target="_blank" title="GitHub">
                <SiGithub size={32} />
            </a>
            <div className="navbar-actions" title="Toggle dark mode">
                <ThemeSwitch onChangeFunction={toggleDarkMode} />
            </div>
        </nav>
    )
    }

export default NavBar;
