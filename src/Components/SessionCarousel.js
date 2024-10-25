import React from 'react';
import Slider from "react-slick";
import matrix from '../assets/matrix2.jpg';
import inception from '../assets/inception2.jpg';
import avengers from '../assets/avengers2.jpg';
import batman from '../assets/batman2.jpg';
import interstellar from '../assets/interstellar2.jpg';
import avatar from '../assets/avatar2.jpg';
import "../styles/slide.css";

const SessionCarousel = () => {
    const sessions = [
        { movie: "Matrix", time: "14:00", room: "Sala 1", format: "2D", rating: "14 anos", image: matrix },
        { movie: "Inception", time: "16:30", room: "Sala 2", format: "3D", rating: "12 anos", image: inception },
        { movie: "Avengers", time: "19:00", room: "Sala 3", format: "2D", rating: "12 anos", image: avengers },
        { movie: "Batman", time: "21:30", room: "Sala 4", format: "3D", rating: "12 anos", image: batman },
        { movie: "Interstellar", time: "23:00", room: "Sala 5", format: "2D", rating: "10 anos", image: interstellar },
        { movie: "Avatar", time: "01:00", room: "Sala 6", format: "3D", rating: "12 anos", image: avatar },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="session-carousel">
            <h2>Horários das Sessões</h2>
            <Slider {...settings}>
                {sessions.map((session, index) => (
                    <div key={index} className="session-slide">
                        {/* Aqui estamos exibindo a imagem correspondente ao filme */}
                        <img src={session.image} alt={session.movie} className="movie-image" />
                        <h4>{session.movie}</h4>
                        <div className="session-info">
                            <p>Horário: {session.time}</p>
                            <p>Sala: {session.room}</p>
                        </div>
                        <p>Formato: {session.format}</p>
                        <p>Classificação: {session.rating}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};


export default SessionCarousel;
