import PropTypes from "prop-types";

const Ad = ({ imgSrc, title, description }) => {
    return (
        <a href="#" className="flex justify-center">
            <div className="card lg:card-side shadow-xl w-1/2 lg:w-1/2">
                <img src={imgSrc} />

                <div className="absolute top-2 right-2 bg-secondary px-4 py-1 rounded-full">
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
        </a>
    );
};

Ad.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string,
};

export default Ad;
