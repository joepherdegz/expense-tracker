import React from "react";
import BgImage from '../images/Rectangle 1.png'
import css from './BgImageWrapper.module.css'

const BgImageWrapper = () => {
    return (
        <div>
            <img className={css.bigImgWrapper}  src={BgImage} alt="" />
        </div>
    )
}
export default BgImageWrapper;