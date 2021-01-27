import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faDribbble } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/volivers/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/volivers" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://dribbble.com/volivers" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDribbble} /></a>
      </div>
      <div className="footer-copyright">
        <p>Vasco Oliveira © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;