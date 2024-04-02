import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import AdList from "../components/AdList.jsx";
import NavBar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // this runs when homepage loads
        const token = localStorage.getItem("token");
        if (!token) {
            // if token not set (not logged in), go to signup
            navigate("/signup");
        }
    }, [navigate]);

    return (
        <section className="bg-black-800">
            <NavBar />
            <div className="my-10"></div>
            <SearchBar />
            <div className="my-10"></div>
            <AdList />
        </section>
    );
};

export default HomePage;
