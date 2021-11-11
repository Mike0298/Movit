import React from "react";
import Home from "../../pages/Home/Home";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import MovieDetail from "../MovieDetail/MovieDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const PageRouter = (props) => {
    console.log("router", props.movies);
    const { movies } = props;
    return (
        <>
            <Switch>
                <Route path="/sign-up" component={SignUp}></Route>
                <Route path="/sign-in" component={SignIn}></Route>
                <Route
                    path="/movies/movie/:id"
                    component={({ match }) => {
                        return (
                            <MovieDetail
                                detail={movies.movies.find(
                                    (movie) => movie._id === match.params.id
                                )}
                            />
                        );
                    }}
                />
                <Route path="/" component={() => <Home {...props} />}></Route>
            </Switch>
        </>
    );
};

export default PageRouter;
