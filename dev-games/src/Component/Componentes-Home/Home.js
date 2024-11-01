import React from "react";
import { NavLink } from "react-router-dom";
import Carrousel from "./HomeCarrousel";
import HomeLancamentos from "./HomeLancamentos";
import HomeAlls from "./HomeDestaque";

const Home = () => {
    return (
        <NavLink to="/">
            <div>
                <Carrousel/>
                <HomeLancamentos/>
                <HomeAlls/>
            </div>
        </NavLink>
    )
}

export default Home;