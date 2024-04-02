import AdList from "../components/AdList.jsx";
import NavBar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import useAuthCheck from "../hooks/useAuthCheck.js";

const HomePage = () => {
    useAuthCheck();

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
