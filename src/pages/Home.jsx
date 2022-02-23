import React from 'react'
import DailyHalach from '../components/DailyHalach'
import DailyZman from '../components/DailyZman'
import Events from '../components/Events'
import FlashMessage from '../components/FlashMessage'
import Footer from '../components/Footer'
import HeroSection from '../components/HomeHero/HeroSection'
import Nav from '../components/Nav'
import Publishings from '../components/Publishings'

const Home = () => {
  return (
    <div>
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