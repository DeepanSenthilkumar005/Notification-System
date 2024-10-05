import React, { useState, useEffect } from "react";
import { Button, Container,Card, CardBody, CardTitle, CardText } from "react-bootstrap";
import './MainContent.css';
import icon from '../assets/messageIcon.png';

const MainContent = ({ addNotification }) => {
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    // console.log(Notification.permission);
    
    if (Notification.permission !== "granted") {
      // TO make the request
      Notification.requestPermission().then(permission => {
        setPermissionGranted(permission === "granted");
      });
    } else {
      setPermissionGranted(true);
    }
  }, []);

  const handleButtonClick = (message) => {
    
    addNotification(message);

    
    if (permissionGranted) {
      try {
        new Notification("New Notification From Deepan", {
          body: message,
          icon:icon,
          
        });
        console.log("Notification shown");
      } catch (error) {
        console.error("Notification failed: ", error);
      }
    } else {
      alert("Notification permission is not granted!");
    }
  };

  return (
    <Container className="mt-4 ">
      <div className="row d-flex justify-content-center g-3 ">
        {Array.from({ length: 8 }, (_, i) => (
          <Card className="col-lg-3 col-sm-12 col-md-6 p-2 d-flex justify-content-center btn-parent my-2 " key={i}>
            <Card.Img variant='top' src={`https://picsum.photos/id/${i+11}/200`} alt="Image" className="img img-thumbnail img-fluid"/>

            {/* <Card.Img varient='top' src="https://picsum.photos//200"alt="Image" className=" img img-thumbnail img-fluid"/> */}
            <CardBody className="bg-light border">
              <CardTitle className="bg-light">Notification {i+1}</CardTitle>
              <CardText className="bg-light text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aperiam eveniet assumenda, itaque est in reiciendis impedit aut nihil ea aliquam quae quas, atque praesentium veritatis explicabo error! In, facere!</CardText>
            
            
            <Button
              variant=""
              onClick={() => handleButtonClick(`Notification ${i + 1}`)}
              className="m-2 btn-notify"
            >
              Notification {i + 1}
            </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default MainContent;
