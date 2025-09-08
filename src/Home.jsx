import React from 'react'
import Navbar from './Navbar'
import OurProjects from './Ourprojects'
import WhoWeAre from './Whoweare'
import Hero from './Hero'
import OurServices from '../Oursevices'
import About from './About'

const Home = () => {
  return (
    <>
    
    <Hero/>
    <About/>
    <WhoWeAre/>
    <OurServices/>
    <OurProjects/>
    
    </>
  )
}

export default Home