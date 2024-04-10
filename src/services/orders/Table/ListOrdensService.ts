import prismaClient from "../../../prisma";

class ListTablesOrdersService {
    async execute() {
        const getTables = await prismaClient.order.findMany({
            where:{
                status: false
            },
            select: {
                id: true,
                name: true,
                table: true,
                status: true,
                draft: true,
            }
        })

        return getTables;
    }
}

export { ListTablesOrdersService }