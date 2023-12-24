import {useEffect, useState} from "react";

function ListarPeliculas(){
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("../movies.json")
            .then(response => response.json())
            .then(data => {
                setMovies(data)
            })
    }, [])
    return movies
}

export  default  function  Movies(){
    ListarPeliculas()
}