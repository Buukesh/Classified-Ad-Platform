import { useLocation } from "react-router-dom";

import { formatDate } from "../../utils";
import NavBar from "../components/Navbar";
import PhotoCarousel from "../components/PhotoCarousel";
import { Category } from "../constants";

const AdView = () => {
    const location = useLocation();

    const ad = location.state;

    const images = [
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Casio_calculator_JS-20WK_in_201901_002.jpg/800px-Casio_calculator_JS-20WK_in_201901_002.jpg",
        },
        {
            src: "https://m.media-amazon.com/images/I/71rcveD-Q3L._AC_UF1000,1000_QL80_.jpg",
        },
        {
            src: "https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg",
        },
        // Example images
    ];
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

                        <PhotoCarousel images={images} />

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
