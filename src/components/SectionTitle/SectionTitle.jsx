import './SectionTitle.css'
import React from 'react';

export const SectionTitle = ({title}) => {
    return title ? <h2 className='section-title'>{title.toUpperCase()}</h2> : null
}