// Set up Nodes
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

// Set up Server
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config(); // link to .env

// Set up DB connection
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL }); // DB url is in the .env

app.get("/", function (request, response) {
  response.json("Rout Route");
});

app.get("/watchtv", async function (request, response) {
  const result = await db.query("SELECT * FROM watchtv");
  const watchtv = result.rows;
  response.json(watchtv);
});

app.listen(8080, function () {
  console.log("App is running of PORT 8080");
});
