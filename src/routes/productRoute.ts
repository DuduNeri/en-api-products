import { Router, Request, Response} from "express";
import { ProductController } from "../controllers/productController";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const productController = new ProductController();
  const product = await productController.create(req.body);
  res.status(201).json(product);
})

export default router;