const mongoose = require("mongoose");
const UsuariosSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true, //esto es para que no haya 2 usuarios con el mismo correo
  },
  password: { type: String, required: true, trim: true },
  registro: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Usuario", UsuariosSchema);
