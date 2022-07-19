import React from 'react';
import Navegation from '../../components/navbar/navbar';
import Hero from '../../components/hero/hero';
import Info from '../../components/info/info';
import Footer from '../../components/footer/footer';


const Home = () => {
  return (
    <>
      <Navegation />
      <Hero />
      <Info />
      <Footer />
    </>
   
  )
}

export default Home;