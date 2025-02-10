import "./grupo.css";
import { useState } from "react";
// import Tecnicas from '../tecnicas/Tecnicas'

import g3 from "../../imgs/gallery/3.png";


import g1 from "../../imgs/gallery/1.webp";



import g5 from "../../imgs/gallery/2.webp";
import g6 from "../../imgs/gallery/3.webp";













export default function Grupo() {


  const[boolState, setBoolState]=useState(true)


  const[galleryState, setGalleryState]=useState(1)


  return (<>

  {boolState ?

    <p className="servicios1">
     <h4>¿Porque Consagrarse a Jesús a través de María?</h4>
          La esencia de esta Consagración es realizar la Renovación personal y consciente de nuestros compromisos Bautismales, <br />
          que es la consagración por excelencia. Todo bautizado ha sido elegido por Dios para ser sus hijos por medio de la gracia, <br />
          debido a la redención de Cristo, en el Concilio Vaticano II, en la Constitución Lumen Gentium, Numeral 10, se nos dice que:<br />
          <b>”Nosotros Hemos Sido Consagrados por el Bautismo, Regenerados por la Gracia”</b><br /> <br />
          Luego entonces la consagración... 
     
      <p className={boolState ? 'leerMas':'d-none'} onClick={()=>setBoolState(!boolState)}>Leer Mas..</p>
    </p>




    :
        <p className="servicios1">
          
          La esencia de esta Consagración es realizar la Renovación personal y consciente de nuestros compromisos Bautismales, <br />
          que es la consagración por excelencia. Todo bautizado ha sido elegido por Dios para ser sus hijos por medio de la gracia, <br />
          debido a la redención de Cristo, en el Concilio Vaticano II, en la Constitución Lumen Gentium, Numeral 10, se nos dice que:<br />
          <b>”Nosotros Hemos Sido Consagrados por el Bautismo, Regenerados por la Gracia”</b><br /> <br />
          Luego entonces la consagración en sí misma es la renovación de los compromisos Bautismales y esto significa que esta <br />
          consagración no es que te añada compromisos por el hecho de consagrarte a Jesús por María; si no que más bien te ayuda a <br />
          vivirlos de una manera más consciente y adecuada, pues los compromisos ya los tenemos solo por el hecho de ser Bautizados.<br />
          A lo que esta consagración te lleva es, más bien a darnos cuenta, tener la conciencia, las herramientas y los elementos para<br />
          poder vivir adecuadamente estos compromisos bautismales.<br /><br />
          Consagrarse = Renovar nuestros compromisos Bautismales buscando ser coherentes en nuestras vidas como bautizados.<br />
          San Luis María Grignion de Monfort en su libro el Tratado de la verdadera Devoción, que es el libro base para realizar <br />
          este proceso de preparación de esta consagración, nos establece con toda claridad que esta consagración tiene como <br />
          fundamento el bautismo <br /><br />
          Numeral 120... “La Perfecta Consagración a Jesucristo; es por lo mismo una Perfecta y <br />
          total Consagración de sí Mismo a la Santísima Virgen María”.<br />
      



 
      <p className={!boolState ? 'leerMas':'d-none'} onClick={()=>{setBoolState(!boolState), window.scrollTo(0,0)}}>Leer Menos..</p>
      </p>}

<hr />

      {/*<Tecnicas />*/}

 <img className='g4' src={g3} />




       <div className={galleryState !== 1 ? 'd-none' : 'servicioLabel'}>Imagen 1</div>
           <div className={galleryState !== 2 ? 'd-none' : 'servicioLabel'}>Imagen 2</div>
          <div className={galleryState !== 3 ? 'd-none' : 'servicioLabel'}>Imagen 3</div>
             {/*  <div className={galleryState !== 4 ? 'd-none' : 'servicioLabel'}>Servicio Contra Viudas Negras</div>
              <div className={galleryState !== 5 ? 'd-none' : 'servicioLabel'}>Servicio Contra Ruedores</div>
               <div className={galleryState !== 6 ? 'd-none' : 'servicioLabel'}>Servicio Contra Abejas</div>
                <div className={galleryState !== 7 ? 'd-none' : 'servicioLabel'}>Servicio Contra Alacranes</div>
                 <div className={galleryState !== 8 ? 'd-none' : 'servicioLabel'}>Servicio Contra Termitas</div>
                  <div className={galleryState !== 9 ? 'd-none' : 'servicioLabel'}>Servicio Contra Arañas</div>
                   <div className={galleryState !== 10 ? 'd-none' : 'servicioLabel'}>Servicio Contra Plagas</div>
                    <div className={galleryState !== 11 ? 'd-none' : 'servicioLabel'}>Servicio Contra Termitas</div>
                     <div className={galleryState !== 12 ? 'd-none' : 'servicioLabel'}>Servicio Contra Termitas</div>*/}


      <div className="gallery">
          <button onClick={()=>{if(galleryState>1){setGalleryState(galleryState - 1)}}}>◀ </button>


          <img className={galleryState !== 1 ? 'd-none' : ''} src={g1} />




          <img className={galleryState !== 2 ? 'd-none' : ''} src={g5} />
          <img className={galleryState !== 3 ? 'd-none' : ''} src={g6} />
{/*
          <img className={galleryState !== 4 ? 'd-none' : ''} src={g8} />

          <img className={galleryState !== 5 ? 'd-none' : ''} src={g9} />
          <img className={galleryState !== 6 ? 'd-none' : ''} src={g10} />
          <img className={galleryState !== 7 ? 'd-none' : ''} src={g11} />
          <img className={galleryState !== 8 ? 'd-none' : ''} src={g12} />

          <img className={galleryState !== 9 ? 'd-none' : ''} src={g13} />
          <img className={galleryState !== 10 ? 'd-none' : ''} src={g14} />
          <img className={galleryState !== 11 ? 'd-none' : ''} src={g15} />
          <img className={galleryState !== 12 ? 'd-none' : ''} src={g16} />*/}



             <button onClick={()=>{if(galleryState<3){
                                               setGalleryState(galleryState + 1)
                                      }else{
                                
                                         setGalleryState(1)
                                      }

                                    }}> ▶ </button>
      </div>





      <div className='barras'>
        <div className={galleryState !== 1 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 2 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 3 ? 'claro' : 'oscuro'}></div>
{/*        <div className={galleryState !== 4 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 5 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 6 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 7 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 8 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 9 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 10 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 11 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 12 ? 'claro' : 'oscuro'}></div>*/}
      </div>


    

  </>);
}
