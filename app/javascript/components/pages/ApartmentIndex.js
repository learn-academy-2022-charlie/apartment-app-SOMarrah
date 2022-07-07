import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default function ApartmentIndex(props) {
  let {apartments} = props
  console.log(apartments);
  return (
    <>
    <h3>ApartmentIndex</h3>
    <div>
      {apartments && apartments.map((value, index)=> {
        return (
          <Card key={index}>
            <CardBody>
              <CardTitle>{value.street}, {value.city},{value.state}</CardTitle>
              <CardSubtitle>{value.classification}</CardSubtitle>
              <CardText>Price: {value.price}</CardText>
              <Button>More Information</Button>
            </CardBody>
          </Card>
        )})}
    </div>
  </>
  )
}

