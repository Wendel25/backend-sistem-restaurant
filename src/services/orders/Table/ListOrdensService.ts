import prismaClient from "../../../prisma";

class ListTablesOrdersService {
    async execute() {
        const getTables = await prismaClient.order.findMany({
            select: {
                id: true,
                table: true,
                status: true,
                draft: true,
                name: true,
            }
        })

        return getTables;
    }
}

export { ListTablesOrdersService }