import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import Testimonials from '../views/Testimonial'
import WorkProcess from '../views/Workprocess'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Testimonials/>
      <WorkProcess/>
      <Footer/>
    </div>
  )
}

export default Homepage
