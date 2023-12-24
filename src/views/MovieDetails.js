import React, {useContext} from "react";
import {MovieContext} from "../context/MovieContext";
import {useParams} from "react-router-dom";
import './MovieDetails.css';
export const MovieDetails = () => {
    useParams()
    const { movieID } = useParams();
    const { movies } = useContext(MovieContext);
    console.log("Movies:");
    console.log(movieID);
    const found = movies.find((element) => element.id.toString() === movieID);
    console.log("Movie filtrada:");
    console.log(found);
    const imgUrl = "https://image.tmdb.org/t/p/w300" + found.backdrop_path;
    return (
        <div>
            <h2 className="center-text title">ESTRENOS</h2>
            <ul className="">
                <div>
                    <p className="alignContent"><img className="ImageMovieS" src={imgUrl} alt={found.title}/></p>
                    <p className="titleDescription">{found.title}</p>
                    <p className="paragraphDescription">{found.overview}</p>
                </div>
            </ul>
        </div>
    );
}
export default MovieDetails;