import React from 'react'
import './form.css'
import {Button} from 'react-bootstrap'
/* Iconos */
import {FaReact} from 'react-icons/fa';
import { Link } from 'wouter';
import { validar, mostrarAlerta } from '../../Data/validacion';
/* Firebase */
import firebaseApp from '../../services/Firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp)


/* Component */
const Form = ({ btnText, register }) => {


  const handlerSubmit = async(e) => {
    e.preventDefault()
    const correo = document.querySelector('#email').value;
    const contraseña = document.querySelector('#password').value;


    if(correo === '' || contraseña === '') {
      mostrarAlerta('🔔 Alguno de los campos está vacío 🔔')
    }
    else {
      /* Validacion Registro */
      if(register) {
        await createUserWithEmailAndPassword(auth, correo, contraseña)
        .then((userCredential) => {

        window.location.assign("/profile")

        })
        .catch((error) => {
          const errorCode = error.code;
          /* const errorMessage = error.message; */
          validar(errorCode)
        });
      }

      /* Validacion Logueo */
      if(!register) {
        await signInWithEmailAndPassword(auth, correo, contraseña)
          .then((userCredential) => {

            window.location.assign("/dashboard")
            
          })
          .catch((error) => {
            const errorCode = error.code;
            /* const errorMessage = error.message; */
            validar(errorCode)

          });
      }

    }
  }


  return (
    <div className='login-container'>
      <div className='bg-circle1'></div>
      <div className='bg-circle2'></div>

      <div className="form-container">
        <a href="/" className='title-link'>
            <div className='title-container'>
                <h1 className='form-title'>React App</h1>
                <FaReact className='form-icon'/>
            </div>
        </a>
        <form className='form-login' >
            {/* <label htmlFor="name" className={register ? '' : 'desactive'}>Name</label> 
            <input type="text" id="name" className={register ? 'form-input' : 'form-input desactive'} placeholder='Introduce tu nombre' /> */}

            <label htmlFor="email">Email</label>
            <input type="email" id="email" className='form-input'placeholder='Introduce tu email' required />

            <label htmlFor="password">Contraseña</label>
            <input type="password"  id="password" className='form-input'placeholder='Introduce tu contraseña' required />
            <p className="form-info">La contraseña debe tener mínimo 8 caracteres</p>
            <Button className='btn-submit' onClick={handlerSubmit} type='submit' id='btn-submit'>{btnText}</Button>
        </form>
        <div className="form-alert-container">

        </div>
        <h2 className={register ? 'text-register' : 'text-register desactive'}>¿Ya tienes una cuenta? <Link to="/login">Ingresa</Link></h2>
        <h2 className={register ? 'text-register desactive' : 'text-register'}>¿Aún no tienes una cuenta? <Link to="/register">Registrate</Link></h2>
        <h3 className='copyrigth'>copyrigth &copy; react app</h3>
      </div> {/* form-container */}

      <div className="img-container"></div>
    </div> /* login-container */
  )
}

export default Form