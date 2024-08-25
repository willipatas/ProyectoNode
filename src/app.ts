import Express, { Router } from "express";
import bodyParser from "body-parser";
import pool from "./database/databaseconnect";
import { errorHandler } from "./middleware/error";
import { customersRouters } from "./routes/customer_routers";
import { categoriesRouter } from "./routes/categorie_routes";
import { userRoutes } from "./routes/user_routers";


require('dotenv').config();

const app = Express();
const port = process.env.PORT;

app.use(Express.json());
app.use(errorHandler);
app.use(categoriesRouter);
app.use(userRoutes);
app.use(customersRouters);

app.listen(port, () => {
    return console.error(`Puerto usado ${port}`)
});