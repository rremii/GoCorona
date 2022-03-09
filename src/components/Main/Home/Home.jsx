import React from 'react';
import css from "./Home.module.scss";
import doctor from "../../../images/doctor.png";
import playBtn from "../../../images/playBtn.svg";

const Home = () => {
    return <div className={css.home__container}>
        <div className={css.textBlock}>
            <h1 className={css.mainText}>Take care of yours family’s <span>health.</span></h1>
            <h2 className={css.text}>All in one destination for COVID-19 health queries. Consult 10,000+ health
                workers about your concerns.</h2>
            <button className={css.getStarted}>GET STARTED</button>
        </div>
        <div className={css.doctorPic}>
            <img src={doctor} alt=""/>
        </div>
        <div className={css.whatchVideo_cont}>
            <div className={css.whatchVideo}>
                <img src={playBtn} alt=""/>
                <div className={css.whatchVideo__textContent}>
                    <h1>Stay safe with GoCorona</h1>
                    <h2>Watch Video</h2>
                </div>
            </div>
        </div>
    </div>
};

export default Home;