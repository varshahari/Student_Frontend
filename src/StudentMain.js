import React, { useEffect, useState }from 'react';
import './Appstyle.css';

const classes = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
const divisions = ['A', 'B', 'C'];
const genders = ['Male', 'Female'];

const Studenttest = () => {
  
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [classSelected, setClassSelected] = useState('');
  const [divisionSelected, setDivisionSelected] = useState('');
  const [genderSelected, setGenderSelected] = useState('');
 const[students,setStudents]=useState([])


  const handleNameChange = (event) => {
    const regex = /^[a-zA-Z ]*$/; // only letters and space allowed
    if (regex.test(event.target.value)) {
      setName(event.target.value);
    }
  };
 const handleClassChange = (event) => {
    setClassSelected(event.target.value);
  };

  const handleDivisionChange = (event) => {
    setDivisionSelected(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGenderSelected(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !dob || !classSelected || !divisionSelected || !genderSelected)  {
      alert('Please fill in all fields');
      return
}
 
    const student={name,dob,classSelected,divisionSelected,genderSelected}
    console.log(student)
    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  }).then(()=>{
    alert("New Student added")
  })
}
   /*useEffect(()=>{
  fetch("http://localhost:8080/student/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setStudents(result);
  }
)
},[])

 */


  return (
    
    <div class="wrapper" class="col-sm-6"> 
   <h1><center>STUDENT INFORMATION FORM</center></h1>
      <form class="form-signin"  onSubmit={handleSubmit}>
   
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            
          />
        </div>
  
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
           
          />
        </div>
        <div>
          <label htmlFor="class">Class:</label>
          <select id="class" name="class" value={classSelected} onChange={handleClassChange} >
           <option value="">Select class</option>
            {classes.map((c) => (
              <option key={c} value={c}>
                {c}
     </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="division">Division:</label>
          <select
            id="division"
            name="division"
            value={divisionSelected}
            onChange={handleDivisionChange}
            
          >
            <option value="">Select division</option>
            {divisions.map((d) => (
              <option key={d} value={d}>
                {d}
             </option>
            ))}

          </select>
        </div>
        <div>
          <label>Gender:</label>
          {genders.map((g) => (
            <div class="col-sm-3" key={g}>
              <input
                type="radio"
                id={g}
                name="gender"
                value={g}
                checked={genderSelected === g}
                onChange={handleGenderChange}
                
              />
              <label htmlFor={g}>{g}</label>
            </div>
          ))}
                
                
             
          
        </div>
             
          
        
<div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button></div>
      </form>
    </div>
  );
 
    
};

export default Studenttest;
