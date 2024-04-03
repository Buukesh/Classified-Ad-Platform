import { useState, useEffect } from "react";

import PropTypes from "prop-types";

import Ad from "./Ad";
import { fetchData } from "../../utils";

const AdList = ({ searchInput }) => {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        const getAds = async () => {
            const data = await fetchData("/api/ads");
            setAds(data);
        };
        getAds();
    }, []);

    return (
        <div>
            {ads.map((ad) =>
                // spacing between ads
                (ad.category === searchInput.type ||
                    searchInput.type === "ALL") &&
                (ad.title
                    .toUpperCase()
                    .includes(searchInput.content.toUpperCase()) ||
                    searchInput === "") ? (
                    <div key={ad.id} className="mb-5">
                        <Ad key={ad.id} ad={ad} />
                    </div>
                ) : null
            )}
        </div>
    );
};

AdList.propTypes = {
    searchInput: PropTypes.object.isRequired,
};

export default AdList;
