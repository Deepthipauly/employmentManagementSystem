import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  //api to get

  const [employees, setEmployees] = useState([]);
  const fetchEmployees = async () => {
    const result = await axios.get("http://localhost:8000/getEmployees");
    setEmployees(result.data.message);
  };
console.log("EMPLOYEES:", employees);


//api to delete

const deleteEmployee = async(id)=>{
  const result= await axios.get(`http://localhost:8000/delete_employee/${id}`)
  alert(result.data.message)
  fetchEmployees()

};



  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="p-3">
      <Row>
        <Col lg={5} className="ms-3">
          <div className="w-100 p-4 mt-3 text-center text-white">
            <h3 className="text-center">Employee Management App</h3>
            <p className=" text-center mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate fugit fugiat dolores possimus, cum aliquid ex, nostrum
              reiciendis ratione aut assumenda soluta? Dolorum tempora provident
              dolore fugiat quos ipsum officia. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Cupiditate fugit fugiat dolores
              possimus, cum aliquid ex, nostrum reiciendis ratione aut assumenda
              soluta? Dolorum tempora provident dolore fugiat quos ipsum
              officia.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate fugit fugiat dolores possimus, cum aliquid ex, nostrum
              reiciendis ratione aut assumenda soluta? Dolorum tempora provident
              dolore fugiat quos ipsum officia.
            </p>
            <div>
              <Link to={"/add"}>
                {" "}
                <Button variant="outline-dark">
                  <i class="fa-solid fa-user-plus"></i>Add New Employee
                </Button>
              </Link>
            </div>
          </div>
        </Col>

        <Col lg={6}>
          <img
            style={{ height: "380px", display: "flex" }}
            className="w-100 ms-2 p-3 mt-5"
            src="https://i.postimg.cc/G2TwNV82/employee.jpg"
            alt=""
          />
        </Col>
      </Row>

      <div className="container-fluid w-100 mt-3 p-5">
        <h1 className="text-center p-3">List of Employees</h1>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Full Name</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Experience</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees?.map((employee, index) => (
              <tr>
                <td>{index}</td>

                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.salary}</td>
                <td>{employee.experience} yrs</td>
                <td>
                  <DropdownButton
                    variant="dark"
                    id="dropdown-basic-button"
                    title="actions"
                  >
<Link to={`edit/${employee.id}`} style={{textDecoration:'none',color:'whitesmoke'}}>
                      <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
  
</Link>
                  <Link to={`view/${employee.id}`} style={{textDecoration:'none',color:'whitesmoke'}}>  <Dropdown.Item href="#/action-2">View</Dropdown.Item></Link>

                    <Dropdown.Item href="#/action-3" onClick={()=>deleteEmployee(employee.id)}>Delete</Dropdown.Item>


                  </DropdownButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Home;
