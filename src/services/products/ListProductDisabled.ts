import prismaClient from "../../prisma";

class ListProductDisabledService {
    async execute() {
        const getProductDisabled = await prismaClient.product.findMany({
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
            where: {
                active: false
            },
            orderBy: {
                name: "asc"
            }
        })

        const groupProductByCategory = getProductDisabled.reduce((name, product) => {
            const categoryName = product.category.name;

            if (!name[categoryName]) {
                name[categoryName] = []
            }

            name[categoryName].push({
                ...product,
                category: categoryName
            })

            return name;
        }, {})

        return groupProductByCategory;
    }
}

export { ListProductDisabledService }