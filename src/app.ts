import Express, { Router } from "express";
import bodyParser from "body-parser";
import pool from "./database/databaseconnect";
import { createCategories, getCategories, getCategoriesById } from "./controllers/categories_controllers";

require('dotenv').config();

const app = Express();
const port = process.env.PORT;

const categoriesRouter = Router();

app.use(Express.json());


categoriesRouter.get('/categories', getCategories);
categoriesRouter.get('/categories/:id', getCategoriesById);
categoriesRouter.post('/createCategories', createCategories);


app.use(categoriesRouter);

app.listen(port, () => {
    return console.error(`Puerto usado ${port}`)
});