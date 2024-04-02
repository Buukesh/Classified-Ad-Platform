import React, { useState } from "react";

const SearchBar = () => {
    const [category, setCategory] = useState("");

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <div className="flex justify-center">
            <div className="join join-vertical lg:join-horizontal">
                <input
                    id="searchInput"
                    className="input input-bordered input-primary join-item bg-base-200 rounded-none"
                    placeholder="Search"
                />

                <select
                    className="select select-bordered select-primary join-item bg-base-200"
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

                <button className="btn btn-primary join-item ">Search</button>
            </div>
        </div>
    );
};

export default SearchBar;
