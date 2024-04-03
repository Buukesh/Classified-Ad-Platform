import React from "react";
import NavBar from "../components/Navbar";
import PhotoCarousel from "../components/PhotoCarousel";

const AdView = ({ title, description, price }) => {
    const images = [
        {
            src: "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
        },
        {
            src: "https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
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
                        <p>This is where your description would be.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdView;
