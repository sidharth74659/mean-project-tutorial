import cors from "cors";
import express from "express";
import * as dotenv from "dotenv";
import { connectToDatabase } from "./database";
import { employeeRouter } from "./routes/employee.routes";

// Load environment variables from the .env file, where the ATLAS_URI is configured
dotenv.config();

const { ATLAS_URI, PORT = 5200 } = process.env;

if (!ATLAS_URI) {
  console.error(
    "No ATLAS_URI environment variable has been defined in config.env"
  );
  process.exit(1);
}

connectToDatabase(ATLAS_URI)
  .then(() => {
    const app = express();
    app.use(cors());

    app.use("/employees", employeeRouter);

    // start the Express server
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}...`);
    });
  })
  .catch((error) => console.error(error));
