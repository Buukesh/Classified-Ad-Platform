import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const NavBar = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const goToMessagesPage = () => {
        navigate("/messages");
    };

    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a href="/">Ad Listings</a>
                        </li>
                        <li>
                            <a href="/">Create Ad Post</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl" href="/">
                <img
                        src="https://www.torontomu.ca/content/dam/brand/global/images/visual-guide/tmu-logo-social-media.jpg"
                        alt="Image"
                        style={{ width: '45px', height: '45px' }}
                        className="mb-4 rounded-lg w-24 h-24 mx-auto"
                    />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a href="/">Ad Listings</a>
                    </li>
                    <li>
                        <a href="/new">Create Ad Post</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/map">View Map</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a className="btn" onClick={goToMessagesPage}>
                            Messages
                        </a>
                    </li>
                    <li>
                        <a className="btn" onClick={logout}>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
