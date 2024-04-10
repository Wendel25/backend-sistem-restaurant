import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreatedCategoryController {
    async handle(req: Request, res: Response) {

        const { name } = req.body

        if(!name){
            throw new Error('name the category is requerid')
        }

        const createCategoryService = new CreateCategoryService();

        const category = await createCategoryService.execute({
            name
        });

        return res.json(category);
    }
}

export { CreatedCategoryController }