import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';




function View() {

const params=useParams();
const [employee, setEmployee] = useState({});
const fetchEmployee = async (id) => {
  const result = await axios.get(`http://localhost:8000/view_employee/${id}`);
  setEmployee(result.data.message);
};

console.log("EMPLOYEE:", employee);

useEffect(() => {
  fetchEmployee(params.id);
}, []);


  return (
    <div className='d-flex justify-content-center mt-5'>

{/* {employee?.image ? */}
<Card className='mt-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={employee.image} />
      <Card.Body>
        <Card.Title>{employee.designation}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>ID :  {employee.id}</ListGroup.Item>
        <ListGroup.Item>Name :  {employee.name}</ListGroup.Item>
        <ListGroup.Item>Experience :  {employee.experience} year</ListGroup.Item>
        <ListGroup.Item>Salary :  Rs. {employee.salary}</ListGroup.Item>

      </ListGroup>
      {/* <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
    </Card> 
    {/* : ""} */}
    </div>
  )
}

export default View