import {useEffect, useState} from "react";
import moviesInitial from "../movies.json";
export const useMovies = () => {

    const [movies, setMovies] = useState([]);

      useEffect(() => {
       setTimeout(() => {
                setMovies(moviesInitial);
        }, 500);
    }, []);

    return movies;
}