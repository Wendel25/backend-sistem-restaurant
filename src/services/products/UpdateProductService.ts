// Service
import prismaClient from "../../prisma";
import { UpdateProduct } from "../../interface/products/UpdateProduct";

class UpdateProductService {
    async execute({ product_id, name, price, description, banner, active, category_id }: UpdateProduct) {
        try {
            const updatedProduct = await prismaClient.product.update({
                where: {
                    id: product_id
                },
                data: {
                    name,
                    price,
                    description,
                    banner,
                    active,
                    category_id
                }
            });
            return updatedProduct;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to update product - service');
        }
    }
}

export { UpdateProductService };