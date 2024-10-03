import React, { useState } from 'react';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { message, id: notifications.length },
    ]);
  };

  return (
    <div>
      <NavBar notifications={notifications} />
      <MainContent addNotification={addNotification} />
    </div>
  );
}

export default App;
