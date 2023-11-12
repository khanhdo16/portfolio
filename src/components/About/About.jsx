import './About.css';
import React from 'react';

const Title = () => {
    const title = "About me";

    const TitleRow = () => {
        return <div className='about__title-row'>
            {Array(6).fill(0).map((_, index) => <span key={index}>{title.toUpperCase()}</span>)}
        </div>
    }
    
    return (
        <span className='about__title'>
            {Array(20).fill(0).map((_, index) => <TitleRow key={index} />)}
        </span>
    )
}

export const About = () => {
    const onMouseMove = (e) => {
        const draggable = document.querySelector('.about__text');
        const draggableRect = draggable.getBoundingClientRect();
        const containerRect = document.querySelector('#about').getBoundingClientRect();

        if( (draggableRect.left + e.movementX) > containerRect.left
            && (draggableRect.right + e.movementX) < containerRect.right
            && (draggableRect.top + e.movementY) > containerRect.top
            && (draggableRect.bottom + e.movementY) < containerRect.bottom
        ) {
            const { top, left } = window.getComputedStyle(draggable);

            draggable.style.left = `${parseInt(left) + e.movementX}px`;
            draggable.style.top = `${parseInt(top) + e.movementY}px`;
        }
    }

    const onMouseDown = () => {
        document.querySelector('#about').addEventListener('mousemove', onMouseMove);
    }

    const onMouseUp = () => {
        document.querySelector('#about').removeEventListener('mousemove', onMouseMove);
    }

    return (
        <section id='about' onMouseUp={onMouseUp}>
            <Title />
            <div className='about__content'>
                <div className='about__text'>
                    <div className='taskbar movable' onMouseDown={onMouseDown}>
                        <img className='taskbar-controls' src='/img/controls.svg' alt='' />
                    </div>
                    <p>Hi, my name is Kay. I've always been interested in making webs that work great and look good. Starting by customizing WordPress sites for my relatives, I've progressed a lot since college and throughout projects that I've built.</p>
                    <p>I've had a chance to take an internship at Deakin eSolutions. The job taught me a lot about the career I'm going to take. I find no limits in my technology stack, and I love to evolve my skills as technology grows.</p>
                </div>
                <div className='about__img-ctn'>
                    <div className='taskbar'>
                        <img className='taskbar-controls' src='/img/controls.svg' alt='' />
                    </div>
                    <img className='about__img' src='//i.imgur.com/DOMZgFAl.jpg' alt=''></img>
                    {/* <div className='about__tech'>
                        <img className='about__tech-icon' src="/img/nodejs.svg" alt='Node.js' />
                        <img className='about__tech-icon' src="/img/react.svg" alt='React.js' />
                        <img className='about__tech-icon' src="/img/mongodb.svg" alt='MongoDB' />
                        <img className='about__tech-icon' src="/img/redis.svg" alt='Redis' />
                        <img className='about__tech-icon' src="/img/javascript.svg" alt='Javascript' />
                        <img className='about__tech-icon' src="/img/html5.svg" alt='HTML5' />
                        <img className='about__tech-icon' src="/img/css3.svg" alt='CSS3' />
                    </div> */}
                </div>
            </div>
        </section>
    )
}