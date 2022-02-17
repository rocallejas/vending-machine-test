import React, { useState } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  NavbarToggler,
  Collapse,
  NavbarText,  
} from "reactstrap";

import "./NavBar.css";

//Styling the Links
const Links = {
  color: "peachpuff",
  fontSize: "1.2rem",
  margin: "2rem 0",
  fontWeight: "600",
  textDecoration: "none",
  padding: "0 12px",
};

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const isToggle = () => setToggle(!toggle);
  return (
    <>
        <Navbar color="dark" dark expand="md" light>
          <NavbarBrand to="/products">
            <img
              className="brandlogo"
              alt="..."
              src={require("../../assets/img/brand/vending-machine.png")}
            />
          </NavbarBrand>
          <NavbarToggler onClick={isToggle} />

          <Collapse isOpen={toggle} navbar>
            <Nav navbar className="me-auto">
              <NavItem>
                <Link style={Links} to="/products">Products</Link>
              </NavItem>

              <NavItem>
                <Link style={Links} to="/orders">Orders</Link>
              </NavItem>
            </Nav>
            <NavbarText className="customText">Rodrigo Ortiz</NavbarText>
          </Collapse>
        </Navbar>
    </>
  );
}

export default NavBar;
