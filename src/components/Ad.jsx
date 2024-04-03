import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { formatDate } from "../../utils";
import { Category } from "../constants";

const Ad = ({ ad, imgSrc }) => {
    return (
        <div className="flex justify-center">
            <div className="card lg:card-side shadow-xl w-1/2 lg:w-1/2">
                <img src={imgSrc} className="h-full" />

                <div className="absolute top-2 right-2 bg-secondary px-1 py-1 rounded-full">
                    <span className="text-lg font-semibold text-white">
                        {`$${ad.price}`}
                    </span>
                </div>

                {/* dynamic link using ad id */}
                <Link
                    to={`/adview/${ad.id}`}
                    state={ad}
                    className="w-full flex flex-col"
                >
                    <div className="card-body bg-base-200">
                        <h2 className="card-title">{ad.title}</h2>
                        <p>{ad.content}</p>

                        <div className="divider" />

                        <div className="text-sm">
                            <p>Posted: {formatDate(ad.date)}</p>
                            <p>Category: {Category[ad.category]}</p>
                            <p>Seller: {ad.user.username}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

Ad.propTypes = {
    imgSrc: PropTypes.string,
    ad: PropTypes.object.isRequired,
};

export default Ad;
