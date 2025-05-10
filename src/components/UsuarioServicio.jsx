import React, { useEffect, useState } from 'react';
import { getUserById, getUserReservationHistory, updateUser } from '../services/UserService';  // Asegúrate de importar updateUser
import '../styles/UsuarioServicio.css';

const UsuarioServicio = () => {
  const [usuario, setUsuario] = useState(null);
  const [reservas, setReservas] = useState([]);
  const [isEditing, setIsEditing] = useState(false);  // Estado para controlar la edición
  const [editedUser, setEditedUser] = useState({});  // Guardar los datos editados

  // Simulación: puedes cambiar este ID por el de un usuario real
  const userId = '1';

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const data = await getUserById(userId);
        setUsuario(data);
        setEditedUser(data);  // Iniciar el estado de los datos editados
      } catch (error) {
        console.error('Error al cargar el usuario');
      }
    };

    const fetchReservas = async () => {
      try {
        const historial = await getUserReservationHistory(userId);
        setReservas(historial);
      } catch (error) {
        console.error('Error al cargar historial');
      }
    };

    fetchUsuario();
    fetchReservas();
  }, []);

  // Función para manejar la edición
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Función para manejar los cambios en los campos editables
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  // Función para guardar los cambios
  const handleSave = async () => {
    console.log('Datos a guardar:', editedUser);  // Verifica los datos que estás enviando

    try {
      const response = await updateUser(userId, editedUser);
      setUsuario(response);  // Asegúrate de actualizar con la respuesta completa del backend
      setIsEditing(false);  // Vuelve a desactivar la edición
    } catch (error) {
      console.error('Error al guardar los cambios');
      alert('Hubo un error al guardar los cambios');
    }
  };

  if (!usuario) return <div className="usuario-container">Cargando usuario...</div>;

  return (
    <div className="usuario-container">
      <div className="usuario-header">
        <h2>Perfil de Usuario</h2>
        {!isEditing && (
          <button onClick={handleEditClick}>Editar</button>
        )}
      </div>

      <div className="usuario-info">
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={isEditing ? editedUser.nombre : usuario.nombre}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={isEditing ? editedUser.email : usuario.email}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label>Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={isEditing ? editedUser.telefono : usuario.telefono}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label>Fecha de creación</label>
          <input
            type="text"
            value={new Date(usuario.fecha_creacion).toLocaleString()}
            readOnly
          />
        </div>
      </div>

      <div className="usuario-historial">
        <h3>Historial de Reservas</h3>
        {reservas.length === 0 ? (
          <p>No hay reservas registradas.</p>
        ) : (
          reservas.map((reserva, index) => (
            <div key={index} className="historial-item">
              <p><strong>Hotel:</strong> {reserva.hotel}</p>
              <p><strong>Fecha:</strong> {reserva.fecha}</p>
              <p><strong>Habitación:</strong> {reserva.tipoHabitacion}</p>
            </div>
          ))
        )}
      </div>

      {isEditing && (
        <div>
          <button onClick={handleSave}>Guardar Cambios</button>
        </div>
      )}
    </div>
  );
};

export default UsuarioServicio;
