import * as mongodb from "mongodb";
import { Employee } from "../models/employee.model";

export type EmpCollectionType = {
  employees?: mongodb.Collection<Employee>;
};
