import React from 'react';
import './dashboard.css';
import Sidebar from '../../components/sidebar/sidebar';
import NavBoard from '../../components/navBoard/navBoard';
import {MdWavingHand, MdOutlineWeb} from 'react-icons/md';
import {FaServer} from 'react-icons/fa';


const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className="dashboard-nav">
        <Sidebar />
      </div>
      <div className='dashboard-content'>
        <NavBoard 
        title={'Dashboard'}/>

        {/* SECTION */}
        <h1 className='dashboard-welcome'><MdWavingHand className='dashboard-welcome_icon'/>  Hola! Bienvenido a los cursos gratuitos de programación que brindamos para ti</h1>
        <section className="dashboard-diference">
          <div className='diference-card_front' data-aos="zoom-in-right">
              <h2>Frontend developer</h2>
              <MdOutlineWeb className='diference-icon' />
              <p>Front End es la parte de una aplicación que interactúa con los usuarios, es conocida como el lado del cliente.</p>
              <a href="https://descubrecomunicacion.com/que-es-backend-y-frontend/" className='diference-link'>Más información aquí</a>
          </div>
          <p className='vs'>VS</p>
          <div className='diference-card_back' data-aos="zoom-in-left">
            <h2>Backend developer</h2>
            <FaServer className='diference-icon' />
            <p>El back end del sitio web consiste en un servidor, una aplicación y una base de datos para el proceso de la información.</p>
            <a href="https://descubrecomunicacion.com/que-es-backend-y-frontend/" className='diference-link'>Más información aquí</a>
          </div>
        </section>
      </div> 
      
    </div>
  )
}

export default Dashboard