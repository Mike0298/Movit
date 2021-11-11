import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchMovies } from "./redux/actions/movieAction";
import Navbar from "./components/NavBar/NavBar";
import PageRouter from "./components/Routers/PageRouter";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    const dispatch = useDispatch();
    const movies = useSelector((state) => {
        console.log("state", state.movie);
        return state.movie;
    });

    useEffect(() => {
        dispatch(actFetchMovies());
    }, [dispatch]);

    return (
        <div className="container flex-wrapper">
            <Router>
                <Navbar></Navbar>
                <PageRouter movies={movies}></PageRouter>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
