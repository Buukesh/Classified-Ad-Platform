import React, { useState } from "react";

const SearchBar = () => {
    const [category, setCategory] = useState("");

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <div className="flex justify-center">
            <div className="join join-vertical lg:join-horizontal">
                <div>
                    <div>
                        <input
                            id="searchInput"
                            className="input input-bordered join-item bg-base-200 rounded-none"
                            placeholder="Search"
                        />
                    </div>
                </div>
                <select
                    className="select select-bordered join-item bg-base-200"
                    id="categoryMenu"
                    value={category}
                    onChange={handleCategoryChange}
                >
                    <option value="" disabled hidden>
                        All Categories
                    </option>
                    <option value="All Categories">All Categories</option>
                    <option value="Items Wanted">Items Wanted</option>
                    <option value="Items for Sale">Items for Sale</option>
                    <option value="Academic Services">Academic Services</option>
                </select>
                <div className="indicator">
                    <button className="btn btn-primary join-item ">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
