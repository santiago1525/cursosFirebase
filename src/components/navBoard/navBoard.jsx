import React from 'react'
import './navBoard.css'
import { Nav, NavDropdown } from 'react-bootstrap'
import {BiPowerOff} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
/* Firebase */
import firebaseApp from '../../services/Firebase'
import {getAuth, signOut} from 'firebase/auth'
import ModalInfo from '../modal/modal'

const auth = getAuth(firebaseApp)

const NavBoard = ({ title }) => {
  return (
    <div className="navBoard-container">
        <div className="navBoard-title">
            <h1>{title}</h1>
        </div>
        <div className="navBoard-profile">
            <Nav>
                  <NavDropdown title="Perfil" id="basic-nav-dropdown" className='title'>
                    <NavDropdown.Item className='dropdown-container'><AiOutlineUser /><ModalInfo 
                                                                                        text={'Editar Perfil'}
                                                                                        title={'Editar Perfil'}
                    /></NavDropdown.Item>
                    <NavDropdown.Item href="/" className='dropdown-container' onClick={() => signOut(auth)}><BiPowerOff />Cerrar Sesion</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </div>
    </div>    
  )
}

export default NavBoard