import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";


function Add() {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [designation, setDesignation] = useState("")
  const [salary, setSalary] = useState (0)
  const [experience, setExperience] = useState(0)

  useEffect(() => {
    setId(uuid().slice(0, 3));
  }, []);

  let location = useNavigate()

  const addEmployee = async (e) => {
    e.preventDefault();
    setId(uuid().slice(0, 3))

const body ={

id,
name,
designation,
salary,
experience

}

const result= await axios.post('http://localhost:8000/add_employee',body)

alert(result.data.message)

//redirect to home

location('/')

  }

  console.log(id);

  return (
    <div>
      <h1 className="text-center">Add New Employee</h1>
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
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control mt-3"
          placeholder="employee name"
          name="name"
          id="ename"
        />
        <input
          onChange={(e) => setDesignation(e.target.value)}
          type="text"
          className="form-control mt-3"
          placeholder="designation"
          name="designation"
          id="edesignation"
        />
        <input
          onChange={(e) => setSalary(e.target.value)}
          type="text"
          className="form-control mt-3"
          placeholder="salary"
          name="salary"
          id="esalary"
        />

        <input
          onChange={(e) => setExperience(e.target.value)}
          type="text"
          className="form-control mt-3"
          placeholder="experience"
          name="experience"
          id="eExperience"
        />

        <button onClick={(e)=>addEmployee(e)} className="btn btn-dark p-2 w-25 mt-4"> Add Employee </button>
      </form>
    </div>
  )
}

export default Add;
