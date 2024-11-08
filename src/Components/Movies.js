import React from 'react';
import matrix from '../assets/matrix.jpg';
import inception from '../assets/inception.jpg';
import avengers from '../assets/avengers.jpg';
import batman from '../assets/batman.jpg';
import interstellar from '../assets/interstellar.jpg';
import avatar from '../assets/avatar.jpg';

const Movies = () => {
    const movies = [
        {
            title: "Matrix",
            duration: "136 min",
            genre: "Ficção Científica",
            year: 1999,
            img: matrix,
            trailerUrl: "https://www.youtube.com/watch?v=mPYfd6PCmYY",
        },
        {
            title: "Inception",
            duration: "148 min",
            genre: "Ação, Ficção Científica",
            year: 2010,
            img: inception,
            trailerUrl: "https://www.youtube.com/watch?v=R_VX0e0PX90",
        },
        {
            title: "Avengers",
            duration: "143 min",
            genre: "Ação, Super-heróis",
            year: 2012,
            img: avengers,
            trailerUrl: "https://www.youtube.com/watch?v=KeNEGtsCWEk",
        },
        {
            title: "Batman",
            duration: "155 min",
            genre: "Ação, Aventura",
            year: 2022,
            img: batman,
            trailerUrl: "https://www.youtube.com/watch?v=HJv4LQxbVEA",
        },
        {
            title: "Interstellar",
            duration: "169 min",
            genre: "Ficção Científica",
            year: 2014,
            img: interstellar,
            trailerUrl: "https://www.youtube.com/watch?v=i6avfCqKcQo",
        },
        {
            title: "Avatar",
            duration: "192 min",
            genre: "Ficção Científica, Aventura",
            year: 2022,
            img: avatar,
            trailerUrl: "https://www.youtube.com/watch?v=x5pZI-DmtrE",
        },
    ];

    const handleTrailerClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="movies-list">
            {movies.map((movie, index) => (
                <div key={index} className="movie-card">
                    <img src={movie.img} alt={movie.title} className="movie-cover" />
                    <h3>{movie.title}</h3>
                    <p>{movie.duration}, {movie.genre}, {movie.year}</p>
                    <button
                        className="primary"
                        onClick={() => handleTrailerClick(movie.trailerUrl)}
                    > Assistir Trailer
                    </button>
                    <button className="secondary">Mais Informações</button>
                </div>
            ))}
        </div>
    );
};

export default Movies;
