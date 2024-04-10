import prismaClient from "../../prisma";

class ListCategoryService {
    async execute() {
        const categories = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true,
                products: {
                    select: {
                        id: true
                    }
                }
            }
        });

        const categoriesWithProductCount = categories.map(category => ({
            id: category.id,
            name: category.name,
            amountProducts: category.products.length
        }));

        return categoriesWithProductCount;
    }
}

export { ListCategoryService }
