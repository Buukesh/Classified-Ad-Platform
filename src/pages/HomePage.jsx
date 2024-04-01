import AdList from "../components/AdList.jsx";
import NavBar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";

const HomePage = () => {
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
