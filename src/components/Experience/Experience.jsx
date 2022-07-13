import './Experience.css';
import React from 'react';
import { SectionTitle } from '../SectionTitle';

export const Experience = () => {
    return (
        <section id='experience'>
            <SectionTitle title='Experience' />
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
                            <h3>A WEB APP TO STREAM MOVIES, TV SHOWS AND READ WEB-NOVELS.</h3>
                            <p className='project-items__outline'>
                               <strong>USER FEATURES:</strong> Browse latest movies, tv shows and web-novels. Search movies, tv shows and web-novels instantly. View ranking based on views and ratings. Comment and discuss with other users via Facebook Comments. 
                            </p>
                            <p className='project-items__outline'>
                                <strong>ADMIN FEATURES:</strong> Manage contents by a built-in CMS. Set featured movies or tv shows. Promote featured Facebook post, and Facebook page. Send push notification when updating.
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}