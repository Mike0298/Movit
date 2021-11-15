import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchMovies } from "./redux/actions/movieAction";
import Navbar from "./components/NavBar/NavBar";
import PageRouter from "./components/Routers/PageRouter";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        console.log("state", state);
        return state;
    });

    useEffect(() => {
        dispatch(actFetchMovies());
    }, [dispatch]);

    return (
        <div className="container grid-wrapper">
            <Router>
                <ScrollToTop></ScrollToTop>
                <Navbar {...state.user}></Navbar>
                <PageRouter movies={state.movie} user={state.user}></PageRouter>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
