const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://<user>:<password>@omnistack-wz73p.mongodb.net/nome_banco?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// req.query = Acessar query params (filtros)
// req.params = Acessar route params (edição, exclusão)
// req.body = Acessar corpo da requisição (criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);
app.listen(3030);