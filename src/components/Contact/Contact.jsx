import './Contact.css';
import React from 'react';
import { SectionTitle } from '../SectionTitle';

export const Contact = () => {
    return (
        <section id='contact'>
            <SectionTitle title='Contact' />
            <div className='contact__ctn'>
                <p className='contact__intro'>I'm open to new opportunities. Just send me an email, and I'll try my best to respond quickly.</p>
                <a className='contact__email' href='mailto:khanh.do1610@gmail.com' rel='noopener noreferrer' target='_blank'>Email me</a>
            </div>
        </section>
    )
}