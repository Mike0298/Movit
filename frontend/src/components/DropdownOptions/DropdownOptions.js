import React, { useState } from "react";
import Select from "react-select";

const options = [
    { value: "action", label: "Action" },
    { value: "adventure", label: "Adventure" },
    { value: "animation", label: "Animation" },
    { value: "crime", label: "Crime" },
    { value: "comedy", label: "Comedy" },
    { value: "drama", label: "Drama" },
    { value: "fantasy", label: "Fantasy" },
    { value: "thriller", label: "Thriller" },
    { value: "sci-fi", label: "Sci-fi" },
];

const customStyles = {
    menuList: (provided, state) => ({
        ...provided,
        color: "#7975ec",
        fontSize: "18px",
    }),

    clearIndicator: (provided) => ({
        ...provided,
        background: "#7975ec",
    }),

    indicatorsContainer: (provided) => ({
        ...provided,
        background: "#7975ec",
    }),

    selectContainer: (provided) => ({
        ...provided,
        outerWidth: "185px",
        innerWidth: "100%",
    }),

    indicatorSeparator: (provided) => ({
        ...provided,
        background: "#2b2d42",
    }),

    multiValue: (provided) => ({
        ...provided,
    }),

    multiValueLabel: (provided) => ({
        ...provided,
        color: "#e9e9eb",
        background: "#7975ec",
        padding: "5px",
        borderRadius: "auto 0 0 auto",
        fontSize: "18px",
    }),

    multiValueRemove: (provided) => ({
        ...provided,
        background: "#7975ec",
        borderRadius: "auto 0 0 auto",
    }),

    placeholder: (provided) => ({
        ...provided,
        color: "#7975ec",
        padding: "5px",
    }),
};

const DropdownOptions = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);
    console.log("dropdown", props);
    return (
        <div style={{ width: "185px" }}>
            <Select
                isClearable={true}
                styles={customStyles}
                closeMenuOnSelect={false}
                // defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isSearchable
                placeholder={"Choose a genre"}
            />
        </div>
    );
};

export default DropdownOptions;
