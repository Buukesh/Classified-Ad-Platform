import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const useAuthCheck = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // this runs when page loads
        const token = localStorage.getItem("token");
        if (!token) {
            // if token not set (not logged in), go to signup
            navigate("/signup");
        }
    }, [navigate]);
};

export default useAuthCheck;
