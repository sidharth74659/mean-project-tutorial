import { Request, Response } from "express";
import Employee from "../models/employee.model";

// @Employee List
const employeeList = (req: Request, res: Response) => {
  return Employee.find({})
    .then((employees) => res.status(200).json({ employees }))
    .catch((error) => res.status(500).send(error.message));
};

// @Add Employee
const addEmployee = (req: Request, res: Response) => {
  const employeeData = req.body;

  const employee = new Employee(employeeData);

  return employee
    .save()
    .then(() =>
      res.status(201).send(`Created a new employee: ID ${employee._id}.`)
    )
    .catch((error) => res.status(500).send(error.message));
};

// @Find Employee
const findEmployee = (req: Request, res: Response) => {
  const id = req.params.id;

  return Employee.findById(id)
    .then((employee) => {
      if (employee) {
        res.status(200).send(employee);
      } else {
        res.status(404).send(`Can't Find Employee`);
      }
    })
    .catch((error) =>
      res.status(500).send(`Failed to find an employee: ID ${id}`)
    );
};

// @Update Employee
const updateEmployee = (req: Request, res: Response) => {
  const id = req.params.id;

  return Employee.findByIdAndUpdate(id, req.body, { new: true })
    .then((employee) => {
      res.status(201).send(`Updated employee: ID ${id}.`);  
    })
    .catch((error) =>
      res.status(500).send(`Failed to find an employee: ID ${id}`)
    );
};

// @Delete Employee
const deleteEmployee = (req: Request, res: Response) => {
  const id = req.params.id;

  return Employee.findByIdAndDelete(id)
    .then((employee) => {
      if (employee) {
        res.status(201).send(`Deleted employee: ID ${id}.`);
      } else {
        res.status(404).send(`Not found to Delete`);
      }
    })
    .catch((error) =>
      res.status(500).send(`Failed to find an employee: ID ${id}`)
    );
};

export default {
  employeeList,
  addEmployee,
  findEmployee,
  updateEmployee,
  deleteEmployee,
};
