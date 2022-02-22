import React from 'react'
import FlashMessage from '../components/FlashMessage'
import HeroSection from '../components/HomeHero/HeroSection'
import Nav from '../components/Nav'

const Home = () => {
  return (
    <div>
        <FlashMessage />
        <Nav />
        <HeroSection />
    </div>
  )
}


export default Home