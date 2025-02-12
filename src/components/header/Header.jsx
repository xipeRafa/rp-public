import './header.css'


import { useState } from "react";

import PriceGallery from '../priceGallery/PriceGallery'

import { firestoreDB } from '../../firebase/firebaseConfig';

import { collection, addDoc } from 'firebase/firestore'



export default function Header() {



    const saveDemos = (postBody) => {
        console.log(postBody)

        const postCollectionDemos = collection(firestoreDB, 'Demos');

        addDoc(postCollectionDemos, postBody)
            .then((resp) => {
                console.log(resp)
            })
            .catch((error) => { 
                console.log('saveDemos Error')
                console.log(error)
            })

    }



     const [isActive, setIsActive] = useState(true);

     const [state, setState] = useState({
      name:'',
      parroquia:'',
      direccion:'',
      correo:'',
      numero:''
     })

     console.log(state)


     const {name,parroquia,direccion,correo,numero}=state



     const handlerState=(e)=>{
        setState({...state, [e.target.name]:e.target.value})
     }



    const onSubmit=(e)=>{
      e.preventDefault();

        state.idDate=Date.now()
        saveDemos(state)
        setState({
      name:'',
      parroquia:'',
      direccion:'',
      correo:'',
      numero:''
     })
        setIsActive(!isActive)
    }






 return ( <> 

  <header>

      <span>Respalder Parroquial</span>
      <br />  
      <br />

      <p>Solicita tus Credenciales para Usar Respalder Parroquial Gratis</p>
      <p>Un Servicio de Respaldo y Ordenamiento de los Documentos de la Parroquia </p>
      <p>Simplifica la Gestión Administrativa de los Sacramentos Religiosos</p>



      <input type='button' className='btnEnviar' value='Solicitar Cuenta Gratis' onClick={() => setIsActive(!isActive)}/>

      <h2>GALERIA DE PLANES</h2> 
        <br />   <br /> 
     
            <PriceGallery />


  <br />   <br /> 
            <input type='button' className='btnEnviar' value='Solicitar Cuenta Gratis' onClick={() => setIsActive(!isActive)}/>


    





      <form onSubmit={onSubmit} className={isActive ? "contactForm outModal" : "contactForm inModal "}>

        <input type='button' value='Cancelar ✘' className='btnCerrar' onClick={() => setIsActive(!isActive)}/>

        <h3 className='tituloEnviar'>ENVIAR SOLICITUD DE CUENTA</h3>

        <input type='text' placeholder='Nombre' name='name' onChange={(e)=>handlerState(e)} />
        <input type='text' placeholder='Nombre de La Parroquia' name='parroquia' onChange={(e)=>handlerState(e)}/>
        <input type='text' placeholder='Dirección' name='direccion' onChange={(e)=>handlerState(e)}/>

        <input type='email' placeholder='@ Correo' name='correo' onChange={(e)=>handlerState(e)}/>
        <input type='number' placeholder='# Numero de Contacto (opcional)' name='numero' onChange={(e)=>handlerState(e)}/>

        <input type='submit' className='btnEnviar' value='Enviar' />

      </form>



  </header>

      </> )
 }


