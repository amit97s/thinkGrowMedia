import React from 'react'
// import HeroSection from './Hero'
import { About, Footer, Header, Hero, Portfolio, Services, Testimonials, Whyus } from '../components/index';

function Home() {
  return (
   <>
   <Hero/>
   <Services/>
   <About/>
   <Portfolio/>
   <Testimonials/>
   <Whyus/>
   </>
  )
}

export default Home