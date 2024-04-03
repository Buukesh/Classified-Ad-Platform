import { useState } from "react";

import AdList from "../components/AdList.jsx";
import NavBar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import useAuthCheck from "../hooks/useAuthCheck.js";

const HomePage = () => {
    useAuthCheck();

    // Used to pass SearchBar data to AdList using props.
    const [searchInput, setSearchInput] = useState({
        type: "ALL",
        content: "",
    });

    return (
        <section className="bg-black-800">
            <NavBar />
            <div className="my-10"></div>
            <SearchBar setSearchInput={setSearchInput} />
            <div className="my-10"></div>
            <AdList searchInput={searchInput} />
        </section>
    );
};

export default HomePage;
