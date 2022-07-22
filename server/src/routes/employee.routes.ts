import express from "express";
import controller from "../controllers/employee.controller";

export const employeeRouter = express.Router();

employeeRouter.get("/", controller.employeeList);
employeeRouter.get("/:id", controller.findEmployee);

employeeRouter.post("/add", controller.addEmployee);

employeeRouter.post("/update/:id", controller.updateEmployee);
employeeRouter.post("/delete/:id", controller.deleteEmployee);