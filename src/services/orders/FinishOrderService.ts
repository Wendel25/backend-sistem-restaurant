import prismaClient from "../../prisma";
import { FinishOrder } from './../../interface/orders/FinishOrder';

class FinishOrderService {
  async execute({ order_id }: FinishOrder) {

    const order = await prismaClient.order.update({
      where: {
        id: order_id
      },
      data: {
        status: true,
      }
    })

    return order;

  }
}

export { FinishOrderService }