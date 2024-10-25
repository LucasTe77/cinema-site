import React from 'react';
import matrix from '../assets/matrix.jpg';
import inception from '../assets/inception.jpg';
import avengers from '../assets/avengers.jpg';
import batman from '../assets/batman.jpg'; // Adicione o caminho da imagem do Batman
import interstellar from '../assets/interstellar.jpg'; // Adicione o caminho da imagem de Interstellar
import avatar from '../assets/avatar.jpg'; // Adicione o caminho da imagem de Avatar

const Movies = () => {
    const movies = [
        { title: "Matrix", duration: "136 min", genre: "Ficção Científica", year: 1999, img: matrix },
        { title: "Inception", duration: "148 min", genre: "Ação, Ficção Científica", year: 2010, img: inception },
        { title: "Avengers", duration: "143 min", genre: "Ação, Super-heróis", year: 2012, img: avengers },
        { title: "Batman", duration: "155 min", genre: "Ação, Aventura", year: 2005, img: batman },
        { title: "Interstellar", duration: "169 min", genre: "Ficção Científica", year: 2014, img: interstellar },
        { title: "Avatar", duration: "162 min", genre: "Ficção Científica, Aventura", year: 2009, img: avatar },
    ];

    return (
        <div className="movies-list">
            {movies.map((movie, index) => (
                <div key={index} className="movie-card">
                    <img src={movie.img} alt={movie.title} className="movie-cover" />
                    <h3>{movie.title}</h3>
                    <p>{movie.duration}, {movie.genre}, {movie.year}</p>
                    <button className="primary">Assistir Trailer</button>
                    <button className="secondary">Mais Informações</button>
                </div>
            ))}
        </div>
    );
};

export default Movies;
