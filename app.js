const express = require('express');
const bodyParser = require('body-parser');
const { Digimon, Tipo, Ataque } = require('./models');

const app = express();
app.use(bodyParser.json());

// Endpoints para el modelo Digimon
app.get('/digimons', async (req, res) => {
  const digimons = await Digimon.findAll();
  res.json(digimons);
});

app.post('/digimons', async (req, res) => {
  const { nombre, evoluciones, nivel } = req.body;
  const digimon = await Digimon.create({ nombre, evoluciones, nivel });
  res.json(digimon);
});

// Endpoints para el modelo Tipos
app.get('/tipos', async (req, res) => {
  const tipos = await Tipo.findAll();
  res.json(tipos);
});

app.post('/tipos', async (req, res) => {
  const { nombre } = req.body;
  const tipo = await Tipo.create({ nombre });
  res.json(tipo);
});

// Endpoints para el modelo Ataques
app.get('/ataques', async (req, res) => {
  const ataques = await Ataque.findAll();
  res.json(ataques);
});

app.post('/ataques', async (req, res) => {
  const { nombre, descripcion } = req.body;
  const ataque = await Ataque.create({ nombre, descripcion });
  res.json(ataque);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
