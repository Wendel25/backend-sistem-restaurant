import prismaClient from "../../prisma";
import { ListProductRequest } from "../../interface/products/ListProductRequest";

class ListByCategoryService {
    async execute({ category_id }: ListProductRequest) {
        const findByCategory = await prismaClient.product.findMany({
            where:{
                category_id: category_id,
                active: true
            },
            orderBy: {
                name: "asc"
            }
        })

        return findByCategory;
    }
}

export { ListByCategoryService }