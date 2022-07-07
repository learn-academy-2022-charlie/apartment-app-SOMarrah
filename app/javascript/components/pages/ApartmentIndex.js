import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default function ApartmentIndex(props) {
  let {apartments} = props
  let {current_user, logged_in} = props
  console.log(apartments);
  console.log("current_user", current_user)
  console.log("logged in:",logged_in)
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

