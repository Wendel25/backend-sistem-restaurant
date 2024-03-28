import { Request, Response } from 'express'
import { FinishOrderService } from '../../services/orders/FinishOrderService';

class FinishOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;

    const finishOrderService = new FinishOrderService();

    if(!order_id){
      throw new Error('order requerid')
    }

    const order = await finishOrderService.execute({
      order_id
    })

    return res.json(order);

  }
}

export { FinishOrderController }