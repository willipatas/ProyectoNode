import Express, { Router } from "express";
import pool from "./database/databaseconnect";
import { getCategories, getCategoriesById } from "./controllers/categories_controllers";

require('dotenv').config();

const app = Express();
const port = process.env.PORT;

const categoriesRouter = Router();

categoriesRouter.get('/categories', getCategories);
categoriesRouter.get('/categories/:id', getCategoriesById);


app.use(categoriesRouter);

app.listen(port, () => {
    return console.error(`Puerto usado ${port}`)
});