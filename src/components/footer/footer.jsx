import React from 'react';
import './footer.css';
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='list-container'>
            <ul className="social-container">
                <h1 className='title'>Redes Sociales</h1>
                <li><a href="#instagram"><BsInstagram  className='social-icon'/>Instagram</a></li>
                <li><a href="#facebook"><BsFacebook  className='social-icon'/>Facebook</a></li>
                <li><a href="#linkdn"><BsLinkedin className='social-icon' />Linkedin</a></li>
                <li><a href="#twitter"><BsTwitter  className='social-icon'/>Twitter</a></li>
            </ul> {/* social-container */}
            
            <ul className="politics-container">
                <h1 className='title'>Politicas</h1>
                <li className='politics-link'>politica de cookis</li>
                <li className='politics-link'>politica de privacidad</li>
                <li className='politics-link'>terminos y condiciones</li>
            </ul> {/* politics-container */} 
            
        </div> {/* list-container */}
        <h3 className='derechos'> &copy; 2022 Todos los derechos reservados.</h3>
    </div> /* footer-container */
  )
}

export default Footer