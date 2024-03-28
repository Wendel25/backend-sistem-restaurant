
import { UserRequest } from '../../interface/user/InterfaceUser';
import prismaClient from '../../prisma/index';
import { hash } from 'bcryptjs'

class CreateUsersService {
    async execute({ name, email, password }: UserRequest) {

        if (!email) {
            throw new Error("Email incorrect")
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        const passwordHash = await hash(password, 8);

        const userCreate = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return userCreate;
    }
}

export { CreateUsersService }