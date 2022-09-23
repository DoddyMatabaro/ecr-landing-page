import React from 'react'
import  FAQ  from '../components/FAQ'
import Choose from '../components/Choose'
import Contact from '../components/Contact'
import Dimension from '../components/Dimension'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Presentation from '../components/Presentation'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <div className='w-screen grid grid-rows-10 grid-flow-row'>
        <Header/>
        <Hero/>
        <Choose/>
        <Dimension/>
        <Projects/>
        <Presentation/>
        <Testimonials/>
        <FAQ/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home