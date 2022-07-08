import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, NavItem } from 'reactstrap';

export default function ApartmentIndex(props) {
  let {apartments} = props

  console.log(apartments)


  return (
    <>
    <h3>ApartmentIndex</h3>
    <div>
      {apartments && apartments.map((apartment_object, index)=> {
        return (
          <Card key={index}>
            <CardBody>
              <CardTitle>{apartment_object.street}, {apartment_object.city},{apartment_object.state}</CardTitle>
              <CardSubtitle>{apartment_object.classification}</CardSubtitle>
              <CardText>Price: {apartment_object.price}</CardText>
              <a href={`/apartmentshow/${apartment_object.id}`}>
               <NavItem>
              <Button>More Information</Button>
              </NavItem></a>
            </CardBody>
          </Card>
        )})}
    </div>
  </>
  )
}


