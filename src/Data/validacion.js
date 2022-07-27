function mostrarAlerta(mensaje, ubicacion) {
    const nuevaAlerta  = document.createElement('H2');
    nuevaAlerta.textContent = mensaje;
    nuevaAlerta.classList.add('form-alert');
    const alerta = document.querySelector(ubicacion);
    alerta.appendChild(nuevaAlerta);

    setTimeout(() => {
      nuevaAlerta.remove()
    }, 5000);
  }

  
function validar(error) {
    if(error === 'auth/invalid-email') {
      mostrarAlerta('🔔 El email no existe o es incorrecto, intente nuevamente 🔔', '.form-alert-container')
    }
    else if (error === 'auth/wrong-password') {
      mostrarAlerta('🔔 Contraseña incorrecta, intente nuevamente 🔔', '.form-alert-container')
    }
    else if (error === 'auth/weak-password') {
      mostrarAlerta('🔔 La contraseña debe ser de mínimo 8 caracteres 🔔', '.form-alert-container')
    }
    else if (error === 'auth/email-already-in-use') {
      mostrarAlerta('🔔 Este email ya está en uso, intenta con uno nuevo 🔔', '.form-alert-container')
    }
    else if (error === 'auth/user-not-found') {
        mostrarAlerta('🔔 Usuario no encontrado 🔔', '.form-alert-container')
    }
    else  {
      mostrarAlerta('🔔 Hubo un error, intenta nuevamente 🔔', '.form-alert-container')
    }
  }

export {validar, mostrarAlerta}