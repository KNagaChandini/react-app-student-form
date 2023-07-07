// import { useState } from "react";

function TableComponent(props) {
  const { studentList, setStudentList } = props;
  // const [studentList, setStudentList] = useState(initialStudentList);

  function calculate_age(dob) {
    let parts = dob.split("-");
    let mydate = new Date(parts[0], parts[1] - 1, parts[2]);
    var diff_ms = Date.now() - mydate.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  function displayTableBody() {
    let displayTable = studentList.map((each) => {
      return (
        <tr key={each.id}>
          <td>{each.id}</td>
          <td>{each.studName}</td>
          <td>{calculate_age(each.studDOB)}</td>
          <td>{each.studGender}</td>
          <td>{each.studDOB}</td>
          <td>
            <button onClick={() => deleteRow(each.id)}>delete</button>
          </td>
        </tr>
      );
    });
    return displayTable;
  }
  function deleteRow(id) {
    const updatedStudentList = studentList.filter((each) => each.id !== id);
    console.log(updatedStudentList);
    setStudentList(updatedStudentList);
  }

  return (
    <div className="TableComponent">
      <table id="myTable">
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Student Name</th>
            <th>Student Age</th>
            <th>Student Gender</th>
            <th>Student Date of Birth</th>
          </tr>
        </thead>
        <tbody>{displayTableBody()}</tbody>
      </table>
    </div>
  );
}

export default TableComponent;
