function verificarToken(req, res, next) {
  const token = req.headers["x-access-token"]
  if (!token) {
    return res.status(400).json({ error: "Falta el token" })
  }
  if (token == "12345") {
    return next()
  }
  return res.status(400).json({ error: "Token no valido" })
}

module.exports = verificarToken
