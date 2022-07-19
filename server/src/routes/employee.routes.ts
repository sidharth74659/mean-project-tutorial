import express from "express";
import controller from "../controllers/Employee.controller";

const app = express();

app.get("/", controller.employeeList);
app.get("/:id", controller.findEmployee);

app.post("/add", controller.addEmployee);

app.put("/update/:id", controller.updateEmployee);
app.delete("/delete/:id", controller.deleteEmployee);
