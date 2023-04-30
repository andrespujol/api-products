import { Router } from "express";
import productsController from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/", productsController.getAll);

productsRouter.get("/:id", productsController.getOne);
productsRouter.post("/", productsController.create);
productsRouter.delete("/:id", productsController.delete);
productsRouter.put("/:id", productsController.update);

export default productsRouter;
