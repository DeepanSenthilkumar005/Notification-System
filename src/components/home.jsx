import React from 'react'
import './home.css'
import { Button, Card, Row } from 'react-bootstrap';
import vi from '../assets/vi.jpg';
import icon from '../assets/messageIcon.png';

function home() {
  return (
    <>
        <div className="container mt-4">
      <h1 className="text-center text-light">Welcome to the Home Page</h1>
      <div className="container text-center">
        <Row className='g-4 m-5'>
            <Card className="mx-auto col-lg-4 col-sm-12 col-md-6 p-2 d-flex justify-content-center btn-parent m-2 " >
                <Card.Img variant='top' src={vi} className="img img-thumbnail img-fluid" alt='image'/>
                <Card.Body  className="bg-light border">
                    <Card.Title  className="bg-light">Video</Card.Title>
                    <Card.Text className="bg-light text-justify">Click Here to go to the Video</Card.Text>
                    <Button className='bt' href='/video' >Video</Button>
                </Card.Body>
            </Card>

            <Card className="mx-auto col-lg-4 col-sm-12 col-md-6 p-2 d-flex justify-content-center btn-parent m-2 " >
                <Card.Img variant='top' src={icon} className="img img-thumbnail img-fluid" alt='image'/>
                <Card.Body  className="bg-light border">
                    <Card.Title  className="bg-light text-start">Blog</Card.Title>
                    <Card.Text className="bg-light text-justify">Click Here to go to the Blog</Card.Text>
                    <Button href='/blog' className='bt'>Blog</Button>
                </Card.Body>
            </Card>

            
        
        </Row>
      </div>
    </div>
    </>
  )
}

export default home;