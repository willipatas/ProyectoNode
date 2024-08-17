import Express, { Router } from "express";
import pool from "./database/databaseconnect";
import { getCategories } from "./controllers/categories_controllers";

require('dotenv').config();

const app = Express();
const port = process.env.PORT;

const categoriesRouter = Router();

categoriesRouter.get('/categories', getCategories);

// app.get('/', async (req, res) => {
//     const query = 'select * from employees;';
//     const response = await pool.query(query);
//     console.log(response);
//     res.send('Hola mundo');
// });

app.use(categoriesRouter);

app.listen(port, () => {
    return console.error(`Puerto usado ${port}`)
});