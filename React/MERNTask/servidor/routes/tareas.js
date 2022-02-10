const express = require("express");
const router = express.Router();
const tareaController = require("../controllers/tareaController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//creo una tarea
//api/tareas
router.post(
  "/",
  auth,
  [check("nombre", "El nombre es obligatorio").not().isEmpty()],
  [check("proyecto", "El proyecto es obligatorio").not().isEmpty()],
  tareaController.crearTarea
);

//Obtengo las tareas por pryecto

router.get("/", auth, tareaController.obtenerTareas);

//actualizar una tarea

router.put("/:id", auth, tareaController.actualizarTarea);

// Eliminar una tarea
router.delete("/:id", auth, tareaController.eliminarTarea);
module.exports = router;
