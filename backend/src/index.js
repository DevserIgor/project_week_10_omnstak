//cria a variavel constante com instância de express
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

// chama o express para dentro da constante 'app', (servidor);
const app = express();
mongoose.connect('mongodb+srv://igor:igor@cluster0-o8s9m.mongodb.net/appigor?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(cors());
app.use(express.json());
app.use(routes);

//quem está ouvindo esta requisição é a porta 333
app.listen(3333);