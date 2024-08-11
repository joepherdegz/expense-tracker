import React from "react";
import css from './Logo.module.css';
import icon from '../images/icon.png';


const Logo = () => {
    return (
    <div className={css.mainlogo}>
            <img className={css.logo} src={icon} alt=''></img>
            <p>EXPENSETRACKER</p>
    </div>
    )
}
export default Logo;