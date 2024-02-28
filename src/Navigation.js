import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles/Navigation.css'

function Navigation() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className = {scrolled ? "scrolled" : ""}> 
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>HOME</Nav.Link>
                <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('aboutme')}>ABOUT ME </Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>SKILLS</Nav.Link>
                <Nav.Link href="#portfolio" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('portfolio')}>PORTFOLIO</Nav.Link>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='https://github.com/TM-Nkomo'>
                        <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href='https://za.linkedin.com/in/tm-nkomo'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href='mailto:michellenkomo@outlook.com'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </span>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Navigation;