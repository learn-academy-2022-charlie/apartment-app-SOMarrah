import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default function ApartmentShow(props) {
  let{apartments} = props
  let {id} = useParams()
  const apartment = apartments.find(apartment_object=> apartment_object.id === +id)
  console.log("apartmentArray", apartment);

 
  return (
    <>
    <h3>ApartmentShow</h3>
   {apartment && <Card>
      <CardBody>
        <CardImg top width="100%" src={apartment.image} alt={apartment.image} />
        <CardTitle>{apartment.street}, {apartment.city},{apartment.state}</CardTitle>
        <CardSubtitle>{apartment.classification}</CardSubtitle>
        <CardText>{apartment.manager} : {apartment.email}</CardText>
        <CardText>Price: {apartment.price}</CardText>
        <Button>Edit</Button><Button>Delete</Button>
      </CardBody>
    </Card>
}
    </>
  )
}
