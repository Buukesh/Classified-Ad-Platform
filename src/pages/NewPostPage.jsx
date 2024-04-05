import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/Navbar.jsx";
import PhotoUpload from "../components/PhotoUpload.jsx";
import useAuthCheck from "../hooks/useAuthCheck.js";
import { postData } from "../../utils.js";

const NewPostPage = () => {
    const [adTitle, setAdTitle] = useState("");
    const [adItem, setAdItem] = useState("");
    const [adContent, setAdContent] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("default");
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(""); // State to hold error messages

    const isFormValid =
        adTitle && adItem && adContent && price && category !== "default" && images.length > 0;

    useAuthCheck();

    const navigate = useNavigate();

    const handleImagesChange = (images) => {
        // Additional validations can be added here for images (e.g., file size, format)
        setImages(images);
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        switch (name) {
            case "price":
                // Ensure the input value is a number and within the range of 0 to 99999
                if (
                    value === "" ||
                    (/^\d*$/.test(value) && parseInt(value, 10) >= 0 && parseInt(value, 10) <= 99999)
                ) {
                    setPrice(value);
                }
                break;
            default:
                // Handle changes for other inputs (adTitle, adItem, adContent, category)
                // This is a simplified version; you might need separate handlers for each input
                setState((prevState) => ({ ...prevState, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid) {
            setError("Please fill in all fields correctly.");
            return;
        }

        setError(""); // Reset error messages before making a new request
        setIsLoading(true);

        try {
            const data = await postData("/api/ads", {
                title: adTitle,
                item: adItem,
                content: adContent,
                price: price,
                category: category,
                images: images,
            }, {"Authorization": `Token ${localStorage.getItem("token")}`});

            // Assume postData throws an error for invalid responses
            navigate("/");
        } catch (error) {
            console.error("Submission error:", error);
            setError("Failed to create the ad. Please try again later.");
        }

        setIsLoading(false);
    };
    
    return (
        <section>
            <NavBar />
            <div className="flex justify-center my-10">
                <div className="card w-[70rem] bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Create Ad Post</h2>
                        <div>
                            <label htmlFor="adtitle" className="label">
                                Title:
                            </label>
                            <input
                                type="text"
                                id="adtitle"
                                name="adtitle"
                                className="input input-bordered input-primary w-full max-w-md"
                                required
                                value={adTitle}
                                maxLength={50}
                                onChange={(e) => setAdTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="aditem" className="label">
                                Item:
                            </label>
                            <input
                                type="text"
                                id="aditem"
                                name="aditem"
                                className="input input-bordered input-primary w-full max-w-md"
                                required
                                value={adItem}
                                onChange={(e) => setAdItem(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="adcontent" className="label">
                                Description:
                            </label>
                            <textarea
                                id="adcontent"
                                name="adcontent"
                                className="textarea input-bordered input-primary w-full h-32 max-w-xl"
                                required
                                value={adContent}
                                maxLength={500}
                                onChange={(e) => setAdContent(e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="price" className="label">
                                Price ($):
                            </label>
                            <div>
                                <input
                                    type="text"
                                    id="price"
                                    name="price"
                                    className="input input-bordered input-primary w-full max-w-xs"
                                    placeholder="Enter Price"
                                    min="0"
                                    max="99999"
                                    required
                                    value={price}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="adcategory" className="label">
                                Category:
                            </label>
                            <select
                                id="adcategory"
                                className="select select-primary w-full max-w-xs"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="default" disabled>
                                    Select Category
                                </option>
                                <option value="IW">
                                    Items Wanted
                                </option>
                                <option value="IS">
                                    Items for Sale
                                </option>
                                <option value="AS">
                                    Academic Services
                                </option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="adPhotos" className="label">
                                Photos:
                            </label>
                            <PhotoUpload onImagesChange={handleImagesChange} />
                        </div>
                        <div className="card-actions justify-center">
                            <button
                                className="btn btn-primary"
                                disabled={!isFormValid}
                                onClick={handleSubmit}
                            >
                                Create Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewPostPage;
