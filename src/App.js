import React from 'react';
import Main from './pages/Main';
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap'

class App extends React.Component {
  render(){
  return (
    <div>
     <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">Bookstore</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Dashboard</Nav.Link>
        <Nav.Link href="/kontak">Our Contact</Nav.Link>
        <Nav.Link href="/siswa">Siswa</Nav.Link>
        <Nav.Link href="/gallery">Book Gallery</Nav.Link>
        <Nav.Link href="/cart">Cart</Nav.Link>
        <Nav.Link href="/pegawai">Daftar Pegawai</Nav.Link>
      </Nav>
      </Container>
      </Navbar>
      <p><Main /></p>
    </div>
  );
  }
}

export default App;
