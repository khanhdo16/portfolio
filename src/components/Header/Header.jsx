import './Header.css';
import React, { useRef, useEffect } from 'react';

export const Header = () => {
    const prevPageOffset = useRef(window.pageYOffset);

    const getScrollDirection = () => {
        const curPageOffset = window.pageYOffset;
        const scrollDown = prevPageOffset.current < curPageOffset;
        const header = document.querySelector('header');

        header.style.top = scrollDown ? `-${header.offsetHeight}px` : '0';

        prevPageOffset.current = curPageOffset;
    }

    useEffect(() => {
        window.addEventListener('scroll', getScrollDirection);

        return () => window.removeEventListener('scroll', getScrollDirection);
    })
    
    return (
        <header>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
        </header>
    )
}