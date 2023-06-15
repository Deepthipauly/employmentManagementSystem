import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function Edit() {

  const [name, setName] = useState("")
  const [designation, setDesignation] = useState("")
  const [salary, setSalary] = useState (0)
  const [experience, setExperience] = useState(0)


  // const [employee,setEmployee]=useState()
const params= useParams()
  const fetchEmployee = async () => {
    const result = await axios.get(`http://localhost:8000/view_employee/`+ params.id);
    console.log(result.data.message);

    setName(result.data.message.name)
    setDesignation(result.data.message.designation)
    setSalary(result.data.message.salary)
    setExperience(result.data.message.experience)

  };
  let location = useNavigate()



const editEmployee=async(e)=>{
  e.preventDefault()
  const body={
    id:params.id,
    name,
    designation,
    salary,
    experience
  }

const result= await axios.post('http://localhost:8000/edit_employee/',body)
alert(result.data.message)

location('/')

}



useEffect(()=>{
  fetchEmployee()
},[])



  return (
    
<div>
      <h1 className="text-center">Update Employee</h1>
      <p className=" text-center mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        fugit fugiat dolores possimus, cum aliquid ex, nostrum reiciendis
        ratione aut assumenda soluta? Dolorum tempora provident dolore fugiat
        quos ipsum officia. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Cupiditate fugit fugiat dolores possimus, cum aliquid ex, nostrum
        reiciendis ratione aut assumenda soluta? Dolorum tempora provident
        dolore fugiat quos ipsum officia.Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Cupiditate fugit fugiat dolores possimus, cum aliquid
        ex, nostrum reiciendis ratione aut assumenda soluta? Dolorum tempora
        provident dolore fugiat quos ipsum officia.
      </p>
      <h3 className="text-center mt-4">Employee Details</h3>
      <form className="container w-50 p-5 mb-5 text-center">
        <input
          type="text"
          className="form-control mt-3"
          placeholder="employee name"
          name="name"
          id="ename"
          value={name}
          onChange={(e) => setName(e.target.value)}

        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="designation"
          name="designation"
          id="edesignation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}

        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="salary"
          name="salary"
          id="esalary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}

        />

        <input
          type="text"
          className="form-control mt-3"
          placeholder="experience"
          name="experience"
          id="eExperience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}

        />

        <button onClick={(e)=>editEmployee(e)}  className="btn btn-dark p-2 w-25 mt-4">Update</button>
      </form>
    </div>
  


  )
}

export default Edit