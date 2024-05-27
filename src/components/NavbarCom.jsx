import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavbarCom = () => {
  const totalProductsInCart = useSelector(state=>state.cart)
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-5" >
      <Container fluid>
        <Navbar.Brand href="#">E-commerce</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav.Link to="/" as={Link}>
            Products
          </Nav.Link>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav.Link to="/cart" as={Link}>
              My Bag {totalProductsInCart.length}
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCom;
