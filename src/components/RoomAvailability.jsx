// src/components/RoomAvailability.jsx
import React, { useState } from 'react';
import { checkRoomAvailability } from '../services/AvailabilityService'; // Asegúrate de importar correctamente

const RoomAvailability = () => {
  const [date, setDate] = useState('');
  const [roomType, setRoomType] = useState('');
  const [availability, setAvailability] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckAvailability = async () => {
    setLoading(true);
    setError('');  // Limpiar cualquier error previo
    try {
      const result = await checkRoomAvailability(date, roomType); // Usamos la función que consulta la disponibilidad
      setAvailability(result);
    } catch (err) {
      setError('Error al verificar la disponibilidad');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="room-availability">
      <h2>Sistema de Reservas de Hotel</h2>

      {/* Formulario de disponibilidad */}
      <div>
        <label>Selecciona una fecha:</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
      </div>

      <div>
        <label>Selecciona un tipo de habitación:</label>
        <select onChange={(e) => setRoomType(e.target.value)} value={roomType}>
          <option value="">Seleccionar...</option>
          <option value="simple">Simple</option>
          <option value="doble">Doble</option>
          <option value="suite">Suite</option>
        </select>
      </div>

      {/* Botón de verificación */}
      <button onClick={handleCheckAvailability} disabled={loading}>
        {loading ? 'Verificando...' : 'Verificar Disponibilidad'}
      </button>

      {/* Mostrar mensaje de error */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Mostrar resultado de disponibilidad */}
      {availability && (
        <div>
          <h3>Resultado:</h3>
          <p>{availability.available ? 'Habitación disponible' : 'No disponible'}</p>
        </div>
      )}
    </div>
  );
};

export default RoomAvailability;
