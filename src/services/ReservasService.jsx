import axios from 'axios';

const API_URL = 'http://localhost:5000/api/reservas'; 

export const crearReserva = async (datos) => {
  try {
    const response = await axios.post(API_URL, datos);
    return response.data;
  } catch (error) {
    console.error('Error al crear la reserva:', error.response?.data || error.message);
    throw error;
  }
};

export const obtenerReservas = async () => {
  try {
    const res = await fetch(API_URL);
    return await res.json();
  } catch (error) {
    console.error("Error al obtener reservas:", error);
    throw error;
  }
};
