//Rutas de Modulo Bomberos

import { Router } from "express";
const router = Router();
import { 
  getGradosBomberos,
  mostrarBomberos,
  getBomberoId,
  getEstadosBomberos
 
} from "../controllers/bomberos.constroller";

router.get("/bomberos/grados", getGradosBomberos);
router.get("/bomberos/estados", getEstadosBomberos);
router.get("/bomberos", mostrarBomberos);
router.get('/bomberos/:id', getBomberoId);

export default router;