import prismaClient from "../../prisma";
import { ProductRequest } from "../../interface/products/ProductRequest";

class CreatedProductService {
    async execute({ name, price, description, banner, category_id }: ProductRequest) {
        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id,
            }
        })

        return product;
    }
}

export { CreatedProductService }