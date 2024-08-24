import { QueryResult } from "pg";
import pool from "../database/databaseconnect";
import { Request, Response } from "express";

/**
 * Obtiene todos los datos de la tabla Categories
 * @param req 
 * @param res 
 * @returns Categories
 */

export const getCategories = async (req: Request, res:Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM categories;');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
};

/**
 * Obtiene todos los datos de la tabla Categories por Id
 * @param req 
 * @param res 
 * @returns Categories por Id
 */
export const getCategoriesById = async (req: Request, res:Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    try {

        const response: QueryResult = await pool.query('SELECT * FROM categories WHERE category_id = $1', [id]);
        return res.json(response.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
};

