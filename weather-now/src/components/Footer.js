import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer
            style={{
                backgroundColor: "#2a2a2a",
                color: "#b3b3b3",
                textAlign: "center",
                padding: "10px 0",
                fontSize: "14px",
                marginTop: "20px", // Add spacing between the footer and content
                width: "100%", // Ensure the footer spans the entire width
            }}
        >
            Developed by Vishnu Nair |
            <a
                href="https://www.linkedin.com/in/vishnu-nair2766/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#b3b3b3", margin: "0 10px" }}
            >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
                href="https://github.com/vishnusn77"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#b3b3b3", margin: "0 6px" }}
            >
                <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
        </footer>
    );
};

export default Footer;
