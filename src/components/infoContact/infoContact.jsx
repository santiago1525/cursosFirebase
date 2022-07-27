import React from 'react'
import './infoContact.css'
import { mostrarAlerta } from '../../Data/validacion';

const contactar = (e) => {

  e.preventDefault();

  const formulario = document.querySelector('.contact-form-container');
  const nombre = document.querySelector('#nameContact').value;
  const email = document.querySelector('#emailContact').value;
  const mensaje = document.querySelector('#msg').value;

  if(nombre === '' || email === '' || mensaje === '') {
    mostrarAlerta('🔔 Alguno de los campos está vacío 🔔', '.form-alert-container')
  }
  else {
    mostrarAlerta('Enviado correctamente ✅', '.form-alert-container')
    formulario.reset();
  }
}

const Contacto = () => {
  return (
      <div className='contact-container'>
          <h3 className='contact-title'>Contáctanos aquí:</h3>
          <form className='contact-form-container'>
            <div className="input-container">
              <label htmlFor="nameContact">Nombre</label>
              <input type="text" id="nameContact" placeholder='Ingresa tu nombre'/>
            </div>
            <div className="input-container">
              <label htmlFor="emailContact">Email</label>
              <input type="email" id="emailContact" placeholder='Ingresa tu correo'/>
            </div>
            <div className="input-container">
              <label htmlFor="msg">Mensaje</label>
              <textarea id="msg" cols="25" rows="5"></textarea>
            </div>
            <button onClick={contactar}>Ponerse en Contacto</button>
          </form>
          <div className="form-alert-container">

        </div>
      </div>
    
  )
}

export default 
Contacto