import * as mongodb from "mongodb";
import { Employee } from "./ts/models/employee.model";
import { EmpCollectionType } from "./ts/types/EmpCollectionType";

export const collections: EmpCollectionType = {};

export async function connectToDatabase(uri: string) {
  const client = new mongodb.MongoClient(uri);
  await client.connect();

  const db = client.db("meanStackExample");
  await applySchemaValidation(db);

  collections.employees = db.collection<Employee>("employees");
}

// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Employee model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applySchemaValidation(db: mongodb.Db) {
  const jsonSchema = {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "position", "level"],
      additionalProperties: false,
      properties: {
        _id: {},
        name: {
          bsonType: "string",
          description: "'name' is required and is a string",
        },
        position: {
          bsonType: "string",
          minLength: 5,
          description: "'position' is required and is a string",
        },
        level: {
          bsonType: "string",
          enum: ["junior", "mid", "senior"],
          description:
            "'level' is required and is one of 'junior', 'mid', or 'senior'",
        },
      },
    },
  };

  // Try applying the modification to the collection,
  // if the collection doesn't exist, create it
  await db
    .command({
      collMod: "employees",
      validator: jsonSchema,
    })
    .catch(async (error: mongodb.MongoServerError) => {
      if (error.codeName === "NamespaceNotFound") {
        await db.createCollection("employees", { validator: jsonSchema });
      }
    });
}
