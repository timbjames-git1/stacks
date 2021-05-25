import React, { useEffect, useState } from 'react';
import { NavLink, Route, Switch, useLocation } from 'react-router-dom';

import AboutView from './Views/About';
import ServicesView from './Views/Services';

import './App.css';

const App: React.FC = () => {

    const location = useLocation();
   
    let navClass = 'header-tops';

    if (location.pathname !== '/'){
        navClass += ' header-top';
    }

    const activeLinkStyle = (link: string): string => {

        console.log('pathname ', location.pathname);
        console.log('link ', link);

        return location.pathname === link
            ? 'active'
            : '';
    };

    const [showNavMenu, setShowNavMenu] = useState(false);

    const handleMobileMenuToggle = () => {
        setShowNavMenu(!showNavMenu);
    }

    useEffect(() => {
        setShowNavMenu(false);
    }, [location.pathname])

    return (
        <>
            <button type="button" className="mobile-nav-toggle d-lg-none" onClick={handleMobileMenuToggle}><i className="icofont-navigation-menu"></i></button>

            <header id="header" className={navClass}>
                <div className="container">

                    <h1><a href="index.html">Tim James</a></h1>
                    <h2>I'm a proud father, technical Manager, skilled Principle Engineer, and a passionate Lead Developer from Glasgow Scotland.</h2>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className={activeLinkStyle('/')}>
                                <NavLink to="">Home</NavLink>
                            </li>
                            <li className={activeLinkStyle('/about')}>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            
                            <li className={`${activeLinkStyle('/services')} d-none`}>
                                <NavLink to="/services">Services</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="social-links">
                        <a href="https://twitter.com/timjames_me" className="twitter" target="_blank" rel="noreferrer"><i className="icofont-twitter"></i></a>
                        <a href="https://www.google.com" className="facebook d-none"><i className="icofont-facebook"></i></a>
                        <a href="https://www.google.com" className="instagram d-none"><i className="icofont-instagram"></i></a>
                        <a href="https://www.google.com" className="google-plus d-none"><i className="icofont-skype"></i></a>
                        <a href="https://www.linkedin.com/in/tim-james-9a7a1610/" className="linkedin" target="_blank" rel="noreferrer"><i className="icofont-linkedin"></i></a>
                    </div>
                    
                    <p className="copyright mt-4">
                        Copyright ©<script>document.write(new Date().getFullYear());</script>2021 All rights reserved <i>({process.env.NODE_ENV} - {process.env.PUBLIC_URL})</i>
                    </p>

                </div>
            </header>

            <Switch>
                <Route path="/about" component={AboutView} />
                <Route path="/services" component={ServicesView} />
            </Switch>

            <nav className="mobile-nav d-lg-none" style={{ visibility: showNavMenu ? 'visible' : 'hidden', opacity: showNavMenu ? 1 : 0 }}>
                <ul>
                    <li className={activeLinkStyle('/')}>
                        <NavLink to="">Home</NavLink>
                    </li>
                    <li className={activeLinkStyle('/about')}>
                        <NavLink to="/about">About</NavLink>
                    </li>                    
                </ul>
            </nav>

            <div className="mobile-nav-overly" style={{ display: showNavMenu ? 'block' : 'none' }}></div>
        </>
    );
}

export default App;
