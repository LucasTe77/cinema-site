import React, { useState } from 'react';
import Movies from './Components/Movies';
import SessionCarousel from './Components/SessionCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a abertura do menu

    // Função para alternar a visibilidade do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="App">
            {/* Cabeçalho do site */}
            <header className="App-header">
                <h1>CineLux</h1> {/* Nome do site */}
                {/* Botão lateral com ícone de 3 barras */}
                <button className={`menu-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </header>

            {/* Menu lateral */}
            <nav className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#ingressos">Ingressos</a></li>
                    <li><a href="#programacao">Programação</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>

            {/* Exibe o carrossel de sessões */}
            <SessionCarousel />

            {/* Exibe a lista de filmes */}
            <Movies />

            {/* Seções para linkagem interna (opcional) */}
            <section id="home">
                <h2>Bem-vindo ao CineLux!</h2>
            </section>
            <section id="ingressos">
                <h2>Compre seus Ingressos</h2>
            </section>
            <section id="programacao">
                <h2>Programação Atual</h2>
            </section>
            <section id="contato">
                <h2>Fale Conosco</h2>
            </section>
        </div>
    );
}

export default App;
