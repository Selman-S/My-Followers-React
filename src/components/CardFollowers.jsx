import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'

const CardFollowers = ({ follower }) => {
  return (
    <div>
      <Col>
        <Card className="mt-4 ">
          <Card.Img variant="top" src={follower.avatar_url} />
          <Card.Body>
            <Card.Text>{follower.login}</Card.Text>
            <Button
              className="text-white "
              href={follower.html_url}
              style={{ borderRadius: '50px' }}
              variant="info"
            >
              VIEW PROFILE
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  )
}

export default CardFollowers
