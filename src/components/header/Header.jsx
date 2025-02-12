import './header.css'

import title from "../../imgs/title.webp";
import titleMobil from "../../imgs/titleMobil.webp";

import { useState, useEffect } from "react";

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



     const [isActiveModal, setIsActiveModal] = useState(true);

     const [state, setState] = useState({
      name:'',
      parroquia:'',
      direccion:'',
      correo:'',
      numero:''
     })



     const {name,parroquia,direccion,correo,numero}=state



     const handlerState=(e)=>{
        setState({...state, [e.target.name]:e.target.value})
     }








    const [windowWidthState, setWindowWidthState] = useState(true);

    const windowWidth = window.innerWidth;

    useEffect(()=>{
         if (windowWidth < 999) {
            setWindowWidthState(false);
        }
    },[windowWidthState])
       
  



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
        setIsActiveModal(!isActiveModal)
    }









 return ( <> 
     {windowWidthState ? <img className='sombra' src={title}  /> : <img className='sombra' src={titleMobil}  />}
  <header>

     

      <br />  

  

      <p>Solicita tus Credenciales para Usar Respalder Parroquial Gratis !!</p>
      <p>Un Servicio de Respaldo y Ordenamiento de los Documentos de la Parroquia </p>
      <p>Simplifica la Gestión Administrativa de los Documentos Religiosos</p>



      <input type='button' className='btnEnviar' value='Solicitar Cuenta Gratis' onClick={() => setIsActiveModal(!isActiveModal)}/>
 <br /> <br />

      <lite-youtube videoid="ZNJ9fFANRa8"></lite-youtube>

 <br /> <br />

      <h2 className='galeriaDePlanes'>GALERIA DE PLANES</h2> 
        <br />   <br /> 
     
      <PriceGallery />



      <input type='button' className='btnEnviar' value='Solicitar Cuenta Gratis' onClick={() => setIsActiveModal(!isActiveModal)}/>



    
    





      <form onSubmit={onSubmit} className={isActiveModal ? "contactForm outModal" : "contactForm inModal "}>

        <input type='button' value='Cancelar ✘' className='btnCerrar' onClick={() => setIsActiveModal(!isActiveModal)}/>

        <h3 className='tituloEnviar'>ENVIAR SOLICITUD DE CUENTA</h3>

        <input type='text' placeholder='Nombre' name='name' onChange={(e)=>handlerState(e)} />
        <input type='text' placeholder='Nombre de La Parroquia' name='parroquia' onChange={(e)=>handlerState(e)}/>
        <input type='text' placeholder='Dirección' name='direccion' onChange={(e)=>handlerState(e)}/>

        <input type='email' placeholder='@ Correo' name='correo' onChange={(e)=>handlerState(e)}/>
        <input type='number' placeholder='# Numero de Contacto (opcional)' name='numero' onChange={(e)=>handlerState(e)}/>

        <input type='submit' className='btnEnviar' value='Enviar' />

      </form>



  </header>

  {windowWidthState ? <img className='sombra' src={title}  /> : <img className='sombra' src={titleMobil}  />}

      </> )
 }


