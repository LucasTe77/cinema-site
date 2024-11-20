import React from 'react';
import matrix from '../assets/matrix.jpg';
import inception from '../assets/inception.jpg';
import avengers from '../assets/avengers.jpg';
import batman from '../assets/batman.jpg';
import interstellar from '../assets/interstellar.jpg';
import avatar from '../assets/avatar.jpg';

const Schedule = () => {
  // Dados de sessões do cinema
  const sessions = [
    { movie: "Matrix", time: "14:00", room: "Sala 1", format: "2D", rating: "14 anos", image: matrix },
    { movie: "Inception", time: "16:30", room: "Sala 2", format: "3D", rating: "12 anos", image: inception },
    { movie: "Avengers", time: "19:00", room: "Sala 3", format: "2D", rating: "12 anos", image: avengers },
    { movie: "Batman", time: "21:30", room: "Sala 4", format: "3D", rating: "12 anos", image: batman },
    { movie: "Interstellar", time: "23:00", room: "Sala 5", format: "2D", rating: "10 anos", image: interstellar },
    { movie: "Avatar", time: "01:00", room: "Sala 6", format: "3D", rating: "12 anos", image: avatar },
  ];

  // Mapeia as sessões para os dias da semana
  const schedule = [
    {
      day: "Segunda-feira",
      movies: sessions.slice(0, 2), // Escolher 2 filmes por dia
    },
    {
      day: "Terça-feira",
      movies: sessions.slice(2, 4), // Escolher 2 filmes por dia
    },
    {
      day: "Quarta-feira",
      movies: sessions.slice(4, 6), // Escolher 2 filmes por dia
    },
  ];

  return (
    <div>
      <h1>Programação do Cinema</h1>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Dia da Semana</th>
            <th>Filme</th>
            <th>Horário</th>
            <th>Sala</th>
            <th>Formato</th>
            <th>Classificação</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((daySchedule, index) => (
            <React.Fragment key={index}>
              {/* Exibe o nome do dia uma vez */}
              <tr>
                <td rowSpan={daySchedule.movies.length} data-label="Dia da Semana">
                  {daySchedule.day}
                </td>
                <td data-label="Filme">{daySchedule.movies[0].movie}</td>
                <td data-label="Horário">{daySchedule.movies[0].time}</td>
                <td data-label="Sala">{daySchedule.movies[0].room}</td>
                <td data-label="Formato">{daySchedule.movies[0].format}</td>
                <td data-label="Classificação">{daySchedule.movies[0].rating}</td>
              </tr>
              {/* Exibe os filmes seguintes para o mesmo dia */}
              {daySchedule.movies.slice(1).map((movie, movieIndex) => (
                <tr key={movieIndex}>
                  <td data-label="Filme">{movie.movie}</td>
                  <td data-label="Horário">{movie.time}</td>
                  <td data-label="Sala">{movie.room}</td>
                  <td data-label="Formato">{movie.format}</td>
                  <td data-label="Classificação">{movie.rating}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;