import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default function ApartmentProtectedIndex(props) {
  let{apartments} = props
  console.log("apartments", apartments)
  
  // if(apartments.length > 0){
  //   console.log("apartment id test:", apartments[0].user_id)}

  return (
    <>
    <h3>My listings</h3>
    <div>
      {apartments && apartments.map((value, index)=> {
        
        return (
          
          <Card key={index}>
            <CardBody>
              <CardTitle>{value.street}, {value.city},{value.state}</CardTitle>
              <CardSubtitle>{value.classification}</CardSubtitle>
              <CardText>Price: {value.price}</CardText>
              <Button>Edit</Button>
            </CardBody>
          </Card>
        )})}
    </div>
  </>
  )
}
