//Rutas de Modulo Bomberos

import { Router } from "express";
const router = Router();
import { 
  mostrarBomberos,
  getBomberoId 
} from "../controllers/bomberos.constroller";

router.get("/bomberos", mostrarBomberos);
router.get('/bombero/:id', getBomberoId);



export default router;