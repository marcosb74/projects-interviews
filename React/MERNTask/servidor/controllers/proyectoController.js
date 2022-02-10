const Proyecto = require("../models/Proyecto");
const { validationResult } = require("express-validator");
exports.crearProyecto = async (req, res) => {
  //reviso si hay errores con express validator.
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  try {
    //Creo un nuevo proyecto
    const proyecto = new Proyecto(req.body);
    //Guardo el creador via JWT
    proyecto.creador = req.usuario.id;

    //guardo el proyecto
    proyecto.save();
    res.json(proyecto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
//Obtiene todos los proyectos del usuario actual
exports.obtenerProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find({ creador: req.usuario.id }).sort({
      creado: -1,
    });
    res.json({ proyectos });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//Actualizo un proyecto
exports.actualizarProyecto = async (req, res) => {
  //reviso si hay errores con express validator.
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  //extraigo la informacion del proyecto
  const { nombre } = req.body;
  const nuevoProyecto = {};
  if (nombre) {
    nuevoProyecto.nombre = nombre;
  }
  try {
    //revisar el ID
    let proyecto = await Proyecto.findById(req.params.id);

    //revisar que exista el proyecto o no
    if (!proyecto) {
      return res.status(404).json({ msg: "Proyecto no encontrado" });
    }
    //verificar el creador del proyecto
    if (proyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No autorizado" });
    }
    //actualizar
    proyecto = await Proyecto.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: nuevoProyecto },
      { new: true }
    );
    res.json({ proyecto });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
};

//Elimino un proyecto por su id

exports.eliminarProyecto = async (req, res) => {
  try {
    //revisar el ID
    let proyecto = await Proyecto.findById(req.params.id);

    //revisar que exista el proyecto o no
    if (!proyecto) {
      return res.status(404).json({ msg: "Proyecto no encontrado" });
    }
    //verificar el creador del proyecto
    if (proyecto?.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No autorizado" });
    }

    // Eliminar el proyecto
    await Proyecto.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Proyecto eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
};
