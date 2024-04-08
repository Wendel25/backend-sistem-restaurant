import { format } from 'date-fns-tz';
import prismaClient from "../../prisma";

class ListOrdersService {
  async execute() {
    const orders = await prismaClient.order.findMany({
      where: {
        draft: false,
        status: false,
      },
      select: {
        id: true,
        table: true,
        status: true,
        draft: true,
        name: true,
        created_at: true,
      },
      orderBy: {
        created_at: 'asc'
      }
    });

    const formattedOrders = orders.map(order => {
      const formattedDate = format(new Date(order.created_at), "HH:mm:ss", { timeZone: 'America/Sao_Paulo' });
      return { ...order, created_at: formattedDate };
    });

    return formattedOrders;
  }
}

export { ListOrdersService };
