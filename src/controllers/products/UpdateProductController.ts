import { Request, Response } from "express";
import { UpdateProductService } from "../../services/products/UpdateProductService";

class UpdateProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;
        const { name, price, description, active, category_id } = req.body;

        const activeBool = active === 'true';

        const { originalname, filename: banner } = req.file

        const updateProductService = new UpdateProductService();

        try {
            const updatedProduct = await updateProductService.execute({
                product_id,
                name,
                price,
                description,
                banner,
                active: activeBool,
                category_id
            });

            return res.status(200).json(updatedProduct);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'Failed to update product - controller' });
        }
    }
}

export { UpdateProductController };
