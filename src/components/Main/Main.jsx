import React from "react";
import "./Main.module.scss";
import css from "./Main.module.scss";
import doctor from './../../images/doctor.png'
import playBtn from './../../images/playBtn.svg'
import Home from "./Home/Home";
import StaySafe from "./StaySafe/StaySafe";
import Talkto from "./Talkto/Talkto";
import Healthcare from "./Healthcare/Healthcare";

const Main = () => {
    return <main>
        <Home/>
        <StaySafe/>
        <Talkto/>
        <Healthcare/>
    </main>;
};

export default Main;
