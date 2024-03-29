import {Router} from 'express'
import {
    detalleTratamiento,
    registrarTratamiento,
    actualizarTratamiento,
    eliminarTratamiento,
    cambiarEstado
} from "../controllers/tratamiento_controller.js";
import verificarAutenticacion from "../middlewares/autenticacion.js";


const router = Router()

router.post('/tratamiento/registro',verificarAutenticacion,registrarTratamiento)
router.get('/tratamiento/:id',verificarAutenticacion,detalleTratamiento)
router.put('/tratamiento/:id',verificarAutenticacion,actualizarTratamiento)
router.delete('/tratamiento/:id',verificarAutenticacion,eliminarTratamiento)
router.post('/tratamiento/estado/:id',verificarAutenticacion,cambiarEstado)


export default router