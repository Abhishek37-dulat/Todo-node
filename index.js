import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import Connection from "./database/db.js";
import routes from "./routes/route.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

Connection();

app.listen(PORT, () => {
  console.log("listening to PORT: ", PORT);
});
