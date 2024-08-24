import Express, { Router } from "express";
import bodyParser from "body-parser";
import pool from "./database/databaseconnect";
import { createCategories, getCategories, getCategoriesById, updateCategories, deleteCategories } from "./controllers/categories_controllers";
import { generateToken } from "./controllers/user_controller";
import { authenticateToken } from "./middleware/authorization";
import { getCustomers } from "./controllers/cuestomers_controller";
import { errorHandler } from "./middleware/error";


require('dotenv').config();

const app = Express();
const port = process.env.PORT;

const categoriesRouter = Router();
const userRoutes = Router();
const customersRouters = Router();

categoriesRouter.get('/categories', authenticateToken, getCategories);
categoriesRouter.get('/categories/:id', authenticateToken, getCategoriesById);
categoriesRouter.post('/createCategories', authenticateToken, createCategories);
categoriesRouter.delete('/deleteCategories/:id', authenticateToken, deleteCategories);
categoriesRouter.put('/updateCategories/:id', authenticateToken, updateCategories);
userRoutes.post('/api/login', generateToken);
customersRouters.get('/customers', getCustomers);


app.use(Express.json());
app.use(errorHandler);
app.use(categoriesRouter);
app.use(userRoutes);
app.use(customersRouters);

app.listen(port, () => {
    return console.error(`Puerto usado ${port}`)
});