import { useState, useEffect } from "react";

import Ad from "./Ad";
import { fetchData } from "../../utils";

const AdList = () => {
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
            {ads.map((ad) => (
                // Spacing between ads
                <div key={ad.id} className="mb-5">
                    <Ad
                        key={ad.id}
                        ad={ad}
                        imgSrc={"https://placehold.co/200"}
                    />
                </div>
            ))}
        </div>
    );
};

export default AdList;
