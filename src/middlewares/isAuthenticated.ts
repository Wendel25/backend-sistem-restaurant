import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { Payload } from "../interface/user/PayloadInterface";

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({error: 'missing token'}).end();
    }

    const [, token] = authToken.split(" ")

    try {
        const { sub } = verify(
            token,
            process.env.SECRET_KEY
        ) as Payload;

        req.user_id = sub;

        return next();
    } catch (err) {
        return res.status(401).json({error: 'token invalid'}).end();
    }
}