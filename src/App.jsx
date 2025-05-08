// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RoomAvailability from './components/RoomAvailability';  // Componente para verificar disponibilidad
import NotificationComponent from './components/NotificationComponent';  // Componente de Notificaciones
import HotelComponent from './components/HotelComponent';  // Componente de Hoteles
import './App.css';  // Estilos globales de la aplicación

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle para abrir/cerrar el menú en pantallas pequeñas
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar con enlaces a los servicios */}
        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">HotelApp</Link>

            {/* Menú de navegación */}
            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
              <li><Link to="/disponibilidad">Servicio de Disponibilidad</Link></li>
              <li><Link to="/notificaciones">Servicio de Notificaciones</Link></li>
              <li><Link to="/hoteles">Servicio de Hoteles</Link></li>
            </ul>

          </div>
        </nav>

        {/* Página principal con imagen de fondo */}
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="welcome-section">
                <h1>Bienvenidos a esta página de Hoteles en Guatemala</h1>
              </div>
            } 
          />
        </Routes>

        {/* Rutas para los servicios */}
        <Routes>
          <Route path="/disponibilidad" element={<RoomAvailability />} />
          <Route path="/notificaciones" element={<NotificationComponent />} />
          <Route path="/hoteles" element={<HotelComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
