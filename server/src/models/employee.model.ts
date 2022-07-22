// @Using Mongoose :

import mongoose, { Document, Schema, Model } from "mongoose";

// @reusable interface for the Employee
export interface IEmployee {
  name: string;
  position: string;
  level: "junior" | "mid" | "senior";
}

// @interface for the Employee Model(contains _id,...)
export interface IEmployeeModel extends IEmployee, Document {}

const EmployeeSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    description: "'name' is required and is a string",
  },
  position: {
    type: String,
    required: true,
    minLength: 5,
    description: "'position' is required and is a string",
  },
  level: {
    type: String,
    enum: ["junior", "mid", "senior"],
    required: true,
    description:
      "'level' is required and is one of 'junior', 'mid', or 'senior'",
  },
});

// const documentCollectionName = "Employee";
const documentCollectionName = "employees";

const Employee: Model<IEmployeeModel> = mongoose.model<IEmployeeModel>(
  documentCollectionName,
  EmployeeSchema
);

export default Employee;

// @Using MongoDB Atlas :
// import * as mongodb from "mongodb";

// export interface Employee {
//   name: string;
//   position: string;
//   level: "junior" | "mid" | "senior";
//   _id?: mongodb.ObjectId;
// }
