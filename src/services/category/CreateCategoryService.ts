import prismaClient from "../../prisma";
import { CategoryRequestInterface } from "../../interface/category/CategoryRequestInterface";

class CreateCategoryService {
    async execute({ name }: CategoryRequestInterface) {
        if (name === '') {
            throw new Error('Name Invalid')
        }

        const nameAlreadyExists = await prismaClient.category.findFirst({
            where: {
                name: name
            }
        })

        if (nameAlreadyExists) {
            throw new Error('Category already exists')
        }

        const category = await prismaClient.category.create({
            data: {
                name: name
            },
            select: {
                id: true,
                name: true
            }
        })

        return category
    }
}

export { CreateCategoryService }