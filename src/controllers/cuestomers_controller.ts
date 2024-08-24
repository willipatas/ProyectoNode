import { QueryResult } from "pg";
import pool from "../database/databaseconnect";
import { Request, Response } from "express";

/** Obtiene los datos de la tabla Customers */

export const getCustomers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM customers');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal server error');
    }
};

export const getCustomersById = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;
    try {
        const response: QueryResult = await pool.query('SELECT * FROM customers WHERE id = $1;', [id]);
        return res.status(200).json(response.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal server error');
    }
};