import './Footer.css';
import React from 'react';
import { Github, LinkedIn } from '../Icons';

export const Footer = () => {
    return (
        <footer>
            <ul className='footer__social-list'>
                <li><a href='https://github.com/khanhdo16'><Github/></a></li>
                <li><a href='https://www.linkedin.com/in/khanhdo16/'><LinkedIn /></a></li>
            </ul>
            <span>Designed by Khanh Do</span>
        </footer>
    )
}