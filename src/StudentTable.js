import React, { useState, useEffect } from 'react';
import './Appstyle.css';


const StudentTable = () => {
  const [students, setStudents] = useState([]);


   useEffect(()=>{
  fetch("http://localhost:8080/student/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setStudents(result);
  }
)
},[])

  const renderTable = () => {
    const sortedStudents = students.sort((a, b) => a.name.localeCompare(b.name));

    return (
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Class</th>
            <th>Division</th>
            <th>Gender</th>
           
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student) => (
            <tr key={student.id}>
<td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.dob}</td>
              <td>{student.classSelected}</td>
              <td>{student.divisionSelected}</td>
              <td>{student.genderSelected}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div class="res" class="col-sm-6">
      
      {students.length === 0 ? <div></div> : renderTable()}
    </div>
  );
};

export default StudentTable;
