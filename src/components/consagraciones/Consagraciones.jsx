

import './consagraciones.css'

import { useState } from "react";




export default function Consagraciones() {


     const[displayState, setDisplayState]=useState('1')
       const[displayState2, setDisplayState2]=useState('5')



	return(
			<>
				
   			

<h4 className='t1'>¿Qué tiene de Especial esta Consagración?</h4>
<p className='texto1'>
Es la única recomendada por los papas.<br /> (Numeral 48 Redentoris Mater). Por lo que como Movimiento Laical y/o grupo somos también difusores de una consagración<br />
 que ya es patrimonio de nuestra Iglesia católica Universal,<br />
  San Juan Pablo Segundo fue Canonizado viviendo esta espiritualidad<br />
  y digamos que la espiritualidad que logro la Santidad de San Juan Pablo II, <br />
  fue precisamente esta consagración Total a Jesús Por Medio de María,<br />
   de ahí el lema apostólico de su papado Totus Tuus María (Todo tuyo María)<br /><br />
Aunque existen varias y diferentes consagraciones, quizás unas de carácter más devocional, está, la de San Luis nos<br />
 lleva especialmente a eso, a la necesidad de la Renovación de los compromisos Bautismales, por lo que para ello<br />
  debemos estar dispuestos a renunciar al mundo, al demonio y a la carne y efectivamente a renunciar a la <br />
  vida de pecado para entregarnos a Jesucristo. Sin embargo, esta consagración de Monfort propone un itinerario<br />
   para realizarla y no solo nos dice, renunciar a esta vida de pecado; sino que le dice, Venga que yo lo voy a acompañar<br />
    durante el proceso para que usted pueda hacer estas renuncias y esta entrega a Jesucristo y propone el periodo de 33 días <br />
    para realizar dicho proceso de consagración.
<br /><br />Otra característica propia de esta devoción, es que cuenta con un proceso de preparación serio,<br />
 el mismo San Luis María Grignion de Monfort dice en su libro del Tratado de la verdadera Devoción<br />
  (libro en el cual se basa toda la consagración) en sus numerales 227 al 230, lo siguiente : quienes deseen abrazar<br />
   esta devoción particular, dedicaran 12 días para vaciarse del espíritu del mundo, donde trabajaremos ese espíritu mundano<br />
    que es contrario al de Jesucristo y 3 semanas para llenarse de Jesucristo por medio de la Santísima Virgen María, <br />
    entonces son 12 días donde trabajaremos en ese espíritu mundano donde es todo lo opuesto al Espíritu de Jesucristo.<br />
    </p>


<h4 className='t1'>Características de esta Consagración</h4>
<hr />

        <div className='buttonsContainer'>
            <button className={displayState === '1' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('1')}>1</button>
            <button className={displayState === '2' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('2')}>2</button>
            <button className={displayState === '3' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('3')}>3</button>

        </div>
            <div className={displayState !== '1' ? 'd-none' : 'displayX'}>    
            <div>
                    <h3>      
                        1.- Consagracion Monfortiana es la renovación de los compromisos bautismales, distinto a una simple devoción.
                    </h3>
            </div>                    
        </div>




        <div className={displayState !== '2' ? 'd-none' : 'displayX'}>
            <div>
                   
                  <h3>
                       2.- Esta recomendada por los papas y es ya patrimonio de nuestra Iglesia católica Universal.
                  </h3>
                  
            </div> 
        </div>


        <div className={displayState !== '3' ? 'd-none' : 'displayX'}>
            <div>
                    <h3>
                        3.- Exije una seria preparación.
                    </h3>
            </div> 
        </div>






<h4 className='t1'>JxM</h4>






  <div className='inicioContainer'>
        <div className='titulo'>
            <h2>Características de esta Consagración</h2>
        </div>


        <div className='buttonsContainer'>
            <button className={displayState === '4' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState2('4')}>4</button>
            <button className={displayState === '5' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState2('5')}>5</button>
            <button className={displayState === '6' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState2('6')}>6</button>

        </div>


{/*//-pulverizadores - espolvoreadores -termonebulizacion*/}
        <div className={displayState2 !== '4' ? 'd-none' : 'displayX'}>
                  
            <div>
                    <h3>      
                        4.- Es Cristocéntrica, María no es el centro, Cristo es el centro, lo que pasa es que allí donde esta Cristo esta María, 
                        y María esta en el corazón de Cristo y por eso es imposible separarlos. Por tanto, si establecemos la solida devoción a 
                        la Santísima Virgen, es solo para establecer mas perfectamente la de Jesucristo y ofrecer un medio Fácil y Seguro para 
                        encontrar al Señor, “Si la devoción a la Santísima Virgen nos apartase de Jesucristo,<br/>
                        habría que rechazarla como ilusión 
                        diabólica, pero como ya se ha demostrado, sucede todo lo contrario, esta devoción nos es necesaria para hallar 
                        perfectamente a Jesucristo y amarlo con ternura y servirlo con fidelidad.<br/>
                        Entonces Cristo es el Centro, pero cuando nos enamoramos de la Virgen ella, solo sabe señalarnos 
                        a Cristo, cuando nos entregamos a María, ella lo único que sabe hacer es llevarnos en sus brazos hasta su hijo. 
                        Como dice San Luis María Grignion de Montfort:<br/> 
                        “María es como el rio que siempre llega al mar, que es Cristo”<br/> 
                        “Si yo digo María, ella dice Jesús”. <br/>
                        "Hagan lo que Él les diga" (Jn 2,1-12)
                    </h3>
            </div>                    
        </div>




        <div className={displayState2 !== '5' ? 'd-none' : 'displayX'}>
            
            <div>
                   
                  <h3>
                        5.- Totalidad de la entrega.
                        Esta consagración exige que entreguemos todo a Jesús por María; no significa que tenemos que ser sacerdotes, ni ser religiosas,
                        ni significa que tendremos que cambiar nuestro Estado de vida; No, lo único que significa es que vamos a asumir de verdad esto<br/>
                        que asumimos en el bautismo, o que dijeron nuestros padrinos en el bautismo por nosotros, le pertenecemos completamente a Cristo.
                        Entonces en la consagración San Luis María Grignion de Monfort nos dice que: “hemos de entregarle a la Santísima Virgen María
                        y por medio de ella a Jesús; nuestro cuerpo, nuestra alma, nuestros bienes interiores, nuestros bienes exteriores, <br/>
                        todo cuanto tenemos y todo cuanto tendremos, de manera que uno se consagra y le dice al Señor, todo es tuyo, encárgate tu,
                        yo voy a seguir administrando los bienes, que tengo pero ya sé que no me pertenecen, ya sé que los voy a utilizar para 
                        extender el reino y voy a dejar de pensar simplemente en mi egoísmo, y voy a empezar a pensar en la extensión del Reino,
                        por eso es tan bella esta Consagración.
                  </h3>
                  
            </div> 
        </div>


        <div className={displayState2 !== '6' ? 'd-none' : 'displayX'}>
            <div>
                    <h3>
                        6.- Unión con Jesús y con María - Nos lleva a vivir estrechamente unido a Jesús por medio de María, en eso consiste finalmente
                        la santidad. La Santidad consiste en unirnos a Jesús, y por esta ocasión lo vamos a hacer por medio de María, 
                        ¿y porque por medio de María?, porque no ha habido creatura que haya estado tan más estrechamente unida a Dios. <br/><br/>
                        Hija del padre de una manera del todo predilecta, porque el padre la escogió para encarnar a su Divino hijo en sus entrañas.
                        ¿Madre del Hijo, quien puede decir que es madre de Dios?, la santísima Virgen es la única creatura que puede decir, <br/><br/>
                        que es madre de Dios. Ella encarno en sus entrañas al Verbo Eterno del Padre. Esposa del Espíritu Santo, titulo devocional
                        y metafórico, dado por varios a santos... el Espíritu Santo descendió sobre Ella. Por medio de Ella es la manera más fácil,
                        corta y segura de llegar a Jesús.
                    </h3>
            </div> 
        </div>


 



    </div>




			</>
		)
}

