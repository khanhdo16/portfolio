import './Main.css';
import React, { useState, useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Scroll } from '../Icons';

export const Main = () => {
    const isTablet = useMediaQuery({minWidth: '768px', maxWidth: '1199.9px'});
    const isDesktop = useMediaQuery({minWidth: '1200px'});
    
    const [scrollPercentage, setScrollPercentage] = useState(0);
    

    const updateScroll = () => {
        const main = document.querySelector('#main');
        if(!main) return;

        const { clientHeight: screenHeight } = document.documentElement;
        const { top, height } = main.getBoundingClientRect();
    
        const scrollPercentage = (top / (screenHeight - height)) * 2;

        if(scrollPercentage < 0) return setScrollPercentage(0);
        if(scrollPercentage > 0.5) return setScrollPercentage(1);
        if(0.5 > scrollPercentage && scrollPercentage > 0) return setScrollPercentage(scrollPercentage);
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);

        return () => window.removeEventListener('scroll', updateScroll);
    })

    const adaptedValue = useCallback((initValue, multiplier = 1) => {
        if(initValue == null) return 0;
        if(initValue === 0) return (scrollPercentage * multiplier);
        return initValue + (Math.abs(initValue) * (scrollPercentage * multiplier));
    }, [scrollPercentage]);

    if(isDesktop) {
        return (
            <section id='main'>
                <span className='main__firstname' style={{'--transform-firstname': `translate(${-1 * adaptedValue(-15, 1.5)}rem, -${adaptedValue(0, 6)}rem) scale(${scrollPercentage === 1 ? 0.8 : 1})`}}>KAY</span>
                <span className='main__lastname' style={{'--transform-lastname': `translate(${adaptedValue(-15, 1.5)}rem, ${adaptedValue(0, 6)}rem) scale(${scrollPercentage === 1 ? 0.8 : 1})`}}>DO</span>
                <span className='main__intro' style={{opacity: scrollPercentage === 1 ? 1 : 0}}>stunning webs are my things</span>
            </section>
        )
    }

    if(isTablet) {
        return (
            <section id='main'>
                <span className='main__firstname' style={{'--transform-firstname': `translate(${-1 * adaptedValue(-10, 1.5)}rem, -${adaptedValue(0, 4)}rem) scale(${scrollPercentage === 1 ? 0.8 : 1})`}}>KAY</span>
                <span className='main__lastname' style={{'--transform-lastname': `translate(${adaptedValue(-10, 1.5)}rem, ${adaptedValue(0, 4)}rem) scale(${scrollPercentage === 1 ? 0.8 : 1})`}}>DO</span>
                <span className='main__intro' style={{opacity: scrollPercentage === 1 ? 1 : 0}}>stunning webs are my things</span>
            </section>
        )
    }

    return (
        <section id='main'>
            <span className='main__firstname' style={{'--transform-firstname': `translate(0, ${scrollPercentage === 1 ? -1 * adaptedValue(0, 2) : 22.5}rem) scale(${scrollPercentage === 1 ? 1 : 1.3}) rotate(${scrollPercentage === 1 ? '0' : '-90deg'})`}}>KAY</span>
            <span className='main__lastname' style={{'--transform-lastname': `translate(0, ${scrollPercentage === 1 ? adaptedValue(0, 2) : -27.5}rem) scale(${scrollPercentage === 1 ? 1 : 1.3}) rotate(${scrollPercentage === 1 ? '0' : '-90deg'})`}}>DO</span>
            <span className='main__intro' style={{opacity: scrollPercentage === 1 ? 1 : 0}}>stunning webs are my things</span>
            <span className='main__scroll'>SCROLL DOWN <Scroll /></span>
        </section>
    )
}