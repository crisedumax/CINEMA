import React from "react";
import Styles from "./Movie.css";
import {Link} from "react-router-dom";
export const Movie = ({ id, title, overview, duration, genre_ids, original_language, vote_average, poster_path}) => {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + poster_path;
    return (
        <div className="card">
            <img className="ImageMovie" src={imgUrl} alt={title}/>
            <h3>{title}</h3>
            <p>Idioma Original: {original_language}</p>
            <p>Subtitulos: "es"</p>
            <p>Puntuacion: {vote_average}</p>
            <p>Duraciòn: {duration}</p>
            <Link to={`/MovieDetails/${id}`}>
                <button className="buttonSeleccion">Seleccionar</button>
            </Link>
        </div>
    );
}