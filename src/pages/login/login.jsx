import React from 'react'
import './login.css';

import Form from '../../components/form/form';

const Login = () => {

  return (
    <Form 
      btnText={'Ingresa'}
      register={false} />
  )
}

export default Login