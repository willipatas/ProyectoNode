import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

require('dotenv').config();

export const authenticateToken = (req: Request, res:Response, next: NextFunction) => {
    const authHeaders = req.headers ['authorization'];
    const token = authHeaders && authHeaders.split(' ')[1];
    if(!token) {
        return res.status(401).json({error: 'Token no encontrado'});
    }
    jwt.verify(token, `${process.env.CLAVE_JWT}`, (err, user) => {
        if(err) {
            return res.status(403).json({error: 'Token invalido.'});
        }

    });
    next();
}
