import prismaClient from "../../prisma";
import { RemoveOrder } from './../../interface/orders/RemoveOrder';

class RemoveOrderService {
    async execute({ order_id }: RemoveOrder) {
        const order = await prismaClient.order.delete({
            where: {
                id: order_id
            }
        })

        return order;
    }
}

export { RemoveOrderService }