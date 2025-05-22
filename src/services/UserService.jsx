  // src/services/UserService.jsx

  import axios from 'axios';

  const API_BASE_URL = 'http://localhost:5000/api/usuarios';

  // ... funciones existentes

  // Registrar un nuevo usuario
  export const registerUser = async (nuevoUsuario) => {
    try {
      const response = await axios.post(API_BASE_URL, nuevoUsuario);
      return response.data;
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      throw error;
    }
  };