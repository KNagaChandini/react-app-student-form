function FormComponent(props) {
  const { studentList, setStudentList } = props;

  function formSubmit() {
    const data = {
      id: studentList.length + 1,
      studName: document.getElementById("studName").value,
      studGender: document.getElementById("studGender").value,
      studDOB: document.getElementById("studDOB").value,
    };
    // const updatedList = studentList.map((eachObj) => eachObj);
    const updatedList = [...studentList];
    updatedList.push(data);
    setStudentList(updatedList);
  }
  return (
    <div className="FormComponent">
      <form>
        <label htmlFor="studName">Student Name :</label>
        <input
          type="text"
          name="studentName"
          id="studName"
          placeholder="Enter name"
          required
        />
        <br />
        <label htmlFor="">Gender :</label>
        <select name="studentGender" id="studGender">
          <option value="">select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="trans">Transgender</option>
        </select>
        <br />
        <label htmlFor="studDOB">Date of birth:</label>
        <input type="date" name="studentDateOfBirth" id="studDOB" />
        <br />
      </form>
      <button onClick={formSubmit}>Submit</button>
    </div>
  );
}

export default FormComponent;
