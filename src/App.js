import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Movies from './Components/Movies';
import SessionCarousel from './Components/SessionCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

// Importando as páginas ou criando placeholders

import Home from './pages/home';
import Tickets from './pages/ticket';
import Schedule from './pages/schedule';
import Contact from './pages/contact';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Fecha o menu ao clicar fora dele
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
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
        <Router>
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
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/ingressos" onClick={() => setIsMenuOpen(false)}>Ingressos</Link></li>
                        <li><Link to="/programacao" onClick={() => setIsMenuOpen(false)}>Programação</Link></li>
                        <li><Link to="/contato" onClick={() => setIsMenuOpen(false)}>Contato</Link></li>
                        <li><Link to="/adicionarfilme" onClick={() => setIsMenuOpen(false)}>Adicionar Filme</Link></li>
                    </ul>
                </nav>

                {/* Rotas */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ingressos" element={<Tickets />} />
                    <Route path="/programacao" element={<Schedule />} />
                    <Route path="/contato" element={<Contact />} />
                </Routes>

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
        </Router>
    );
}

export default App;
