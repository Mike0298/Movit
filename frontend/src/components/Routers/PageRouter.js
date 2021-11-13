import React from "react";
import Home from "../../pages/Home/Home";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import MovieDetail from "../../pages/MovieDetail/MovieDetail";
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
                    path="/movies/:id"
                    component={({ match }) => {
                        return (
                            <MovieDetail
                                key={match.params.id}
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
