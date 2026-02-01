import Student from "../models/studentModel.js";

const addStudent = async (req, res) => {
  try {
    const data = {
      ...req.body,
      age: Number(req.body.age),
      grade: (req.body.grade || "").toUpperCase(),
    };
    const existingStudent = await Student.findOne({ email: req.body.email });
    if (existingStudent) {
      return res.status(409).json({
        success: false,
        message: "Student already added with this email",
      });
    }
    const newStudent = await Student.create(data);
    if (!newStudent) {
      return res.status(400).json({
        success: false,
        message: "Student not added properly! Something is wrong",
      });
    }
    return res
      .status(201)
      .json({ succes: true, message: "Student added successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Some Backend Error" });
  }
};
const deleteStudent = async (req, res) => {
  try {
    const { studentid } = req.params;
    await Student.findOneAndDelete({ studentid });
    return res
      .status(200)
      .json({ success: true, message: "User deleted Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Some Backend Error" });
  }
};
const editStudent = async (req, res) => {
  try {
    const { studentid } = req.params;
    const data = {
      ...req.body,
      age: Number(req.body.age),
      grade: (req.body.grade || "").toUpperCase(),
    };
    const existingStudent = await Student.findOne({ studentid });
    if (!existingStudent) {
      return res.status(404).json({
        success: false,
        message: "Student Not found",
      });
    }

    await Student.findOneAndUpdate({ studentid }, data, { new: true });
    return res
      .status(200)
      .json({ success: true, message: "Student updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Some Backend Error" });
  }
};
const allStudents = async (req, res) => {
  try {
    const students = await Student.find();
    if (students.length < 1) {
      return res.status(204).json({
        success: false,
        message: "Data is not found or Data is not added",
      });
    }
    return res
      .status(200)
      .json({ success: true, message: "Data found sucessfully", students });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Some Backend Error" });
  }
};
const singleStudentData = async (req, res) => {
  try {
    const { studentid } = req.params;
    const findStudent = await Student.findOne({ studentid });
    if (!findStudent) {
      return res
        .status(404)
        .json({ success: false, message: "Student data not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Student data found successfully",
      studentData: findStudent,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Some Backend Error" });
  }
};

export {
  addStudent,
  editStudent,
  deleteStudent,
  allStudents,
  singleStudentData,
};
