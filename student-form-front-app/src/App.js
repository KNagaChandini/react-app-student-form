import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";
import { useState } from "react";

const initialStudentList = [
  {
    id: 1,
    studName: "chandini",
    studGender: "female",
    studDOB: "1992-12-4",
  },
  {
    id: 2,
    studName: "chandini",
    studGender: "female",
    studDOB: "1992-12-4",
  },
  {
    id: 3,
    studName: "chandini",
    studGender: "female",
    studDOB: "1992-12-4",
  },
];

function App() {
  const [studentList, setStudentList] = useState(initialStudentList);

  return (
    <div className="App">
      <div className="mdl-layout__content">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col">
            <FormComponent
              setStudentList={setStudentList}
              studentList={studentList}
            />
          </div>
          <div className="mdl-cell mdl-cell--6-col">
            <TableComponent
              setStudentList={setStudentList}
              studentList={studentList}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
