import { Request, Response } from "express";
import { CreatedProductService } from "../../services/products/CreatedProductService";

class CreatedProductsController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id } = req.body;

        const createdProductService = new CreatedProductService();

        if (!name || !price || !category_id) {
            res.status(400).json({error: "fields invalid"})
            return;
        } else if (!req.file) {
            throw new Error("error upload file")
        } else {

            const { originalname, filename: banner } = req.file

            const products = await createdProductService.execute({ name, price, description, banner, category_id });

            return res.json(products)
        }
    }
}

export { CreatedProductsController }