import React, {useState} from "react";
import css from "./Header.module.scss";
import logo from './../../images/Logo.svg'
import logo2 from './../../images/logo2.svg'

const Header = () => {
    let [isActive, setActive] = useState(false)
    return (
        <header>
            <div className={css.header__container}>
                <div className={css.logo}>
                    <img className={css.logo1} src={logo} alt=""/>
                    <img className={css.logo2} src={logo2} alt=""/>
                </div>

                <div className={[css.menu_cont, isActive ? css.menu_active : ''].join(' ')}>
                    <div className={css.menu}>
                        <button>HOME</button>
                        <button>FEATURES</button>
                        <button>SUPPORT</button>
                        <button>CONTACT US</button>
                    </div>
                </div>
                <div className={css.download}>
                    <button>DOWNLOAD</button>
                </div>
                <div onClick={() => setActive(!isActive)} className={css.burger}>
                    <span></span><span></span><span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
