import React from 'react';
import css from './Talkto.module.scss'

const Talkto = () => {
    return <div className={css.Talkto__container}>
        <div className={css.Info}>
            <span className={css.square}/>
            <span className={css.square}/>
            <span className={css.square}/>
            <div className={css.cell}>
                <h1>2m</h1>
                <h2>Users</h2>
            </div>
            <div className={css.cell}>
                <h1>78</h1>
                <h2>Countries</h2>
            </div>
            <div className={css.cell}>
                <h1>10,000+</h1>
                <h2>Medical experts</h2>
            </div>
        </div>
        <div className={css.content}>
            <h1 className={css.title}>Talk to <span>experts.</span></h1>
            <h2 className={css.text}>Book appointments or submit queries into thousands of forums concerning health
                issues and prevention against noval Corona Virus</h2>
            <button>Features</button>
        </div>
        <div className={css.video}>
            <video src="https://www.youtube.com/watch?v=uBxlf_a0Tes" controls></video>
        </div>
    </div>
};

export default Talkto;