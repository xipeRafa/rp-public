

import "./css/App.css";
// import whatsapp from "./imgs/descargar.png";




import Footer from "./components/footer/Footer";


import Header from "./components/header/Header";



// import Contacto from "./components/contacto/Contacto";



function App() {

  return (
    <div className="containerApp">



      <Header />



      {/*  <a href="https://api.whatsapp.com/send?phone=5216621942066&text=¡Hola, Me Comunico desde su Página Web!" target='_blank'>
        <img className='whatsapp' src={whatsapp} alt="whatsapp" />
      </a>*/}

      
      <Footer />
    </div>
  );
}

export default App;
