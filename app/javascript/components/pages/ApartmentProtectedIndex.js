import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default function ApartmentProtectedIndex(props) {
const {logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route} = props

  let{apartments} = props
  console.log("apartments", apartments)

  return (
    <>
    <h3>My listings</h3>
    <div>
      { apartments && apartments.filter(apartment => apartment.user_id === current_user.id).map((value, index)=> {
        
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
