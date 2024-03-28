import { Request, Response } from 'express';
import { CreateUsersService } from '../../services/user/CreateUserService';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body

        const createUsersService = new CreateUsersService();

        const user = await createUsersService.execute({ name, email, password });

        return res.json(user)
    }
}

export { CreateUserController };
