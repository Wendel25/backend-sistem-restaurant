import prismaClient from "../../../prisma";
import { DetailRequest } from '../../../interface/orders/DetailRequest';

class DetailOrderService {
  async execute({ order_id }: DetailRequest) {

    const orders = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            price: true,
            description: true
          }
        },
        Order: {
          select: {
            id: true,
            table: true,
            status: true,
            draft: true,
            name: true,
          }
        },
      },
    });

    let totalValue = 0;
    orders.forEach(order => {
      totalValue += parseFloat(order.product.price);
    });

    const ordersWithTotal = {
      orders: orders.map(order => ({
        id: order.id,
        amount: order.amount,
        product: order.product,
        Order: order.Order,
      })),
      valuePrice: totalValue.toFixed(2)
    };

    return ordersWithTotal;
  }
}

export { DetailOrderService }
