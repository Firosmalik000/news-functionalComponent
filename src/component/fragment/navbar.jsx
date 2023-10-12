import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarNews = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="  ">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarNews;
