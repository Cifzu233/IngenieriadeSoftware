// src/services/HotelService.jsx
export const getHotelDetails = async () => {
    // Simulación de la API con más hoteles
    return [
      {
        name: 'Hotel Paradise',
        location: 'Guatemala City',
        price: 100,
        availableRooms: 10,
        stars: 5,
      },
      {
        name: 'Hotel Sunset',
        location: 'Antigua, Guatemala',
        price: 120,
        availableRooms: 8,
        stars: 4,
      },
      {
        name: 'Beach Resort',
        location: 'Monterrico, Guatemala',
        price: 150,
        availableRooms: 5,
        stars: 5,
      },
      {
        name: 'Mountain Escape',
        location: 'Quetzaltenango, Guatemala',
        price: 80,
        availableRooms: 12,
        stars: 3,
      },
      {
        name: 'Luxury Inn',
        location: 'Panajachel, Lake Atitlán',
        price: 180,
        availableRooms: 3,
        stars: 5,
      },
    ];
  };
  
  