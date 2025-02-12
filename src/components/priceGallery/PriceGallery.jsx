import "./priceGallery.css";

export default function PriceGallery() {
  return (
    <div className="snip1214">
      <div className="plan featured">
        <h3 className="plan-title">1 mes</h3>
        <div className="plan-cost">
          <span className="plan-price">$123</span>
          {/*<span className="plan-type">/ Mensual</span>*/}
        </div>
        <ul className="plan-features">
          <li>
            <i className="ion-checkmark"> </i>Primer Semana Gratis
          </li>
          <li>
            <i className="ion-checkmark"> </i>Tech Support
          </li>
          <li>
            <i className="ion-checkmark transparent"> </i> 
          </li>
          <li>
            <i className="ion-checkmark transparent"> </i>
          </li>
          <li>
            <i className="ion-checkmark transparent"> </i>
          </li>
          <li>
            <i className="ion-checkmark transparent"> </i>
          </li>
        </ul>
        <div className="plan-select">
          <a href="">Solicitar</a>
        </div>
      </div>
      <div className="plan">
        <h3 className="plan-title">1 Año</h3>
        <div className="plan-cost">
          <span className="plan-price">$1,476</span>
          {/*<span className="plan-type">/ Anual</span>*/}
        </div>
        <ul className="plan-features">
          <li>
            <i className="ion-checkmark"> </i> Primer Mes Gratis
          </li>
          <li>
            <i className="ion-checkmark"> </i> $123 / Mensual
          </li>
          <li>
            <i className="ion-checkmark "> </i> Tech Support
          </li>
          <li>
            <i className="ion-checkmark transparent"> </i>
          </li>
           <li>
            <i className="ion-checkmark transparent"> </i>
          </li>
          <li>
            <i className="ion-checkmark transparent"> </i>
          </li>
        </ul>
        <div className="plan-select">
          <a href="">Solicitar</a>
        </div>
      </div>
      <div className="plan featured">
        <h3 className="plan-title">super</h3>
        <div className="plan-cost">
          <span className="plan-price">$4,400</span>
          {/*<span className="plan-type"> /1er Año Gratis</span>*/}
        </div>
        <ul className="plan-features">
          <li>
            <i className="ion-checkmark"> </i>  <b>4 AÑOS</b>
          </li>
          <li>
            <i className="ion-checkmark"> </i> <b>PRIMER AÑO GRATIS</b>
          </li>
          <li>
            <i className="ion-checkmark"> </i>$1,100 Anual
          </li>
          <li>
            <i className="ion-checkmark"> </i>$91.6 Mensual  
          </li>
          <li>
            <i className="ion-checkmark"> </i>Tech Support
          </li>
          <li>
            <i className="ion-checkmark"> </i>5 AÑOS EN TU PRIMER PAGO
          </li>
        </ul>
        <div className="plan-select">
          <a href="">Solicitar</a>
        </div>
      </div>
      <div className="plan">
        <h3 className="plan-title">Ultra</h3>
        <div className="plan-cost">
          <span className="plan-price">$12,000</span>
          {/*<span className="plan-type">/ Monthly</span>*/}
        </div>
        <ul className="plan-features">
          <li>
            <i className="ion-checkmark"> </i> <b>12 AÑOS</b>
          </li>
          <li>
            <i className="ion-checkmark"> </i>PRIMER AÑO GRATIS
          </li>
          <li>
            <i className="ion-checkmark"> </i>$1,000 Anual
          </li>
          <li>
            <i className="ion-checkmark"> </i>$83.3 Mensual 
          </li>
          <li>
            <i className="ion-checkmark"> </i>Tech Support
          </li>
          <li>
            <i className="ion-checkmark"> </i>13 AÑOS EN TU PRIMER PAGO
          </li>
        </ul>
        <div className="plan-select">
          <a href="">Solicitar</a>
        </div>
      </div>
    </div>
  );
}
