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

export const createCategories = async (req: Request, res:Response): Promise<Response> => {
    const {categoryId, categoryName, categoryDescription} = req.body;

    if (categoryId !== null && categoryName !== null && categoryDescription !== null) {
        try {
            await pool.query('INSERT INTO categories (category_id, category_name, description) values ($1, $2, $3)',
                [categoryId, categoryName, categoryDescription]
            );
            return res.status(201).json({
                message: 'Categoria creada satisfactoriamente',
                category: {
                    categoryId,
                    categoryName,
                    categoryDescription,
                }
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json('Internal Server Error');
        }
    } else {
        return res.status(500).json('Internal Server Error');
    }
};
