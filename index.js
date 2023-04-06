import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import dotenv from "dotenv";

dotenv.config();

import Connection from "./Database/Db.js";
import route from "./Routes/Route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", route);

Connection();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
