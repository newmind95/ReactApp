import { useState } from 'react';
import googlepay from '../ASSTETS DONUT SHOP/google-pay.png';
import applepay from '../ASSTETS DONUT SHOP/apple-pay.png';
import skyshaped from '../ASSTETS DONUT SHOP/sky_shaped.svg';
import unicorndust from '../ASSTETS DONUT SHOP/unicorn_dust.svg';
import './payment.css';
import PreparePage from './PreparePage';
import Title from '../components/Title';

const PaymentPage = () => {

  const [hasChange, setHasChange] = useState(true);

  const handleClick = () => {
    setHasChange(!hasChange);
  }

  return (
    <div>
      {hasChange ? 
        <div className="payment">
          <Title cls={"u-title"} name={"You can"} />
          <Title cls={"m-title"} name={"PAY US"} />
          <Title cls={"b-title"} name={"NOW"} />
          <button 
            className="applepay"
            onClick={handleClick}
          >
            <img className="a-pay-img" src={applepay} alt="a-pay img" />
          </button>
          <button 
            className="googlepay"
            onClick={handleClick}
          >
            <img className="g-pay-img" src={googlepay} alt="g-pay img" />
          </button>
          <img className="skyshaped" src={skyshaped} alt="skyshaped donut" />
          <img className="unicorn" src={unicorndust} alt="unicorndust donut" />
        </div> :
      <PreparePage />
      }
    </div>
  );
}

export default PaymentPage;