import './menu.css';
import { useState } from 'react';
import skyshaped from '../ASSTETS DONUT SHOP/sky_shaped.svg';
import marblemagic from '../ASSTETS DONUT SHOP/marble_magic.svg';
import trueblood from '../ASSTETS DONUT SHOP/true_blood.svg';
import unicorndust from '../ASSTETS DONUT SHOP/unicorn_dust.svg';
import PaymentPage from './PaymentPage';
import Title from '../components/Title';

const MenuPage = () => {

  const [hasChange, setHasChange] = useState(true);

  const handleClick = () => {
    setHasChange(!hasChange); 
  }

  return (
    <div>
      {hasChange ?
      <div className="menu-page">
        <Title cls={"p3"} name={"THE"} />
        <Title cls={"p4"} name={"MENU"} />
        <div className="sky-shaped" onClick={handleClick}>SKY SHAPED</div>
        <img 
          className="sky-img" 
          src={skyshaped} 
          alt="sky-shaped donut" 
          onClick={handleClick}
        />
        <div className="marble-magic" onClick={handleClick}>MARBLE MAGIC</div>
        <img 
          className="mm-img" 
          src={marblemagic} 
          alt="marble donut" 
          onClick={handleClick}
        />
        <div className="true-blood" onClick={handleClick}>TRUE BLOOD</div>
        <img
          className="truebl-img"
          src={trueblood}
          alt="true-blood donut"
          onClick={handleClick}
        />
          <div className="uni-dust" onClick={handleClick}>UNICORN DUST</div>
        <img
          className="unidust-img"
          src={unicorndust}
          alt="unicorn-dust donut"
          onClick={handleClick}
        />
      </div>
      :
        <PaymentPage />
      }
    </div>
  );
}

export default MenuPage;
