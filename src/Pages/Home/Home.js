import React from 'react'
import Banner from './Banner'
import Info from './Info'
import Services from './Services'

import Testimonial from './Testimonial'
import ContactUs from './ContactUs'
import Appoint from './Appoint'
import Footer from '../Shared/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <Appoint />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  )
};

export default Home
