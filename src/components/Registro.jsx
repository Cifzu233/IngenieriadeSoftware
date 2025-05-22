// src/components/Registro.jsx
import React, { useState } from 'react';
import '../styles/UsuarioServicio.css';
import { registerUser } from '../services/UserService';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    fechaNacimiento: '',
    dpi: ''
  });

  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');
    setError('');

    try {
      await registerUser(formData);
      setMensaje('✅ Usuario registrado exitosamente.');
      setFormData({
        nombre: '',
        email: '',
        password: '',
        fechaNacimiento: '',
        dpi: ''
      });
    } catch (err) {
      console.error(err);
      setError('❌ Ocurrió un error al registrar el usuario.');
    }
  };

  return (
    <div className="usuario-container">
      <h2>Registro - Hotel Playa Sol</h2>
      <form className="usuario-form" onSubmit={handleSubmit}>
        <div>
          <label>Nombre completo</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Fecha de nacimiento</label>
          <input
            type="date"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>DPI</label>
          <input
            type="text"
            name="dpi"
            value={formData.dpi}
            onChange={handleChange}
            pattern="\d{13}"
            maxLength="13"
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      {mensaje && <p style={{ color: 'green', marginTop: '1rem' }}>{mensaje}</p>}
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
};

export default Registro;
