import './header.css'
import mom from "../../imgs/mom.webp";
import large from "../../imgs/large.webp";
// import Banner from '../banner/Banner'

export default function Header() {


 return ( <> 

  <header>
      <h2>MOVIMIENTO LAICAL A JESÚS POR MARÍA</h2>

      <span>JxM</span>
      <br />  
      <br />

      <p>En este tiempo de gran confusión y perdida de la vida cristiana, el Espíritu Santo ha suscitado en la Iglesia católica las consagraciones.</p>


      <div className="sombra imgsHeader">
            <img className="imgsHeader1" src={large} />
            <img className="imgsHeader2" src={mom} />
      </div>

            {/*<Banner />*/}
      <br /> 

            
     
      <p>Las consagraciones, son obra del Espíritu Santo</p> 

      <p>que mediante distintas devociones provocan en los fieles una conversión, y 
      nos ofrecen un camino de vuelta hacia la eterna y definitiva Consagración Bautismal.</p>

      <p>Existen muchas devociones que llevan a realizar dichas consagraciones para renovar la Consagración Bautismal de los fieles.</p>

      <p>En la Arquidiócesis de Hermosillo, nuestro Movimiento Laical a Jesús por María cuenta con autorización y reconocimiento de nuestro Arzobispo.</p>



  </header>

      </> )
 }


