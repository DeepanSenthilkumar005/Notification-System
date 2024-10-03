import React from "react";
import { Button, Container } from "react-bootstrap";
import './MainContent.css'
import NotificationApp from "./NotificationApp";

const MainContent = ({ addNotification }) => {
  const { sendNotification } = NotificationApp();
  const handleButtonClick = (message) => {
    sendNotification(message,message);
    addNotification(message);
    
  };
  

  return (
    <Container className="mt-4">
        <div className="row d-flex justify-content-center">
         
         {Array.from({ length: 8 }, (_, i) => (
            <div className="col-lg-3 col-sm-12 col-md-6 p-1 d-flex justify-content-center btn-parent" key={i}>
             <Button
        variant=""
        onClick={() => handleButtonClick(`Notification ${i + 1}`)}
        className="m-2 btn-notify text-light"
      >
        Notification {i + 1}
      </Button>
            </div>
          ))}
    </div>
    </Container>
  );
};

export default MainContent;
