import React from 'react'
import './certifications.css'
import '../dashboard/dashboard.css'
import Sidebar from '../../components/sidebar/sidebar';
import NavBoard from '../../components/navBoard/navBoard';
import {FaSadCry} from 'react-icons/fa'
import {Link} from 'wouter'

const Certifications = () => {
  return (
    <div className='dashboard-container'>
      <div className="dashboard-nav">
        <Sidebar />
      </div>
        <div className='dashboard-content'>
            <NavBoard 
            title={'Certificaciones'}/>

        <div className="certi-container">
            <FaSadCry className='certi-icon'/>
            <h1 className='certi-title'>Parece que no tienes certificaciones todavia, inicia un curso ahora y realiza la evaluación para obtener una</h1>
            <Link to="/courses" className='certi-link'>Realizar curso</Link>  
        </div>
      </div> 
    </div>
  )
}

export default Certifications