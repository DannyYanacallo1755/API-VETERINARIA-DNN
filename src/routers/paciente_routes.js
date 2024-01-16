import {Router} from 'express'
const router = Router()

import {
    actualizarPaciente,
    detallePaciente,
    eliminarPaciente,
    listarPacientes,
    registrarPaciente,
    loginPaciente,
    perfilPaciente 
} from "../controllers/paciente_controller.js";

import verificarAutenticacion from "../middlewares/autenticacion.js";


// Ruta para el proceso de login
router.post('/paciente/login',loginPaciente)

// ruta para ver el perfil
router.get('/paciente/perfil',verificarAutenticacion,perfilPaciente)

// ruta para listar todos los pacientes
router.get("/pacientes",verificarAutenticacion,listarPacientes);

// ruta para registrar un paciente
router.get("/paciente/:id",verificarAutenticacion, detallePaciente);

// ruta para registrar un paciente
router.post("/paciente/registro", verificarAutenticacion,registrarPaciente);

// ruta paraactualizar un paciente
router.put("/paciente/actualizar/:id", verificarAutenticacion,actualizarPaciente);

// ruta para eliminar un paciente
router.delete("/paciente/eliminar/:id", verificarAutenticacion,eliminarPaciente);

export default router