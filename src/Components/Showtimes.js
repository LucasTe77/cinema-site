import React from 'react';

const Showtimes = () => {
    const showtimes = [
        { movie: "Matrix", time: "14:00" },
        { movie: "Inception", time: "16:30" },
        { movie: "Avengers", time: "19:00" },
    ];

    return (
        <div>
            <h2>Horários das Sessões</h2>
            <ul>
                {showtimes.map((showtime, index) => (
                    <li key={index}>{showtime.movie} - {showtime.time}</li>
                ))}
            </ul>
        </div>
    );
};

export default Showtimes;
