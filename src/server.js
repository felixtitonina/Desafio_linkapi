const app = require('./app')

const port = process.env.PORT || 5001
app.listen(port, function (){ 
    console.log(` Run port ${port}`)
})

