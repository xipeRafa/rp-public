import './cenaculos.css'
import { useState } from "react";
// import img1 from './1.png'
// import img2 from './2.png'
// import img3 from './3.png'
// import img4 from './4.png'



export default function Cenaculos() {


  const[displayState, setDisplayState]=useState('1')
  const[displayState2, setDisplayState2]=useState('5')

  return (<>
    <div className='inicioContainer'>
        <div className='titulo'>
            <h4>JxM</h4>
            <h2>Titulo 1</h2>
        </div>


        <div className='buttonsContainer'>
            <button className={displayState === '1' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('1')}>info 1</button>
            <button className={displayState === '2' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('2')}>info 2</button>
            <button className={displayState === '3' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('3')}>info 3</button>

        </div>


{/*//-pulverizadores - espolvoreadores -termonebulizacion*/}
        <div className={displayState !== '1' ? 'd-none' : 'displayX'}>
                  
            <div>
                    <h3>      
                        texto1<br />
                       texto
                        <br /> informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion 
                    </h3>
            </div>                    
        </div>




        <div className={displayState !== '2' ? 'd-none' : 'displayX'}>
            
            <div>
                   
                  <h3>
                        texto2<br /> info <br /> es como el sistema de aspersión con líquido pero esparce 
                        partículas mucho más finas que forman una especie de nube fría, lo cual le confiere gran poder 
                        de penetración. Ideal para el control de insectos voladores.
                  </h3>
                  
            </div> 
        </div>


        <div className={displayState !== '3' ? 'd-none' : 'displayX'}>
         
            <div>
                  
                  <h3>
                    texto 3<br />  informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion 
                 
</h3>
            </div> 
        </div>


 



    </div>



















    <div className='inicioContainer'>
        <div className='titulo'>
            <h2>Titulo 2</h2>
        </div>


        <div className='buttonsContainer'>
            <button className={displayState === '4' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState2('4')}>info 4</button>
            <button className={displayState === '5' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState2('5')}>info 5</button>
            <button className={displayState === '6' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState2('6')}>info 6</button>

        </div>


{/*//-pulverizadores - espolvoreadores -termonebulizacion*/}
        <div className={displayState2 !== '4' ? 'd-none' : 'displayX'}>
                  
            <div>
                    <h3>      
                        texto4<br />
                       texto
                        <br /> informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion 
                    </h3>
            </div>                    
        </div>




        <div className={displayState2 !== '5' ? 'd-none' : 'displayX'}>
            
            <div>
                   
                  <h3>
                        texto5<br /> info <br /> es como el sistema de aspersión con líquido pero esparce 
                        partículas mucho más finas que forman una especie de nube fría, lo cual le confiere gran poder 
                        de penetración. Ideal para el control de insectos voladores.
                  </h3>
                  
            </div> 
        </div>


        <div className={displayState2 !== '6' ? 'd-none' : 'displayX'}>
         
            <div>
                  
                  <h3>
                    texto 6<br />  informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion 
                 
</h3>
            </div> 
        </div>


 



    </div>
  </>)

  
}

  