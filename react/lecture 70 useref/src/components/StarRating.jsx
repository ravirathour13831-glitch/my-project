import React, { useState } from 'react';

function StarRating() {

    const [rating, setRating] = useState(0);

    return (
        <div>
            <h2>Give Your Rating</h2>

            {[1, 2, 3, 4, 5 ,6].map((star) => (
                <span
                    key={star}
                    onClick={() => setRating(star)}
                    style={{
                        fontSize: "40px",
                        cursor: "pointer",
                        color: star <= rating ? "gold" : "gray"
                    }}
                >
                    ★
                </span>
            ))}

            <h3>Your Rating: {rating}/6</h3>
        </div>
    );
}

export default StarRating;