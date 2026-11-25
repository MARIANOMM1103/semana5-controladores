const express = require('express')
const app = express()

const rutas = require('./routes/routes')
const verificarToken = require('./middleware/verificarToken')

app.use(express.json())
app.use(verificarToken) // Global
app.use(rutas)

app.listen(3001, () => console.log('Servidor en puerto 3001'))
