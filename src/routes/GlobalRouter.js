import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
import NotFound from '../views/NotFound';
import {Header} from "../components/Header";
import {Movielist} from "../views/Movielist";
import {MovieDetails} from "../views/MovieDetails";
import {Footer} from "../components/Footer";
import Loading from "../components/Loading";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/movielist" element={<Layout><Movielist /></Layout>} />
                <Route path="/Loading" element={<Loading />} />
                <Route path="/MovieDetails/:movieID" element={<Layout><MovieDetails /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default GlobalRouter;
