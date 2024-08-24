import Express, { Router } from "express";
import bodyParser from "body-parser";
import pool from "./database/databaseconnect";
import { createCategories, getCategories, getCategoriesById, updateCategories, deleteCategories } from "./controllers/categories_controllers";

require('dotenv').config();

const app = Express();
const port = process.env.PORT;

const categoriesRouter = Router();
categoriesRouter.get('/categories', getCategories);
categoriesRouter.get('/categories/:id', getCategoriesById);
categoriesRouter.post('/createCategories', createCategories);
categoriesRouter.delete('/deleteCategories/:id', deleteCategories);
categoriesRouter.put('/updateCategories/:id', updateCategories);

app.use(Express.json());
app.use(categoriesRouter);

app.listen(port, () => {
    return console.error(`Puerto usado ${port}`)
});