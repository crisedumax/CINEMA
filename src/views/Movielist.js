import React, {useContext} from 'react';
import './MovieList.css';
import {Movie} from "./Movie";
import {useParams} from "react-router-dom";
import {MovieContext} from "../context/MovieContext";

export const Movielist = () => {
    useParams()
    const { movies } = useContext(MovieContext);
    return (
        <div>
            <h2 className="center-text title">ESTRENOS</h2>
            <ul className="movie-container">
                {movies.map((movie, index) => (
                    <Movie
                        key={index}
                        id={movie.id}
                        title={movie.title}
                        overview={movie.overview}
                        duration={movie.duration}
                        genre_ids={movie.genre_ids}
                        original_language={movie.original_language}
                        vote_average={movie.vote_average}
                        poster_path={movie.poster_path}
                    />
                ))}
            </ul>
        </div>
    );
}