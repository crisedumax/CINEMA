import React from 'react';
import useRedirection from "../hooks/useRedirection";
import { Spinner } from 'reactstrap';
import './Loading.css'
//import 'bootstrap/dist/css/bootstrap.min.css'; //le intentè usar pero me daño todos mis estilos
import logo from '../images/loading.gif'
function Loading() {

    useRedirection("/Movielist", 500);

    return (
        <div className="divPadre">
            <div className="divHijo">
                <img src={logo} alt="loading..." className="spinnerReactStrap"/>
            </div>
        </div>
    );
}

export default Loading;