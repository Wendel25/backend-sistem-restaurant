import { Request, Response } from "express";
import { RemoveItemsService } from "../../../services/orders/Item/RemoveItemsService";

class RemoveItemController {
    async handle(req: Request, res: Response) {
        const item_id = req.query.item_id as string;

        const removeItemsService = new RemoveItemsService();

        if (!item_id) {
            throw new Error('item requerid')
        }

        const removeItem = await removeItemsService.execute({ item_id });

        return res.json({ message: 'Item deleted successfully!' })
    }
}

export { RemoveItemController }