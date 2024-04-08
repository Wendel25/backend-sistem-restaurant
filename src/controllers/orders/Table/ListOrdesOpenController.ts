import { Request, Response } from "express";
import { ListTablesOrdersService } from "../../../services/orders/Table/ListOrdensService";

class ListOrdersOpenController {
    async handle(req: Request, res: Response) {
        const listTableOpen = new ListTablesOrdersService();

        const tables = await listTableOpen.execute();

        return res.json(tables)
    }
}

export { ListOrdersOpenController }