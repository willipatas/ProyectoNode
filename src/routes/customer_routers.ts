import { Router } from "express";
import { createCustomer, deleteCustomer, getCustomers, getCustomersById, updateCustomers } from "../controllers/cuestomers_controller";

export const customersRouters = Router();

customersRouters.get('/customers', getCustomers);
customersRouters.get('/customers/:id', getCustomersById);
customersRouters.post('/createCustomers', createCustomer);
customersRouters.delete('/deleteCustomer/:id', deleteCustomer);
customersRouters.put('/updateCustomer/:id', updateCustomers);