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
            {ads.map((ad, idx) => (
                // spacing between ads
                <div key={idx} className="mb-5">
                    <Ad
                        key={idx}
                        imgSrc={"https://placehold.co/200"}
                        title={ad.title}
                        description={ad.content}
                    />
                </div>
            ))}
        </div>
    );
};

export default AdList;
