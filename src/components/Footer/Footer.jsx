import React from "react";
import css from './Footer.module.scss'
import google from './../../images/google.svg'
import AppStore from './../../images/appStore.svg'

const Footer = () => {
    return <footer>
        <div className={css.Footer__container}>
            <img src={google} alt=""/>
            <img src={AppStore} alt=""/>
        </div>
    </footer>;
};

export default Footer;
