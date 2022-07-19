function mostrarAlerta(mensaje) {
    const nuevaAlerta  = document.createElement('H2');
    nuevaAlerta.textContent = mensaje;
    nuevaAlerta.classList.add('form-alert');
    const alerta = document.querySelector('.form-alert-container');
    alerta.appendChild(nuevaAlerta);

    setTimeout(() => {
      nuevaAlerta.remove()
    }, 5000);
  }

  
function validar(error) {
    if(error === 'auth/invalid-email') {
      mostrarAlerta('🔔 El email no existe o es incorrecto, intente nuevamente 🔔')
    }
    else if (error === 'auth/wrong-password') {
      mostrarAlerta('🔔 Contraseña incorrecta, intente nuevamente 🔔')
    }
    else if (error === 'auth/weak-password') {
      mostrarAlerta('🔔 La contraseña debe ser de mínimo 8 caracteres 🔔')
    }
    else if (error === 'auth/email-already-in-use') {
      mostrarAlerta('🔔 Este email ya está en uso, intenta con uno nuevo 🔔')
    }
    else if (error === 'auth/user-not-found') {
        mostrarAlerta('🔔 Usuario no encontrado 🔔')
    }
    else  {
      mostrarAlerta('🔔 Hubo un error, intenta nuevamente 🔔')
    }
  }

export {validar, mostrarAlerta}