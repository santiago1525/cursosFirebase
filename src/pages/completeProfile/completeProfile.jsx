import React, {useState} from 'react'
import './completeProfile.css'
import {GrFormNext} from 'react-icons/gr'
/* Firebase */
import firebaseApp from '../../services/Firebase'
import {getFirestore, collection, addDoc,} from 'firebase/firestore'
const db = getFirestore(firebaseApp)


/* Component */
const CompleteProfile = () => {

    const valorInicial = {
        name: '',
        study: '',
        age: 0,
        document: ""
      }
    
      const [user, setUser] = useState(valorInicial); 
    
       const capturarInput = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]:value}) 
        
      }

      const omitir = async(e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'usuarios'), {
              valorInicial
             
            })
            console.log('Realizado exitosamente');
          } catch (error) {
            console.log(error);
          }
          window.location.assign('/dashboard')
      }
    
      const guardarDatos = async(e) => {
        e.preventDefault()
        /* console.log(user); */
        try {
          await addDoc(collection(db, 'usuarios'), {
            ...user 
           
          })
          console.log('Realizado exitosamente');
        } catch (error) {
          console.log(error);
        }
        window.location.assign('/dashboard')
      }


  return (
    <div className="profile-container">
        <div className="profile-form-container">
            <h1>Completa tu perfil</h1>
            <form className='profile-form'>
                <label htmlFor="name">Nombre</label>
                <input type="text" id='name-profile' name='name' onChange={capturarInput}/>
                <label htmlFor="study">Profesion</label>
                <input type="text" id='study-profile' name='study' onChange={capturarInput}/>
                <label htmlFor="age">Edad</label>
                <input type="number" id="age-profile" name='age' onChange={capturarInput}/>
                <label htmlFor="document">Documento</label>
                <input type="text" id="document-profile" name='document' onChange={capturarInput}/>
            </form>
            <div className="buttons-profile-container">
                <button className='button-profile' onClick={omitir}>Omitir</button>
                <button className='button-profile' onClick={guardarDatos}>Siguiente <GrFormNext /></button>
            </div> 
        </div>
        <div className="profile-img-container">
        </div>
    </div>
  )
}

export default CompleteProfile