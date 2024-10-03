import React, { useEffect, useState } from 'react';

// Notification component to handle notification logic
const NotificationApp = () => {
  const [isNotificationAllowed, setIsNotificationAllowed] = useState(false);

  useEffect(() => {
    if (Notification.permission === 'granted') {
      setIsNotificationAllowed(true);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          setIsNotificationAllowed(true);
        }
      });
    }
  }, []);

  // Function to send a notification, exposed for external use
  const sendNotification = (title = 'Notification Title', body = 'Notification Body') => {
    if (isNotificationAllowed) {
      new Notification(title, {
        body: body,
        // icon: '/path/to/icon.png', // Optional: Custom icon path
      });
    } else {
      alert('Notification permission not granted');
    }
  };

  return { sendNotification };
};

export default NotificationApp;
