import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";

class DeleteCategoryController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;

        const removeCategory = new DeleteCategoryService()

        if (!id) {
            throw new Error('id requerid')
        }

        await removeCategory.execute({ id });

        return res.json({ message: 'Category deleted successfully' })
    }
}

export { DeleteCategoryController }