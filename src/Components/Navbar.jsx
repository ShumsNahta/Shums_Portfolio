import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

function Navbar1() {
    const [activeNavItem, setActiveNavItem] = useState(null);
    const sectionRef = useRef(null);

    const handleClick = (event) => {
        setActiveNavItem(event.target.id);
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand>
                    <Link to="intro">
                        <img src="./Shumslogo.png" width="50" height="50" alt="Logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ms-auto">
                        <Nav.Link>
                            <Link to="intro"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className={`nav-link ${activeNavItem === 'intro' ? 'text-warning' : ''}`}
                                onClick={handleClick}>
                                Intro
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="skills"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className={`nav-link ${activeNavItem === 'skills' ? 'text-warning' : ''}`}
                                onClick={handleClick}>
                                Skills
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className={`nav-link ${activeNavItem === 'portfolio' ? 'text-warning' : ''}`}
                                onClick={handleClick}>
                                Portfolio
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link to='contact'>
                                <Button ref={sectionRef} variant="outline-secondary">Contact Me</Button>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar1;
