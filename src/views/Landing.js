    import React from 'react';
    import {Link} from "react-router-dom";
    import useRedirection from "../hooks/useRedirection";
    import "./Landing.css";

    function Landing() {
        useRedirection("/MovieList", 100000);
        return (
            <div className="titleLanding backgroundImage backgroundImage">
                <h1>CINEMA UNIR</h1>
                <span>Christian Reyes A.</span><br/><br/>
                <span>Quito - Ecuador</span><br/><br/>
                <span>22-Dic-2023</span><br/><br/><br/><br/><br/><br/>
                <Link to={"/Loading"}>
                    <button className="btn-primary title" >ENTRAR</button><br/><br/>
                </Link>
            </div>
        );
    }

    export default Landing;