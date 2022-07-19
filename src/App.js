import React, { useState } /* {useState} */ from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* AOS animaciones */
import AOS from "aos";
import 'aos/dist/aos.css'; 
/* Pages */
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Dashboard from './pages/dashboard/dashboard';
import Courses from './pages/courses/courses';
import Certifications from './pages/certifications/certifications';
import CompleteProfile from './pages/completeProfile/completeProfile';
import { Route } from 'wouter';
/* Firebase */
import firebaseApp from './services/Firebase';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(firebaseApp)

function App() {

  AOS.init();

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioLogueado) => {
    if(usuarioLogueado) {
      setUsuario(usuarioLogueado)
    }
    else {
      setUsuario(null)
    }
  })

  return (
    <div className="App">
      
      {usuario ? 
        <>
        <Route 
            path='/dashboard'
            component={Dashboard} />
          <Route 
              path={'/courses'}
              component={Courses}
            />
          <Route 
            path='/certifications'
            component={Certifications} />
          <Route
            path='/'
            component={Home} />
          <Route 
              path='/login'
              component={Dashboard} />
          
             <Route 
             path='/register'
             component={Dashboard} />
          <Route 
            path='/profile'
            component={CompleteProfile} />
        </>
        :
        <>
        <Route
          path='/'
          component={Home} />
        <Route 
          path='/login'
          component={Login} />
        <Route 
          path='/register'
          component={Register} />
        </>
        
        }
      
    </div>
  );
}

export default App;
