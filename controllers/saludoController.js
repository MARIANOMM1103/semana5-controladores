const saludar = (req, res) => {
  const { nombre } = req.params
  const { edad, ciudad } = req.body
  if (!ciudad) {
    return res.status(400).json({ error: "Falta el lugar" })
  }
  return res.status(200).json({
    saludo: `Hola ${nombre} de ${edad} anios, bienvenido a ${ciudad}`
  })
}

module.exports = { saludar }
