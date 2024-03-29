import { useState, useEffect } from "react";
import Ad from "./Ad";

const AdList = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const getAds = async () => {
      try {
        const response = await fetch("/api/ads");
        const data = await response.json();
        setAds(data);
      } catch (e) {
        console.error("Error getting ads:", e);
      }
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
