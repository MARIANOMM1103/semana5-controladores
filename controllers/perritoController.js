const obtenerPerrito = (req, res) => {
  const { raza, edad } = req.query
  return res.status(200).json({ raza, edad })
}

module.exports = { obtenerPerrito }
