import React from 'react';
import Form from '../../components/form/form';
import './register.css'

const Register = () => {
  return (
    <div>
        <Form
        btnText={'Registrar'}
        register={true} />
    </div>
  )
}

export default Register