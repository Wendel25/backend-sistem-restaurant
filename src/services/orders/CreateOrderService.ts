import prismaClient from "../../prisma";
import { OrderRequest } from "../../interface/orders/OrderRequest";

class CreateOrderService {
    async execute({ table, name }: OrderRequest) {

        const findNumberTable = await prismaClient.order.findFirst({
            where: {
                table: table
            }
        })

        if (findNumberTable) {
            throw new Error("The table is open!");
        }

        const order = await prismaClient.order.create({
            data: {
                table: table,
                name: name
            }
        })

        return order;
    }
}

export { CreateOrderService }