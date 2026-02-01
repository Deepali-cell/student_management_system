const Table = ({
  students,
  setOpen,
  deleteData,
  editData,
  exactNoOfStudents,
}) => {
  const onDelete = (id) => {
    deleteData(id);
  };
  const onEdit = (id) => {
    editData(id);
    setOpen(true);
  };
  return (
    <section className="box">
      <div id="list_header">
        <i className="fa-solid fa-users"></i>
        <div>
          <h3 className="heading">
            Students List
            <span>
              (Showing {students.length} of {exactNoOfStudents})
            </span>
          </h3>
        </div>
      </div>

      <hr />

      <div className="table-responsive">
        <table className="table student_table">
          <thead className="table_header">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Course</th>
              <th>Grade</th>
              <th>Status</th>
              <th>Skills</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="table-group-divider">
            {students.map((student) => (
              <tr key={student.studentid}>
                <td>{student.studentid}</td>
                <td>{student.fullname}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>{student.course}</td>
                <td>
                  <span className="badge bg-primary">{student.grade}</span>
                </td>
                <td>
                  <span
                    className={`badge ${student.status === "Active" ? "bg-success" : "bg-danger"} `}
                  >
                    {student.status[0].toUpperCase() + student.status.slice(1)}
                  </span>
                </td>
                <td>
                  {student.skills.map((skill, idx) => {
                    return (
                      <span
                        key={`${student.studentid}-${skill}-${idx}`}
                        className="badge bg-secondary me-1"
                      >
                        {skill}
                      </span>
                    );
                  })}
                </td>
                <td className="table_action_btn">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => onEdit(student.studentid)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onDelete(student.studentid)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
