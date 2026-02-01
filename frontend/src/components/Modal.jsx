import { useEffect, useState } from "react";

const Modal = ({ setOpen, currentEditData, handleSaveEditData }) => {
  const [formData, setFormData] = useState({
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
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const skills = prev.skills.includes(value)
          ? prev.skills.filter((s) => s !== value)
          : [...prev.skills, value];
        return { ...prev, skills };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveEditData(formData, currentEditData.studentid);
    setOpen(false);
  };
  useEffect(() => {
    function setData() {
      if (currentEditData) {
        setFormData({
          studentid: currentEditData.studentid,
          fullname: currentEditData.fullname,
          email: currentEditData.email,
          age: currentEditData.age,
          course: currentEditData.course,
          grade: currentEditData.grade,
          status: currentEditData.status,
          skills: currentEditData.skills || [],
        });
      }
    }
    setData();
  }, [currentEditData]);
  return (
    <div
      className="modal show d-block"
      style={{ background: "rgba(0,0,0,.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Student</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="modal-body">
            <form id="edit_form" className="box" onSubmit={handleSubmit}>
              <h3 className="heading">Edit Student Details</h3>
              <hr />

              <div>
                <label htmlFor="student_id">Student Id</label>
                <input
                  type="text"
                  id="student_id"
                  name="studentid"
                  value={formData.studentid}
                  readOnly
                />
              </div>

              <div>
                <label htmlFor="fullname">Full Name *</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email *</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="age">Age *</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="course">Course *</label>
                <select
                  name="course"
                  id="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
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
                <label htmlFor="grade">Grade *</label>
                <select
                  name="grade"
                  id="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  required
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
                  id="active"
                  value="Active"
                  checked={formData.status === "Active"}
                  onChange={handleChange}
                />
                <label htmlFor="active">Active</label>

                <input
                  type="radio"
                  name="status"
                  id="inactive"
                  value="Inactive"
                  checked={formData.status === "Inactive"}
                  onChange={handleChange}
                />
                <label htmlFor="inactive">Inactive</label>
              </div>

              <div>
                <label>Skills *</label>
                <br />
                {["HTML", "CSS", "JavaScript", "React", "Node.js"].map(
                  (skill) => (
                    <span key={skill}>
                      <input
                        type="checkbox"
                        name="skills"
                        value={skill}
                        checked={formData.skills.includes(skill)}
                        onChange={handleChange}
                      />
                      <label htmlFor={skill}>{skill}</label>
                    </span>
                  ),
                )}
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
