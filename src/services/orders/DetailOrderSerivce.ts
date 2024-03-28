import prismaClient from "../../prisma";
import { DetailRequest } from './../../interface/orders/DetailRequest';

class DetailOrderService {
  async execute({ order_id }: DetailRequest) {

    const orders = await prismaClient.item.findMany({
      where: {
        order_id: order_id
      },
      include: {
        product: true,
        Order: true,
      }
    })

    return orders;
  }
}

export { DetailOrderService }