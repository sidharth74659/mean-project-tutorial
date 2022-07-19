import { config } from "./config/config";
// Using Mongoose
import express from "express";
import http from "http";
import mongoose from "mongoose";
import { connectToDB } from "./database";
// import { connectToDB } from "./database";

// Connect to MongoDB
connectToDB(config.mongo.url)
  .then(() => {
    console.log("Connected to database successfully");
    startServer();
  })
  .catch((err: any) => {
    console.error(err);
  });

// start the Express server on Successful connection to MongoDB
const startServer = () => {
  const app = express();

  /** Rules of our API */
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-with,Content-Type, Accept, Authorization"
    );

    if (req.method == "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
      // TODO : Tweak it to accept 'text' and json
      return res.status(200).json({});
    }
    next(); // Passing the request to the next handler, or the next middleware, otherwise the request will be blocked
  });

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // router.use(express.static("public"));

  /** Routes */

  /** Healthcheck*/
  app.get("/ping", (req, res, next) =>
    res.status(200).json({ message: "pong" })
  );

  /** Error handling*/
  app.use((req, res, next) => {
    const error = new Error("not found");

    return res.status(404).json({ message: error.message });
  });

  /** Start the server */
  http.createServer(app).listen(config.server.port, () => {
    console.log(`Server is running on port ${config.server.port}`);
  });
};

// ! @Using MongoDB Atlas :

// import cors from "cors";
// import express from "express";
// import * as dotenv from "dotenv";
// import { connectToDatabase, connectToDB } from "./database";
// import { employeeRouter } from "./routes/employee.routes";
// import mongoose from "mongoose";

// Load environment variables from the .env file, where the ATLAS_URI is configured
// dotenv.config();

// const { ATLAS_URI, PORT = 5200 } = process.env;

// if (!ATLAS_URI) {
//   console.error(
//     "No ATLAS_URI environment variable has been defined in config.env"
//   );
//   process.exit(1);
// }

// connectToDatabase(ATLAS_URI)
//   .then(() => {
//     const app = express();
//     app.use(cors());

//     app.use("/employees", employeeRouter);

//     // start the Express server
//     app.listen(PORT, () => {
//       console.log(`Server running at http://localhost:${PORT}...`);
//     });
//   })
//   .catch((error) => console.error(error));
