import prismaClient from "../../prisma";
import { SendOrders } from "../../interface/orders/SendOrders";

class SendOrderService {
  async execute({ order_id }: SendOrders) {
    const order = await prismaClient.order.update({
      where: {
        id: order_id
      },
      data: {
        draft: false
      }
    })

    return order;
  }
}

export { SendOrderService }