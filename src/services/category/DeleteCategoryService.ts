import prismaClient from "../../prisma";
import { DeleteCategoryInterface } from "../../interface/category/DeleteCategoryInterface";

class DeleteCategoryService {
    async execute({ id }: DeleteCategoryInterface) {
        const order = await prismaClient.category.delete({
            where: {
                id: id
            }
        })

        return order;
    }
}

export { DeleteCategoryService }