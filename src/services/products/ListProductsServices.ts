import prismaClient from "../../prisma";

class ListProductsService {
    async execute() {
        const products = await prismaClient.product.findMany({
            select: {
                id: true,
                name: true,
                price: true,
                banner: true,
                description: true,
                active: true,
                category: {
                    select: {
                        name: true
                    }
                }
            },
            orderBy: {
                name: "asc"
            }
        });

        const groupedProducts = products.reduce((namesCategories, product) => {
            const categoryName = product.category.name;
            if (!namesCategories[categoryName]) {
                namesCategories[categoryName] = [];
            }
            namesCategories[categoryName].push({
                ...product,
                category: { name: categoryName }
            });
            return namesCategories;
        }, {});

        return groupedProducts;
    }
}

export { ListProductsService };
