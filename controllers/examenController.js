const obtenerExamen = (req, res) => {
  return res.status(200).json({ calificacion: 10 })
}

const actualizarCalificacion = (req, res) => {
  const { promedio } = req.body
  return res.status(200).json({ resultado: "Aprobado con " + promedio })
}

module.exports = { obtenerExamen, actualizarCalificacion }
