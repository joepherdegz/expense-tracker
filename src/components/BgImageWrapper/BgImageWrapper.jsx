import React, {useState, useEffect} from "react";
import { Icon } from '../Icon/Icon';
import { randomNumber, randomPercentage } from '../../utils/getRandomNumber';

import css from './BgImageWrapper.module.css'

export const BgImageWrapper = () => {
    
// eslint-disable-next-line
const [currentStep, setCurrentStep] = useState(1);
    const [randomSum, setRandomSum] = useState(0);
  const [randomPercent, setRandomPercent] = useState(0);
  
    
    useEffect(() => {
    setRandomSum(randomNumber());
    setRandomPercent(randomPercentage());
    }, [currentStep]);
    
    return (
       <div className={css.containerImg}>
      <div className={css.containerText}  >
        <div className={css.containerSvg}>
          <Icon name="arrow-up" className={css.icon} size="18" />
        </div>
        <div className={css.containerBalance}>
          <p className={css.text}>Your balance</p>
          <p className={css.balance}>{`$${randomSum}`}</p>
        </div>
        <div className={css.containerPercent}>
          <p className={css.percent}>{`+${randomPercent.toFixed(2)}%`}</p>
        </div>
        <p className={css.dynamicText}></p>
      </div>
    </div>
    )
}
export default BgImageWrapper;