//Rutas de Modulo Bomberos

import { Router } from "express";
const router = Router();
import { 
  mostrarBomberos,
  getBomberoId,
  getGrados
} from "../controllers/bomberos.constroller";

router.get("/bomberos", mostrarBomberos);
router.get('/bomberos/:id', getBomberoId);

// envio de grados y estados de los bomberos

router.get("bomberos/grados", getGrados);

export default router;