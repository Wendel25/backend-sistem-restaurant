import { Request, Response } from "express";
import { CreateOrderService } from "../../../services/orders/Table/CreateOrderService";

class CreateOrderController {
    async handle(req: Request, res: Response) {
        const { table, name } = req.body;

        const createOrderService = new CreateOrderService();

        const orders = await createOrderService.execute({ table, name });

        return res.json(orders);
    }
}

export { CreateOrderController }