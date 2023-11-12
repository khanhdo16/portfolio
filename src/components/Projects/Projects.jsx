import './Projects.css';
import React from 'react';
import { SectionTitle } from '../SectionTitle';
import { ExternalLink, Github } from '../Icons';

export const Projects = () => {
    return (
        <section id='projects'>
            <SectionTitle title='Projects' />
            <div className='projects__list'>
                <div className='projects-item'>
                    <div className='projects__screenshot'>
                        <div className='taskbar'>
                            <img className='taskbar-controls' src='/img/controls.svg' alt='' />
                        </div>
                        <img src='//i.imgur.com/VyCuszo.png' alt='' />
                    </div>
                    <div className='projects__detail'>
                        <h3 className='projects-item__title'>YPhim</h3>
                        <div className='projects-item__description'>
                            <h3 className='projects-item__tagline'>A WEB APP TO STREAM MOVIES, TV SHOWS AND READ WEB-NOVELS.</h3>
                            <ul className='projects-item__tech-list'>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                                <li>Redis</li>
                                <li>Imgur API</li>
                            </ul>
                            <div className='projects-item__links'>
                                <a href='#'><ExternalLink /></a>
                                <a href='https://github.com/khanhdo16/YPhim'><Github /></a>
                            </div>
                            <p className='project-items__outline'>
                                <strong>USER FEATURES:</strong> Browse latest movies, tv shows and web-novels. Search movies, tv shows and web-novels instantly. View ranking based on views and ratings. Comment and discuss with other users via Facebook Comments.
                            </p>
                            <p className='project-items__outline'>
                                <strong>ADMIN FEATURES:</strong> Manage contents by a built-in CMS. Set featured movies or tv shows. Promote featured Facebook post, and Facebook page. Send push notification when updating.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}