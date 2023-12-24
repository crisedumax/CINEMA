import React, {useContext, useEffect, useState} from 'react';
import GlobalRouter from "./routes/GlobalRouter";
import {MovieContext} from "./context/MovieContext";
import {useMovies} from "./hooks/useMovies";
import {Movielist} from "./views/Movielist";
import {MovieDetails} from "./views/MovieDetails";
function App() {
    const movies = useMovies();
    return (
        <MovieContext.Provider value={{movies}}>
            <GlobalRouter></GlobalRouter>
        </MovieContext.Provider>
    );
}

export default App;
