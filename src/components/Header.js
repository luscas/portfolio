import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand logo" href="#">lucas.</a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>

                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link">Início</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">Sobre mim</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">Contato</Link>
                                </li>
                            </ul>

                            <span className="navbar-text" aria-label="Social Links">
                                <a href="http://instagram.com/lucaswcg" target="_blank" title="Instagram"><i className="fab fa-instagram"></i></a>
                                <a href="http://github.com/luscas" target="_blank" title="Github"><i className="fab fa-github"></i></a>
                                <a href="#" target="_blank" title="Linkedin"><i className="fab fa-linkedin-in"></i></a>
                            </span>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
