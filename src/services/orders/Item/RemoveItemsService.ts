import prismaClient from "../../../prisma";
import { RemoveItem } from "../../../interface/orders/RemoveItem";

class RemoveItemsService {
    async execute({ item_id }: RemoveItem) {
        const order = await prismaClient.item.delete({
            where: {
                id: item_id
            }
        })

        return order;
    }
}

export { RemoveItemsService }