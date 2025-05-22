// src/components/UsuarioServicio.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/UsuarioServicio.css'; // Usa tus estilos

const UsuarioServicio = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: ''
  });
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/usuarios', usuario);
      setMensaje(response.data.mensaje);
      setUsuario({ nombre: '', email: '', password: '' }); // limpiar form
    } catch (error) {
      console.error(error);
      setMensaje('Error al registrar usuario. Ver consola.');
    }
  };

  return (
    <div className="usuario-container">
      <h2>Registro de Usuario</h2>
      <form className="usuario-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={usuario.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={usuario.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={usuario.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Registrar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default UsuarioServicio;
