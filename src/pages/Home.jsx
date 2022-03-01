import React from 'react'
import InfoOverlay from '../components/InfoOverlay';
import FlashMessage from '../components/FlashMessage';
import Nav from '../components/Nav';
import HeroSection from '../components/HomeHero/HeroSection';
import DailyZman from '../components/DailyZman';
import Publishings from '../components/Publishings';
import DailyHalach from '../components/DailyHalach';
import Events from '../components/Events';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <InfoOverlay />
        <FlashMessage />
        <Nav />
        <HeroSection />
        <DailyZman />
        <Publishings />
        <DailyHalach />
        <Events />
        <Footer />
    </div>
  )
}


export default Home