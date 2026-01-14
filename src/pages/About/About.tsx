import React from 'react';
import AboutHero from '../../components/AboutHero/AboutHero';
import PhilosophySection from '../../components/PhilosophySection/PhilosophySection';
import CoreValues from '../../components/CoreValues/CoreValues';
import ProcessSteps from '../../components/ProcessSteps/ProcessSteps';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import AboutCTA from '../../components/AboutCTA/AboutCTA';

export default function About() {
    return (
        <div className="about-page">
            <AboutHero />
            <PhilosophySection />
            <CoreValues />
            <ProcessSteps />
            <ImageGallery />
            <AboutCTA />
        </div>
    );
}