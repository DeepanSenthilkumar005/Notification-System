import React, { useState } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import './NavBar.css';

const NavBar = ({ notifications }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <Navbar expand="">
      <Navbar.Brand href="" className='me-auto mx-1 text-dark text-opacity-80 bg-transparent ps-2'>Notification System</Navbar.Brand>
      <Nav className="ml-auto ">
        <Dropdown className='ms-auto mx-2 dd' show={showDropdown} onToggle={toggleDropdown}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic" className='dd'>
            <i className="fa fa-bell bg-transparent"></i>
            {notifications.length !== 0 && <sup className='bg-transparent color-secondary'>{notifications.length}</sup>}
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
