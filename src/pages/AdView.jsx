import React from "react";
import NavBar from "../components/Navbar";
import PhotoCarousel from "../components/PhotoCarousel";

const AdView = ({ title, description, price, username }) => {
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
                        <h2 className="text-3xl font-bold mb-5">Title</h2>
                        <p className="text-2xl font-semibold text-primary mb-5">
                            $100 (Sample)
                        </p>
                        <PhotoCarousel images={images} />
                        <h3>Posted by: username</h3>
                        <p>This is where your description would be.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdView;