import React, { useState } from "react";

//export var currentCategory = "";

const SearchBar = ({setSearchInput}) => {
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    }

    // Send the Category and Search Box Text to the AdList
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchInput({type: category, content: content});
        
    }

    return (
        <div className="flex justify-center">
            <div className="join join-vertical lg:join-horizontal">
                <input
                    id="searchInput"
                    className="input input-bordered input-primary join-item bg-base-200 rounded-none"
                    placeholder="Search"
                    onChange={handleContentChange}
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
                    <option value="ALL">All Categories</option>
                    <option value="IW">Items Wanted</option>
                    <option value="IS">Items for Sale</option>
                    <option value="AS">Academic Services</option>
                </select>

                <button 
                    className="btn btn-primary join-item "
                    onClick={handleSubmit}
                >Search</button>
            </div>
        </div>
    );
};

export default SearchBar;
