import React, { useState, useRef, useEffect } from 'react';
import Movies from './Components/Movies';
import SessionCarousel from './Components/SessionCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu
    const menuRef = useRef(null); // Referência para o menu

    // Alterna a visibilidade do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Fecha o menu ao clicar fora dele
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false); // Fecha o menu se o clique for fora dele
        }
    };

    // Adiciona e remove o listener para clique fora do menu
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="App">
            {/* Cabeçalho */}
            <header className="App-header">
                <h1>CineLux</h1>
                {/* Botão do menu */}
                <button
                    className={`menu-button ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </header>

            {/* Menu lateral */}
            <nav
                className={`sidebar ${isMenuOpen ? 'open' : ''}`}
                ref={menuRef}
            >
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#ingressos">Ingressos</a></li>
                    <li><a href="#programacao">Programação</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>

            {/* Carrossel e lista de filmes */}
            <SessionCarousel />
            <Movies />

            {/* Rodapé */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section contact">
                        <h3>Contato</h3>
                        <p>Email: contato@cinelux.com</p>
                        <p>Telefone: (16) 3387-5678</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; 2024 CineLux. Todos os direitos reservados.
                </div>
            </footer>
                    </div>
    );
}
export default App;