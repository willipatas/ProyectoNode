import { Router } from "express";
import { createCategories, deleteCategories, getCategories, getCategoriesById, updateCategories } from "../controllers/categories_controllers";
import { authenticateToken } from "../middleware/authorization";

export const categoriesRouter = Router();

categoriesRouter.get('/categories', authenticateToken, getCategories);
categoriesRouter.get('/categories/:id', authenticateToken, getCategoriesById);
categoriesRouter.post('/createCategories', authenticateToken, createCategories);
categoriesRouter.delete('/deleteCategories/:id', authenticateToken, deleteCategories);
categoriesRouter.put('/updateCategories/:id', authenticateToken, updateCategories);