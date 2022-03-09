import React from 'react';
import css from './StaySafe.module.scss'
import doctors from './../../../images/second main.png'

const StaySafe = () => {
    return <div className={css.StaySafe__container}>
        <img className={css.doctors} src={doctors} alt=""/>
        <div className={css.textContent}>
            <h1 className={css.title}>Stay safe with Go<span>Corona.</span></h1>
            <p className={css.text}>24x7 Support and user friendly mobile platform to bring healthcare to your
                fingertips. Signup and be a
                part of the new health culture.</p>
            <button className={css.features}>Features</button>
        </div>
    </div>
};

export default StaySafe;