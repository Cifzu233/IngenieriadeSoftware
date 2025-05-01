// src/App.jsx
import React, { useState } from 'react';
import RoomAvailability from './components/RoomAvailability';

const App = () => {
  const [date, setDate] = useState('');
  const [roomType, setRoomType] = useState('');

  return (
    <div>
      <h1>Sistema de Reservas de Hotel</h1>
      <RoomAvailability date={date} roomType={roomType} />

      <div>
        <label>Selecciona una fecha:</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />

        <label>Selecciona un tipo de habitación:</label>
        <select onChange={(e) => setRoomType(e.target.value)} value={roomType}>
          <option value="">Seleccionar...</option>
          <option value="simple">Simple</option>
          <option value="doble">Doble</option>
          <option value="suite">Suite</option>
        </select>
      </div>
    </div>
  );
};

export default App;
