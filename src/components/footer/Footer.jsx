import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            {/* <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">Indica Filme</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Inicio</Link>
                        <Link to="/">Contato</Link>
                        <Link to="/">Termos de serviços</Link>
                        <Link to="/">Sobre nós</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Politica de privacidade</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Você precisa assistir</Link>
                        <Link to="/">Mais recentes</Link>
                        <Link to="/">Melhores notas</Link>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Footer;
