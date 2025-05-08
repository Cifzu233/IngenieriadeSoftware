// src/components/RoomAvailability.jsx
import React, { useState } from 'react';
import { checkRoomAvailability } from '../services/AvailabilityService'; // Asegúrate de importar correctamente

const RoomAvailability = ({ date, roomType }) => {
  const [availability, setAvailability] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckAvailability = async () => {
    setLoading(true);
    setError('');
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
    <div>
      <button onClick={handleCheckAvailability} disabled={loading}>
        {loading ? 'Verificando...' : 'Verificar Disponibilidad'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

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
