import prismaClient from "../../prisma";
import { AuthRequest } from '../../interface/user/AuthUserInterface';
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken'

class AuthUserService {
    async execute({ email, password }: AuthRequest) {

        const findEmailUser = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!findEmailUser) {
            throw new Error("User/password incorrect")
        }

        const passwordMatch = await compare(password, findEmailUser.password);

        if (!passwordMatch) {
            throw new Error("User/password incorrect")
        }

        const token = sign(
            {
                name: findEmailUser.name,
                email: findEmailUser.email,
            },
            process.env.SECRET_KEY,
            {
                subject: findEmailUser.id,
                expiresIn: '7d'
            }
        )

        return {
            id: findEmailUser.id,
            name: findEmailUser.name,
            email: findEmailUser.email,
            token: token
        }
    }
}

export { AuthUserService }