import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle,CardText, Button} from 'reactstrap'

export default function ApartmentIndex() {
  return (
    <>
    <h3>ApartmentIndex</h3>
    <Card>
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
        <Button>
          Button
        </Button>
      </CardBody>
  </Card>
  </>
  )
}

