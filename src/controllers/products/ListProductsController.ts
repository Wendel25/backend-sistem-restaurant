import { Request, Response } from "express";
import { ListProductsService } from "../../services/products/ListProductsServices";

class ListProductsController {
    async handle(req: Request, res: Response) {
        const listProducts = new ListProductsService();

        const category = await listProducts.execute()

        return res.json(category);

    }
}

export { ListProductsController }