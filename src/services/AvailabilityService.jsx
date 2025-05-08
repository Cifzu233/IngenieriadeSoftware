// src/services/AvailabilityService.jsx
import axios from 'axios';

// La URL de tu API que verifica la disponibilidad
const API_URL = 'http://localhost:5000/api/habitaciones/check-availability';

// Función que consulta la API y retorna la disponibilidad
export const checkRoomAvailability = async (date, roomType) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        date: date,
        roomType: roomType,
      },
    });
    return response.data; // Retorna la respuesta de la API
  } catch (error) {
    console.error('Error al verificar la disponibilidad:', error);
    throw error; // Lanza el error para que lo maneje el componente
  }
};
