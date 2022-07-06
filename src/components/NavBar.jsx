import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [isOpen, setİsOpen] = useState(sessionStorage.getItem('email' || false))

  const handleClick = () => {
    setİsOpen(false)
    sessionStorage.clear()
  }

  return (
    <>
      <Navbar bg="info" variant="dark">
        {isOpen ? (
          <Container className="d-flex justify-content-center">
            <h1 className="logo" href="/home">
              Github Followers
            </h1>
            <Nav className=" ms-auto ">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/" onClick={handleClick}>
                Logout
              </NavLink>
            </Nav>
          </Container>
        ) : (
          <Container>
            <Navbar.Brand href="">Clarusway</Navbar.Brand>
          </Container>
        )}
      </Navbar>
    </>
  )
}

export default NavBar
