import AdList from "../components/AdList.jsx";
import Navbar from "../components/Navbar.jsx";

const HomePage = () => {
    return (
        <section className="bg-black-800">
            <Navbar />
            <AdList />
        </section>
    );
};

export default HomePage;
