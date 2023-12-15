import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/HeroSection'
import Blog from '../components/Blog'

const Home = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <Blog/>
    </>
  )
}

export default Home