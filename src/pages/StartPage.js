import './startpage.css';
import MenuPage from './MenuPage';
import Title from '../components/Title';
import { useState } from 'react';
import trueblood from '../ASSTETS DONUT SHOP/true_blood.svg';
import unicorndust from "../ASSTETS DONUT SHOP/unicorn_dust.svg";
import sparkles from '../ASSTETS DONUT SHOP/sparkles.svg';

const StartPage = () => {
  
  const [hasChange, setHasChange] = useState(false);

  const handleClick = () => {
    console.log('clicked')
    setHasChange(!hasChange);
  }

  return (
    <div>
      {hasChange ? 
        <MenuPage /> :
        <div className="start-page">
          <img className="img-spark" src={sparkles} alt="sparkles img" />
          <img className="img-uni" src={unicorndust} alt="unicorndust donut" />
          <img className="img-trueblood" src={trueblood} alt="trueblood donut" />
          <Title cls={"p1"} name={"THE"} />
          <Title cls={"p2"} name={"DONUT SHOP"} />
          <button className="start-btn" onClick={handleClick}>START</button>
        </div>
      }
    </div>
  )

}

export default StartPage;
