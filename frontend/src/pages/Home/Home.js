import React from "react";
import CardsList from "../../components/CardsList/CardsList";
import "./Home.css";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

const override = css`
    display: block;
    margin: 0 auto;
`;

const Home = (props) => {
    console.log("Home", props);
    const { movies } = props;

    return (
        <div className="home">
            {/* {movies.loading && (
                <HashLoader
                    css={override}
                    loading={true}
                    size={150}
                    color={"#7959ec"}
                />
            )} */}
            {/* <HashLoader
                css={override}
                loading={true}
                size={150}
                color={"#7959ec"}
            /> */}

            <CardsList movies={movies.movies}></CardsList>
        </div>
    );
};

export default Home;
