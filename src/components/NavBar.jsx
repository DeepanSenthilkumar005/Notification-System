import React, { useState } from 'react';
import { Navbar, Nav, Dropdown,Container } from 'react-bootstrap';
import './NavBar.css';

const NavBar = ({ notifications }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <Navbar sh>
      
      <Navbar.Brand href="" className='me-auto mx-1 text-dark text-opacity-80 h3 bg-transparent ps-2'>Notification System</Navbar.Brand>
      <Nav className="ml-auto ">

            <Nav.Link href="/home" className=' '>Home</Nav.Link>
            <Nav.Link href="/blog" className=' '>Blog</Nav.Link>
            <Nav.Link href="/video" className=' me-2'>Video</Nav.Link>

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
