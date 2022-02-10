const mongoose = require("mongoose");

const ProyectoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  creador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario", // ref es para que sepa a de donde sale el objectid.
  },

  creado: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Proyecto", ProyectoSchema);
