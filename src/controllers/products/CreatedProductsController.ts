import { Request, Response } from "express";
import { CreatedProductService } from "../../services/products/CreatedProductService";

class CreatedProductsController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id } = req.body;

        const createdProductService = new CreatedProductService();

        if (!name || !price || !category_id) {
            res.status(400).json({ error: "fields invalid" })
            return;
        } else {
            let banner = '';

            if (req.file) {
                const { originalname, filename } = req.file;
                banner = filename;
            }

            const products = await createdProductService.execute({ name, price, description, banner, category_id });

            return res.json(products);
        }
    }
}

export { CreatedProductsController };
