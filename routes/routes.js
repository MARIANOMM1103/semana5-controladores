const { Router } = require('express')
const router = Router()

const controlAprobado = require('../middleware/controlAprobado')
const { obtenerExamen, actualizarCalificacion } = require('../controllers/examenController')
const { saludar } = require('../controllers/saludoController')
const { obtenerPerrito } = require('../controllers/perritoController')

router.get('/examen', obtenerExamen)
router.put('/calificacion', controlAprobado, actualizarCalificacion)
router.post('/saludo/:nombre', saludar)
router.get('/perrito', obtenerPerrito)

module.exports = router
