import { Request, Response } from "express";
import { ListProductsActiveService } from "../../services/products/ListProductsActiveService";

class ListProductsActiveController {
    async handle(req: Request, res: Response) {
        const listProductsActives = new ListProductsActiveService();

        const product = await listProductsActives.execute()

        return res.json(product);

    }
}

export { ListProductsActiveController }