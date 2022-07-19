import React, { useState, useEffect } from 'react';
import './modal.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FaEdit} from 'react-icons/fa'
/* Firebase */
import firebaseApp from '../../services/Firebase'
import {getFirestore, collection, getDoc } from 'firebase/firestore'
const db = getFirestore(firebaseApp)


/* Component */
function ModalInfo({text, title}) {
  
  /* Variables de estado */
  const [show, setShow] = useState(false);
  const [datos, setDatos] = useState([])

  /* Funciones */
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const capturarInput = (e) => {
    
    
  }

  const guardarDatos = async(e) => {
    e.preventDefault()
    /* console.log(user); */
    
    handleClose()
  }

  /* Funcion para rerendizar datos */
  useEffect(() => {
    const getLista = async() => {
        try {
          const querySnapshot = await getDoc(collection(db, 'usuarios'))
          const docs = []
          querySnapshot.forEach(doc => {
            docs.push({...doc.data(), id:doc.id})
          });
          setDatos(docs)

        } catch (error) {
          console.log(error);
        }
    }
    getLista()
  }, [datos]);

  return (
    <>
      <div onClick={handleShow}>
        {text}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className='form-modal'>
              <div className='modal-img-container'>
                 <div className='modal-img'></div>
                 <FaEdit className='modal-img-icon'/>
              </div>
                <label htmlFor="name">Nombre</label>
                <input type="text" id='name' name='name' onChange={capturarInput}/>
                <label htmlFor="study">Profesion</label>
                <input type="text" id='study' name='study' onChange={capturarInput}/>
                <label htmlFor="age">Edad</label>
                <input type="number" id="age" name='age' onChange={capturarInput}/>
                <label htmlFor="document">Documento</label>
                <input type="text" id="document" name='document' onChange={capturarInput}/>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={guardarDatos}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalInfo;