import React from "react";
import CardsList from "../../components/CardsList/CardsList";
import "./Home.css";
import Landing from "../../components/Landing/Landing";
import RandomButton from "../../components/RandomButton/RandomButton";
import DropdownOptions from "../../components/DropdownOptions/DropdownOptions";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = (props) => {
    console.log("Home", props);

    return (
        <div className="home-container">
            <div className="home-wrapper">
                {/* <RandomButton></RandomButton> */}
                <Landing></Landing>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "28px",
                    }}
                >
                    <DropdownOptions />
                    <SearchBar />
                </div>
                <CardsList {...props}></CardsList>
            </div>
        </div>
    );
};

export default Home;
