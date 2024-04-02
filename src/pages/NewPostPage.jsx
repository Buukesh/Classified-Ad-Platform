import React, { useState } from "react";
import NavBar from "../components/NavBar.jsx";
import PhotoUpload from "../components/PhotoUpload.jsx";

const NewPostPage = () => {
    const [adTitle, setAdTitle] = useState("");
    const [adItem, setAdItem] = useState("");
    const [adContent, setAdContent] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("default");

    const isFormValid =
        adTitle && adItem && adContent && price && category !== "default";

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
                                onChange={(e) => setAdContent(e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="price" className="label">
                                Price ($):
                            </label>
                            <div>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    className="input input-bordered input-primary w-full max-w-xs"
                                    placeholder="Enter Price"
                                    min="0"
                                    required
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
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
                                <option value="Items Wanted">
                                    Items Wanted
                                </option>
                                <option value="Items for Sale">
                                    Items for Sale
                                </option>
                                <option value="Academic Services">
                                    Academic Services
                                </option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="adPhotos" className="label">
                                Photos:
                            </label>
                            <PhotoUpload />
                        </div>
                        <div className="card-actions justify-center">
                            <button
                                className="btn btn-primary"
                                disabled={!isFormValid}
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
