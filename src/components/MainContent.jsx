import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import './MainContent.css';

const MainContent = ({ addNotification }) => {
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    // console.log(Notification.permission);
    
    if (Notification.permission !== "granted") {
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
        new Notification("New Notification", {
          body: message,
          // icon: "https://via.placeholder.com/150",
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
