import { useState, useEffect } from "react";

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
};

export default AdList;
