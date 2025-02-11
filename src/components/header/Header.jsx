import './header.css'
import mom from "../../imgs/mom.webp";
import large from "../../imgs/large.webp";
// import Banner from '../banner/Banner'

import { useState } from "react";




export default function Header() {



     const [isActive, setIsActive] = useState(true);

 return ( <> 

  <header>

      <span>Respalder Parroquial</span>
      <br />  
      <br />

      <p>Solicita tus Credenciales para Usar Respalder Parroquial </p>
      <p>Un Servicio de Respaldo y Ordenamiento de los Documentos de la Parroquia </p>
      <p>Simplifica la Gestión Administrativa de los Sacramentos Religiosos</p>



      <input type='button' value='Solicitar Cuenta' onClick={() => setIsActive(!isActive)}/>

      <p>Galeria de Planes</p>


      <div className="sombra imgsHeader">
            <img className="imgsHeader1" src={large} />
            <img className="imgsHeader2" src={mom} />
      </div>

            {/*<Banner />*/}
      <br /> 

     
      <form className={isActive ? "contactForm outModal" : "contactForm inModal"}>

        <input type='button' value='Cancelar ✘' className='btnCerrar' onClick={() => setIsActive(!isActive)}/>

        <h3 className='tituloEnviar'>ENVIAR SOLICITUD DE CUENTA</h3>

        <input type='text' placeholder='Nombre'/>
        <input type='text' placeholder='Nombre de Parroquia'/>
        <input type='text' placeholder='Dirección'/>

        <input type='text' placeholder='Correo'/>
        <input type='text' placeholder='# de contacto (opcional)' />

        <input type='submit' className='btnEnviar' value='Enviar' />

      </form>



  </header>

      </> )
 }


