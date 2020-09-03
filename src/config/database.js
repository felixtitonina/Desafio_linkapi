const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then((data) => {
    console.log('Conexao mongoDB', data.connection.readyState)
})
    .catch((error) => console.log('Erro de conexao', error))

module.exports = mongoose;