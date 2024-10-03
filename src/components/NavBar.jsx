import React, { useState } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import './NavBar.css';

const NavBar = ({ notifications }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  console.log(notifications.length);
  

  return (
    <Navbar  expand="">
      <Navbar.Brand href="" className='me-auto mx-1 text-dark text-opacity-80 bg-transparent ps-2'>Notification System</Navbar.Brand>
      <Nav className="ml-auto ">
        <Dropdown className='ms-auto mx-2 dd'  show={showDropdown} onToggle={toggleDropdown}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic" className='dd'>
            <i className="fa fa-bell bg-transparent " ></i>
            {/* <svg viewBox="0 0 448 512" class=" bg-transparent color-secondary"><path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path></svg> */}
            
            {notifications.length!==0 && <sup className='bg-transparent color-secondary'>{notifications.length}</sup>}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {notifications.length === 0 ? (
              <Dropdown.Item>No Notifications</Dropdown.Item>
            ) : (
              notifications.map((notification) => (
                <Dropdown.Item key={notification.id}>
                  {notification.message}
                </Dropdown.Item>
              ))
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
