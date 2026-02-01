import axios from "axios";
import { createContext, useEffect, useState, useMemo } from "react";

export const StateContext = createContext();

const StateContextProvider = ({ children }) => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  // const [students, setStudents] = useState(
  //   JSON.parse(localStorage.getItem("studentsData")) || [],
  // );
  const [students, setStudents] = useState([]);
  const [currentEditData, setcurrentEditData] = useState();
  const totalStudents = students.length;
  const [exactNoOfStudents, setExactNoOfStudents] = useState(0);

  const activeStudents = useMemo(
    () => students.filter((st) => st.status === "Active").length,
    [students],
  );

  const a_grade_students = useMemo(
    () => students.filter((st) => st.grade === "A").length,
    [students],
  );

  const avg_ageStudents = useMemo(
    () =>
      totalStudents > 0
        ? students.reduce((sum, st) => sum + Number(st.age), 0) / totalStudents
        : 0,
    [students, totalStudents],
  );

  const counts = useMemo(
    () =>
      students.reduce(
        (acc, st) => {
          if (st.course === "web_development") acc.webDev++;
          if (st.course === "data_science") acc.dataScience++;
          if (st.course === "mobile_development") acc.mobileDev++;
          if (st.course === "ui_ux_design") acc.ui_ux++;
          return acc;
        },
        { webDev: 0, dataScience: 0, mobileDev: 0, ui_ux: 0 },
      ),
    [students],
  );

  const percent = (value) =>
    totalStudents > 0 ? (value / totalStudents) * 100 : 0;

  const deleteData = async (id) => {
    const { data } = await axios.delete(`${backend_url}/delete/${id}`, {
      withCredentials: true,
    });
    if (data.success) {
      const updatedData = students.filter((st) => st.studentid !== id);
      setStudents(updatedData);
    }
    // localStorage.setItem("studentsData", JSON.stringify(updatedData));
  };

  const editData = async (id) => {
    // const edit_student_data = students.find((st) => st.studentid === id);
    // setcurrentEditData(edit_student_data);
    try {
      const { data } = await axios.get(`${backend_url}/studentdata/${id}`, {
        withCredentials: true,
      });
      if (data.success) {
        setcurrentEditData(data.studentData);
      } else {
        console.log(data.message || "some error while fetching the edit data");
      }
    } catch (error) {
      console.log("some error while fetching the edit data:", error.message);
    }
  };

  const handleSaveEditData = async (formData, studentid) => {
    try {
      const { data } = await axios.put(
        `${backend_url}/edit/${studentid}`,
        formData,
        {
          withCredentials: true,
        },
      );
      if (data.success) {
        const updatedData = students.map((st) =>
          st.studentid === studentid ? formData : st,
        );
        setStudents(updatedData);
      } else {
        console.log("some error while editing");
      }
    } catch (error) {
      console.log("some error while editing :", error.message);
    }

    // localStorage.setItem("studentsData", JSON.stringify(updatedData));
  };

  const getAllStudents = async () => {
    try {
      const { data } = await axios.get(`${backend_url}/getstudents`, {
        withCredentials: true,
      });
      if (data.success) {
        setExactNoOfStudents(data.students.length);
        setStudents(data.students);
      } else {
        console.log("some error while fetching the students : ", data.message);
      }
    } catch (error) {
      console.log("some error while fetching the students :", error.message);
    }
  };
  useEffect(() => {
    getAllStudents();
  }, []);
  const value = {
    students,
    setStudents,
    deleteData,
    editData,
    currentEditData,
    setcurrentEditData,
    handleSaveEditData,
    a_grade_students,
    activeStudents,
    avg_ageStudents,
    totalStudents,
    counts,
    percent,
    backend_url,
    getAllStudents,
    exactNoOfStudents,
    setExactNoOfStudents,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export default StateContextProvider;
