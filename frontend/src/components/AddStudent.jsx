import { useContext, useState } from "react";
import axios from "axios";
import StateContext from "../context/StateContext";

const AddStudent = () => {
  const { students, setStudents, backend_url, getAllStudents } =
    useContext(StateContext);

  // Controlled form state
  const [form, setForm] = useState({
    studentid: "",
    fullname: "",
    email: "",
    age: "",
    course: "",
    grade: "",
    status: "",
    skills: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${backend_url}/add`, form);

      if (data.success) {
        setStudents([...students, data.newStudent]);
      } else {
        console.log(data.message || "Some error while adding student");
      }
    } catch (error) {
      console.log("Some error while adding student:", error.message);
    } finally {
      setForm({
        studentid: "",
        fullname: "",
        email: "",
        age: "",
        course: "",
        grade: "",
        status: "",
        skills: [],
      });
      getAllStudents();
    }
  };

  return (
    <form className="box" id="student_form" onSubmit={handleSubmit}>
      <h3 className="heading">+ Add New Student</h3>
      <hr />

      <div>
        <label htmlFor="add_student_id">Student Id</label>
        <input
          type="text"
          id="add_student_id"
          name="studentid"
          value={form.studentid}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="add_fullname">Full Name *</label>
        <input
          type="text"
          id="add_fullname"
          name="fullname"
          required
          value={form.fullname}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="add_email">Email *</label>
        <input
          type="text"
          id="add_email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="add_age">Age *</label>
        <input
          type="number"
          id="add_age"
          name="age"
          required
          value={form.age}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="add_course">Course *</label>
        <select
          id="add_course"
          name="course"
          required
          value={form.course}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Course
          </option>
          <option value="web_development">Web Development</option>
          <option value="mobile_development">Mobile Development</option>
          <option value="data_science">Data Science</option>
          <option value="ui_ux_design">UI/UX Design</option>
        </select>
      </div>

      <div>
        <label htmlFor="add_grade">Grade *</label>
        <select
          id="add_grade"
          name="grade"
          required
          value={form.grade}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Grade
          </option>
          <option value="A">Grade A</option>
          <option value="B">Grade B</option>
          <option value="C">Grade C</option>
          <option value="D">Grade D</option>
        </select>
      </div>

      <div>
        <label>Status *</label>
        <br />

        <input
          type="radio"
          name="status"
          id="add_active"
          value="Active"
          checked={form.status === "Active"}
          onChange={handleChange}
        />
        <label htmlFor="add_active">Active</label>

        <input
          type="radio"
          name="status"
          id="add_inactive"
          value="Inactive"
          checked={form.status === "Inactive"}
          onChange={handleChange}
        />
        <label htmlFor="add_inactive">Inactive</label>
      </div>

      <div>
        {["HTML", "CSS", "JavaScript", "React", "Node.js"].map((skill) => (
          <span key={skill} style={{ marginRight: "10px" }}>
            <input
              type="checkbox"
              name="skills"
              value={skill}
              checked={form.skills.includes(skill)}
              onChange={(e) => {
                const { checked, value } = e.target;
                setForm((prev) => ({
                  ...prev,
                  skills: checked
                    ? [...prev.skills, value]
                    : prev.skills.filter((s) => s !== value),
                }));
              }}
            />
            <label>{skill}</label>
          </span>
        ))}
      </div>

      <div>
        <button className="add_btn btn" type="submit">
          Add Student
        </button>
        <button
          className="reset_btn btn"
          type="button"
          onClick={() =>
            setForm({
              studentid: "",
              fullname: "",
              email: "",
              age: "",
              course: "",
              grade: "",
              status: "",
              skills: [],
            })
          }
        >
          Reset Form
        </button>
      </div>
    </form>
  );
};

export default AddStudent;
