import './header.css'
import mom from "../../imgs/mom.webp";
import large from "../../imgs/large.webp";


import { useState } from "react";

import PriceGallery from '../priceGallery/PriceGallery'




export default function Header() {



     const [isActive, setIsActive] = useState(true);

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


    





      <form className={isActive ? "contactForm outModal" : "contactForm inModal"}>

        <input type='button' value='Cancelar ✘' className='btnCerrar' onClick={() => setIsActive(!isActive)}/>

        <h3 className='tituloEnviar'>ENVIAR SOLICITUD DE CUENTA</h3>

        <input type='text' placeholder='Nombre'/>
        <input type='text' placeholder='Nombre de La Parroquia'/>
        <input type='text' placeholder='Dirección'/>

        <input type='email' placeholder='Correo'/>
        <input type='text' placeholder='# de Contacto (opcional)' />

        <input type='submit' className='btnEnviar' value='Enviar' />

      </form>



  </header>

      </> )
 }


