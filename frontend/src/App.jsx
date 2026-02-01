import React, { useEffect, useState } from "react";
import TopPart from "./components/TopPart";
import AddStudent from "./components/AddStudent";
import Distribution from "./components/Distribution";
import Filtering from "./components/Filtering";
import Table from "./components/Table";
import { cardsData } from "../data/data";
import Card from "./components/Card";
import Modal from "./components/Modal";
import { useContext } from "react";
import { StateContext } from "./context/stateContext";

const App = () => {
  const [open, setOpen] = useState(false);
  const {
    students,
    deleteData,
    editData,
    currentEditData,
    handleSaveEditData,
    a_grade_students,
    activeStudents,
    avg_ageStudents,
    totalStudents,
    exactNoOfStudents,
  } = useContext(StateContext);
  const [displayStudents, setDisplayStudents] = useState(students);
  const cardCounts = {
    total: totalStudents,
    active: activeStudents,
    average_age: avg_ageStudents.toFixed(2),
    a_grade: a_grade_students,
  };

  useEffect(() => {
    setDisplayStudents(students);
  }, [students]);

  return (
    <>
      <TopPart />
      <main>
        <section id="cardsContainer">
          {cardsData.map((d) => {
            return <Card key={d.id} d={d} cardCounts={cardCounts} />;
          })}
        </section>
        <section id="middlepart">
          <AddStudent />
          <Distribution />
        </section>
        <Filtering setDisplayStudents={setDisplayStudents} />
        <Table
          students={displayStudents}
          setOpen={setOpen}
          deleteData={deleteData}
          editData={editData}
          exactNoOfStudents={exactNoOfStudents}
        />
        {open && (
          <Modal
            setOpen={setOpen}
            currentEditData={currentEditData}
            handleSaveEditData={handleSaveEditData}
          />
        )}
      </main>
    </>
  );
};

export default App;
