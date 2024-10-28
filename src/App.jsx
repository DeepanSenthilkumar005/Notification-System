import React, { useState } from 'react';
import NavBar from './components/NavBar';
import { Route,Routes } from 'react-router-dom';
import MainContent from './components/MainContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Video from './components/Video';

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
      <Routes>
        <Route path='/' element={<>
          <NavBar  notifications={notifications}/>
          <Home/>
        </>} />
      
      <Route path='/blog'
       element={<>
       <NavBar notifications={notifications} />
       <MainContent addNotification={addNotification} />
       </>} />

       <Route path='/video'
       element={<>
       <NavBar notifications={notifications} />
       <Video/>
       </>} />
      
      </Routes>
    </div>
  );
}

export default App;
