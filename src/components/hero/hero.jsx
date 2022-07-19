import React from 'react';
import './hero.css';
import { Button } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='image-container'>
            <img src={require('../../images/hero.webp')} alt="hero"/>
        </div> {/* image-container */}

        <div className='text-container'>
            <h1>Esta es una aplicación <span>React</span><FaReact className='icon'/></h1>
            <h2>Inicia sesión para ver su contenido</h2>
            <Button className='btn-hero'><a href='/register'>Empieza ya</a></Button>
        </div>  {/* text-container */}
    </div> /* hero-container */
  )
}

export default Hero