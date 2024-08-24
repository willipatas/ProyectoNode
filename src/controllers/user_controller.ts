import { error } from "console";
import { NextFunction, Request, Response } from "express";
import { request } from "http";
import jwt from "jsonwebtoken";

require('dotenv').config();

export const generateToken = (req: Request, response:Response): Response => {
    const userName = req.body.username;
    const user = {name: userName};
    const accessToken = jwt.sign(user, `${process.env.CLAVE_JWT}`, {expiresIn: '1h'});
    return response.status(200).json({accessToken});
};

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
