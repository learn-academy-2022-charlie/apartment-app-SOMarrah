import React, {useState} from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Navigate } from 'react-router-dom';

export default function ApartmentNew(props) {
  let {readApartments, createApartment} = props
  const {
    current_user,
  } = props

  const [newApartment, setNewApartment] = useState({
    street:"",
    city:"",
    state:"",
    manager:"",
    email:"",
    price:"",
    classification:"",
    bedrooms:"",
    bathrooms:"",
    pets:"",
    image:"",
    user_id: current_user.id,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createApartment(newApartment)
    readApartments()
    setSubmit(true)
  }
  const [submit, setSubmit] = useState(false)
  return (
    <>
    <h3>ApartmentNew</h3>
    <Form onSubmit={handleSubmit}>
      
      <FormGroup row>
        <Label for="street" sm={2}>Street</Label>
        <Col sm={10}>
          <Input type="text" name="street" id="street" placeholder="street" onChange={(e)=> setNewApartment({...newApartment, street: e.target.value})}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="city" sm={2}>City</Label>
        <Col sm={10}>
          <Input type="text" name="city" id="city" placeholder="enter a city" onChange={(e)=> setNewApartment({...newApartment, city: e.target.value})}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="state" sm={2}>State</Label>
        <Col sm={10}>
          <Input type="text" name="state" id="state" placeholder="enter a state" onChange={(e)=> setNewApartment({...newApartment, state: e.target.value})}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="manager" sm={2}>Manager</Label>
        <Col sm={10}>
          <Input type="text" name="manager" id="manager" placeholder="manager" onChange={(e)=> setNewApartment({...newApartment, manager: e.target.value})}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="email" sm={2}>Contact</Label>
        <Col sm={10}>
          <Input type="text" name="email" id="email" placeholder="email" onChange={(e)=> setNewApartment({...newApartment, email: e.target.value})}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="price" sm={2}>Price</Label>
        <Col sm={10}>
          <Input type="text" name="price" id="price" placeholder="price" onChange={(e)=> setNewApartment({...newApartment, price: e.target.value})}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="classification" sm={2}>Type</Label>
        <Col sm={10}>
          <Input type="text" name="classification" id="classification" placeholder="classification" onChange={(e)=> setNewApartment({...newApartment, classification: e.target.value})}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="bedrooms" sm={2}>Bedrooms</Label>
        <Col sm={10}>
          <Input type="number" name="bedrooms" id="bedrooms" placeholder="bedrooms" onChange={(e)=> setNewApartment({...newApartment, bedrooms: e.target.value})}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="bathrooms" sm={2}>Bathrooms</Label>
        <Col sm={10}>
          <Input type="number" name="bathrooms" id="bathrooms" placeholder="bathrooms" onChange={(e)=> setNewApartment({...newApartment, bathrooms: e.target.value})}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="pets" sm={2}>Pets</Label>
        <Col sm={10}>
          <Input type="text" name="pets" id="pets" placeholder="pets" onChange={(e)=> setNewApartment({...newApartment, pets: e.target.value})}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="image" sm={2}>Image</Label>
        <Col sm={10}>
          <Input type="text" name="image" id="image" placeholder="place an image link here" onChange={(e)=> setNewApartment({...newApartment, image: e.target.value})}/>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button >List it</Button>
        </Col>
      </FormGroup>
  </Form>
  {submit && <Navigate replace to="/mylistings"/>} 
  </>
  )
}
