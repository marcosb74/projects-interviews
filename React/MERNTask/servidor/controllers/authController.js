const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const JWT = require("jsonwebtoken");

exports.autenticarUsuario = async (req, res) => {
  //reviso si hay errores
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  //extraigo el email y el password
  const { email, password } = req.body;
  try {
    //Reviso que sea un usuario registrado
    let usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ msg: "El usuario no existe" });
    }
    //Revisar el password
    const passCorrecto = await bcryptjs.compare(password, usuario.password);
    if (!passCorrecto) {
      return res.status(400).json({ msg: "El password es incorrecto" });
    }
    // Si TODO es correcto Crear y firmar el JWT
    //
    const payload = {
      usuario: {
        id: usuario.id,
      },
    };

    //firmar el JWT
    JWT.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600, // 1 hora
      },
      (error, token) => {
        if (error) throw error;
        // mensaje de confirmacion

        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//obtengo que usuario esta autenticado
exports.usuarioAutenticado = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.usuario.id).select("-password");
    res.json({ usuario });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error" });
  }
};
