import React from 'react'
import ImageBanner from '../components/ImageBanner';
import { DescriptionPanel } from '../components/DescriptionPanel';
import './About.scss';

function About() {
    return (
        <>
            <ImageBanner />
            <div className='about_container'>
                <DescriptionPanel />
                <DescriptionPanel />
                <DescriptionPanel />
                <DescriptionPanel />
            </div>
        </>

    )
}

export default About