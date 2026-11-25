function controlAprobado(req, res, next) {
  const promedio = req.body.promedio
  if (promedio === undefined) {
    return res.status(400).json({ error: "Falta el promedio" })
  }
  if (promedio >= 7) {
    return next()
  }
  return res.status(400).json({ error: "No aprobado" })
}

module.exports = controlAprobado
