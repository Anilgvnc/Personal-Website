import { useState } from "react";
import { FaStar } from "react-icons/fa";

import './Rate.css'

function Rate() {
    const [rating, setRating] = useState();
    const [hover, setHover] = useState();
    return (
        <div className="ratingContainer">
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                        />
                        <FaStar
                            className="star"
                            size={30}
                            color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
}

export default Rate;