// backend/index.js
const express = require('express');              
const cors = require('cors');                     
const path = require('path');                         
const usuarioRoutes = require('./routes/usuarios');     

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Servir archivos HTML/CSS desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Montar las rutas /api/usuarios
app.use('/api/usuarios', usuarioRoutes);

// ✅ Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});