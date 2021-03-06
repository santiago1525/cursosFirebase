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
      mostrarAlerta('๐ El email no existe o es incorrecto, intente nuevamente ๐')
    }
    else if (error === 'auth/wrong-password') {
      mostrarAlerta('๐ Contraseรฑa incorrecta, intente nuevamente ๐')
    }
    else if (error === 'auth/weak-password') {
      mostrarAlerta('๐ La contraseรฑa debe ser de mรญnimo 8 caracteres ๐')
    }
    else if (error === 'auth/email-already-in-use') {
      mostrarAlerta('๐ Este email ya estรก en uso, intenta con uno nuevo ๐')
    }
    else if (error === 'auth/user-not-found') {
        mostrarAlerta('๐ Usuario no encontrado ๐')
    }
    else  {
      mostrarAlerta('๐ Hubo un error, intenta nuevamente ๐')
    }
  }

export {validar, mostrarAlerta}