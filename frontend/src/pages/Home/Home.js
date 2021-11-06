import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsList from "../../components/CardsList/CardsList";
import { actFetchMovies } from "../../redux/actions/movieAction";
import "./Home.css";

const Home = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => {
        console.log("state", state.movie);
        return state.movie.movies;
    });

    useEffect(() => {
        dispatch(actFetchMovies());
    }, [dispatch]);

    return (
        <div className="home">
            <CardsList movies={movies}></CardsList>
        </div>
    );
};

export default Home;
