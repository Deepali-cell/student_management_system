import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    studentid: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    age: {
      type: Number,
      min: 1,
      max: 100,
    },
    course: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      enum: ["A", "B", "C", "D"],
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
    },
    skills: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true },
);

const Student = mongoose.model("student", studentSchema);

export default Student;
