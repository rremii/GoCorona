import React from 'react';
import css from './Healthcare.module.scss'
import card1 from './../../../images/card1.svg'
import card2 from './../../../images/card2.svg'
import card3 from './../../../images/card3.svg'

const Healthcare = () => {
    return <div className={css.Healthcare__container}>
        <div className={css.textBox}>
            <div className={css.title}><span>Healthcare</span> at your Fingertips.</div>
            <div className={css.text}>Bringing premium healthcare features to your fingertips. User friendly mobile
                platform
                to bring healthcare to your fingertips. Signup and be a part of the new health culture.
            </div>
        </div>
        <div className={css.cards_cont}>
            <div className={css.card}>
                <span className={css.square1}/>
                <span className={css.square2}/>
                <img src={card1} alt=""/>
                <h1>Symptom Checker</h1>
                <h2>Check if you are infected by COVID-19 with our Symptom Checker</h2>
            </div>
            <div className={css.card}>
                <span className={css.square3}/>
                <img src={card2} alt=""/>
                <h1>24x7 Medical support</h1>
                <h2>Consult with 10,000+ health workers about your concerns.</h2>
            </div>
            <div className={css.card}>
                <span className={css.square4}/>
                <img src={card3} alt=""/>
                <h1>Conditions</h1>
                <h2>Bringing premium healthcare features to your fingertips.</h2>
            </div>
        </div>
    </div>
};

export default Healthcare;