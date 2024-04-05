import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"

import { formatDate } from "../../utils";
import NavBar from "../components/Navbar";
import PhotoCarousel from "../components/PhotoCarousel";
import { Category } from "../constants";

const AdView = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const ad = location.state;

    const handleSendMessage = (e) => {
        e.preventDefault();

        // Should make post request here to start conversation
        console.log(`Sending message to ${ad.user.username}`);

        navigate("/messages"); // Then navigate to the messages page
    };

    return (
        <section>
            <NavBar />
            <div className="flex justify-center my-10">
                <div className="card w-[70rem] bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold mb-5">{ad.title}</h2>
                        <p className="text-2xl font-semibold text-primary mb-5">
                            {`$${ad.price}`}
                        </p>
                        <p>{ad.content}</p>

                        <PhotoCarousel images={ad.images} />
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={handleSendMessage}
                        >
                            Send message to {ad.user.username}
                        </button>
                        <p>Posted: {formatDate(ad.date)}</p>
                        <p>Modified: {formatDate(ad.modified)}</p>
                        <p>Category: {Category[ad.category]}</p>
                        <p>Seller: {ad.user.username}</p>
                        <p>Item: {ad.item}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdView;
