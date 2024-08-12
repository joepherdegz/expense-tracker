import React from "react";
import css from './Header.module.css';
import icon from '../images/icon.png';


const Logo = () => {
    return (
        <div className={css.mainlogo}>
            <button className={css.logoBtn}>
                <img className={css.logo} src={icon} alt=''></img>
                <p>EXPENSETRACKER</p>
            </button>
        </div>
    )
}
export default Logo;