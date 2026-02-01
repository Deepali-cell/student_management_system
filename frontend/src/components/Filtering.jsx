import { useContext, useEffect, useState } from "react";
import StateContext from "../context/StateContext";

const Filtering = ({ setDisplayStudents }) => {
  const { students } = useContext(StateContext);
  const [searchByInput, setSearchByInput] = useState("");
  const [searchByCourse, setSearchByCourse] = useState("");
  const [searchByGrade, setSearchByGrade] = useState("");
  const [searchByStatus, setSearchByStatus] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        !searchByInput &&
        !searchByCourse &&
        !searchByGrade &&
        !searchByStatus
      ) {
        setDisplayStudents(students);
        return;
      }

      let filtered = students;

      if (searchByInput) {
        filtered = filtered.filter(
          (st) =>
            st.fullname.toLowerCase().includes(searchByInput.toLowerCase()) ||
            st.email.toLowerCase().includes(searchByInput.toLowerCase()),
        );
      }

      if (searchByCourse) {
        filtered = filtered.filter((st) => st.course === searchByCourse);
      }

      if (searchByGrade) {
        filtered = filtered.filter((st) => st.grade === searchByGrade);
      }

      if (searchByStatus) {
        filtered = filtered.filter(
          (st) =>
            st.status ===
            searchByStatus.charAt(0).toUpperCase() +
              searchByStatus.slice(1).toLowerCase(),
        );
      }

      setDisplayStudents(filtered);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchByInput, searchByCourse, searchByGrade, searchByStatus, students]);

  const handleClear = () => {
    setSearchByCourse("");
    setSearchByGrade("");
    setSearchByInput("");
    setSearchByStatus("");
  };
  const handleSortByName = () => {
    const sorted = [...students].sort((a, b) =>
      a.fullname.localeCompare(b.fullname),
    );
    setDisplayStudents(sorted);
  };

  const handleSortByAge = () => {
    const sortData = [...students].sort((a, b) => a.age - b.age);
    setDisplayStudents(sortData);
  };
  const handleSortByGrade = () => {
    const sortData = [...students].sort((a, b) =>
      a.grade.localeCompare(b.grade),
    );
    setDisplayStudents(sortData);
  };
  return (
    <div className="box">
      <h3 className="heading">
        <i className="fa-solid fa-magnifying-glass"></i> Search & Filter
        Students
      </h3>

      <hr />

      <div className="filtering_inputs">
        <div className="filter_input_area">
          <label htmlFor="searchname">Search By Name & Email</label>
          <input
            type="text"
            id="searchname"
            placeholder="Type to search..."
            value={searchByInput}
            onChange={(e) => setSearchByInput(e.target.value)}
          />
        </div>

        <div className="filter_input_area">
          <label htmlFor="filter_course">Filter By Course</label>
          <select
            id="filter_course"
            value={searchByCourse}
            onChange={(e) => setSearchByCourse(e.target.value)}
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

        <div className="filter_input_area">
          <label htmlFor="filter_grade">Filter By Grade</label>
          <select
            id="filter_grade"
            value={searchByGrade}
            onChange={(e) => setSearchByGrade(e.target.value)}
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

        <div className="filter_input_area">
          <label htmlFor="filter_status">Filter By Status</label>
          <select
            id="filter_status"
            value={searchByStatus}
            onChange={(e) => setSearchByStatus(e.target.value)}
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="filtering_btns">
        <button
          className="filter_btn sort_name"
          type="button"
          onClick={handleSortByName}
        >
          Sort by Name (A-Z)
        </button>

        <button
          className="filter_btn sort_age"
          type="button"
          onClick={handleSortByAge}
        >
          Sort by Age
        </button>

        <button
          className="filter_btn sort_grade"
          type="button"
          onClick={handleSortByGrade}
        >
          Sort by Grade
        </button>

        <button className="filter_btn sort_file">Export Name (CSV)</button>

        <button
          className="filter_btn clearbtn"
          type="button"
          onClick={handleClear}
        >
          Clear All Data
        </button>
      </div>
    </div>
  );
};

export default Filtering;
