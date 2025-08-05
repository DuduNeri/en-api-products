import { Router, Request, Response } from "express";
import { ProductController } from "../controllers/productController";

const router = Router();
const productController = new ProductController();

router.post("/", async (req: Request, res: Response) => {
  const product = await productController.create(req.body);
  res.status(201).json(product);
});

router.get("/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    const data = await productController.getProduct(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: "Erro desconhecido" });
  }
});

router.get("/", async (_req: Request, res: Response) => {
  try {
    const get = await productController.getAll();
    return res.status(200).json(get);
  } catch (error) {
    console.error("erro detalhado:", error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : "Erro interno",
    });
  }
});

export default router;
