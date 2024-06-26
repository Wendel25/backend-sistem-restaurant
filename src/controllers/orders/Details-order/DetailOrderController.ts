import { Request, Response } from 'express'
import { DetailOrderService } from '../../../services/orders/Details-order/DetailOrderSerivce';


class DetailOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const detailOrderService = new DetailOrderService();

    if(!order_id){
      throw new Error('order requerid')
    }

    const orders = await detailOrderService.execute({
      order_id
    })

    return res.json(orders);
  }
}

export { DetailOrderController }