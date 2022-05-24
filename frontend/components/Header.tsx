import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

const Header: React.FC = () => {
  const [activeKey, setActiveKey] = React.useState<string>("");

  React.useEffect(() => {
    setActiveKey(window.location.pathname);
  }, []);

  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <Navbar.Brand href="/" className="font-weight-bold text-muted">
          Scratch
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={activeKey}>
            <Link href={"/signup"} passHref>
              <Nav.Link>Signup</Nav.Link>
            </Link>
            <Link href={"/login"} passHref>
              <Nav.Link>Login</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
