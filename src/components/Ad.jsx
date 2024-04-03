import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AdView from "../pages/AdView";

const Ad = ({ imgSrc, title, description, price }) => {
    return (
        <Link to="/adview" className="flex justify-center">
            <div className="card lg:card-side shadow-xl w-1/2 lg:w-1/2">
                <img src={imgSrc} />

                <div className="absolute top-2 right-2 bg-secondary px-1 py-1 rounded-full">
                    {/* Currently using sample price */}
                    <span className="text-lg font-semibold text-white">
                        {"$100 (Sample)"}
                    </span>
                </div>

                <div className="card-body bg-base-200">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
};

Ad.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string,
};

export default Ad;
