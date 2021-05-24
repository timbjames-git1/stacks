import React from 'react';
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
        return location.pathname === link
            ? 'active'
            : '';
    };

    return (
        <>
            <header id="header" className={navClass}>
                <div className="container">

                    <h1><a href="index.html">Tim James</a></h1>
                    <h2>I'm a proud father, technical Manager, skilled Principle Engineer, and a passionate Lead Developer from Glasgow Scotland.</h2>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className={activeLinkStyle('')}>
                                <NavLink to="">Home</NavLink>
                            </li>
                            <li className={activeLinkStyle('/about')}>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            
                            <li className={activeLinkStyle('/services')}>
                                <NavLink to="/services">Services</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="social-links">
                        <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                        <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                        <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="icofont-skype"></i></a>
                        <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                    </div>

                </div>
            </header>

            <Switch>
                <Route path="/about" component={AboutView} />
                <Route path="/services" component={ServicesView} />
            </Switch>
        </>
    );
}

export default App;
