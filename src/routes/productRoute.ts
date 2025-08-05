import { Router, Request, Response } from "express";
import { ProductController } from "../controllers/productController";

const router = Router();
const productController = new ProductController();

router.post("/", async (req: Request, res: Response) => {
  try {
    const product = await productController.create(req.body);
    return res.status(201).json(product);
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    return res.status(400).json({
      error: error instanceof Error ? error.message : "Erro desconhecido ao criar produto",
    });
  }
});

router.get("/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    const data = await productController.getProduct(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ 
      error: error instanceof Error ? error.message : "Erro interno no servidor"});
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

router.delete("/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    const dell = await productController.deleteProduct(req.params.id);
    return res.status(200).json(dell);
  } catch (error) {
    console.error("erro detalhado:", error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : "Erro interno",
    });
  }
});

export default router;
