import dotenv from "dotenv";

dotenv.config();

const MONGO_USERNAME: string = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || "";

const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@mean-project-tutorial.4gbgwyo.mongodb.net/?retryWrites=true&w=majority`;


const SERVER_PORT = process.env.SERVER_PORT || 5200;

export const config = {
  mongo: {
    url: MONGO_URL,
  },
  server: {
    port: SERVER_PORT,
  }
};