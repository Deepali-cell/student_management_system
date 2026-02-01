import express from "express";
import {
  addStudent,
  allStudents,
  deleteStudent,
  editStudent,
  singleStudentData,
} from "../controllers/studentController.js";

const studentRoute = express.Router();

studentRoute.post("/add", addStudent);
studentRoute.delete("/delete/:studentid", deleteStudent);
studentRoute.put("/edit/:studentid", editStudent);
studentRoute.get("/getstudents", allStudents);
studentRoute.get("/studentdata/:studentid", singleStudentData);

export default studentRoute;
