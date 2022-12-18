import { useState } from 'react';
import './donepage.css';
import StartPage from './StartPage';
import trueblood from '../ASSTETS DONUT SHOP/true_blood.svg';
import Title from '../components/Title';

const DonePage = () => {

  const [hasChange, setHasChange] = useState(false);

  const handleClick = () => {
    setHasChange(!hasChange);
  }

  return (
    <div>
        {!hasChange ?
        <div className="donepage">
          <img className="tr-bl" src={trueblood} alt="trueblood img" /> 
          <Title cls="done-title" name={"You can now come and pick up your amazing Donut!"} />
          <button className="done-btn" onClick={handleClick}>Done</button>
        </div>
          : 
          <StartPage />
        }
    </div>
  )
}

export default DonePage;