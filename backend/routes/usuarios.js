// backend/routes/usuarios.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { nombre, email, password, fechaNacimiento, dpi } = req.body;

  if (!nombre || !email || !password || !fechaNacimiento || !dpi) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios.' });
  }

  const sql = 'INSERT INTO usuarios (nombre, email, password, fechaNacimiento, dpi) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [nombre, email, password, fechaNacimiento, dpi], (err, result) => {
    if (err) {
      console.error('Error al insertar usuario:', err);
      return res.status(500).json({ mensaje: 'Error al registrar usuario.' });
    }
    res.status(201).json({ mensaje: 'Usuario registrado correctamente.' });
  });
});

module.exports = router;