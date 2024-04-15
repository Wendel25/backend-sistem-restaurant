import { Request, Response } from "express";
import { ListProductDisabledService } from "../../services/products/ListProductDisabled";

class ListProductDisabledController {
    async handle(req: Request, res: Response) {
        const listProductsDisabled = new ListProductDisabledService();

        const product = await listProductsDisabled.execute()

        return res.json(product);
    }
}

export { ListProductDisabledController }