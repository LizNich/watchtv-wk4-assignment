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

// Set up DB connection - link in the .env
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

// ROOT ROUTES //
app.get("/", (req, res) => res.json("Root route"));

// get
app.get("/watchtv", async function (req, res) {
  // return all from SQL table
  const result = await db.query("SELECT * from watchtv");
  const watchtv = result.rows;
  res.json(watchtv);
});

// post
app.post("/watchtv", async function (request, response) {
  const { username, message } = request.body;
  const result = await db.query(
    "INSERT INTO watchtv (username, message) VALUES ($1, $2)",
    [username, message]
  );
  response.json(result);
});

// Run Server
app.listen(8080, function () {
  console.log("App is running of PORT 8080");
});
