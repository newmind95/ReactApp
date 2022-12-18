import { useState } from 'react';
import DonePage from './DonePage';
import './preparepage.css';
import trueblood from '../ASSTETS DONUT SHOP/true_blood.svg';
import sparkles from '../ASSTETS DONUT SHOP/sparkles.svg';

const PreparePage = () => {

  const [redirect, setRedirect] = useState(false);

  // const redct = () => {
  //   console.log(redirect)
  //   setTimeout(() => {
  //     setRedirect(true)
  //     console.log(redirect)
  //   }, 2000)
  // }

  // console.log(redct);

  setTimeout(() => {
    setRedirect(true);
  }, 5000)
 
  return (
    <div>
      {!redirect ?
      <div>
        <div className="prepare-page">
          <img className="spark" src={sparkles} alt="sparkles img" />
          <img className="tr-img" src={trueblood} alt="trueblood img" />
          <div className="title">Preparing...</div>
        </div>
      </div>
      :
        <DonePage />
      }
    </div>
  )
}

export default PreparePage;