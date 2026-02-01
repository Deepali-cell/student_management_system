import express from "express";
import "dotenv/config.js";
import connectDb from "./services/connectDb.js";
import cors from "cors";
import studentRoute from "./routes/studentRoute.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const options = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(options));
connectDb();

app.get("/", (req, res) => {
  res.send("server is working");
});

app.use("/api/v1", studentRoute);
app.listen(3000, () => {
  console.log("server is working");
});
