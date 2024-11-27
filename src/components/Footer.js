import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import FontAwesome icons


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jansan-jathushan-5b08a6308/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin style={{ color: 'white' }} />
              </a> {/* LinkedIn Icon */}
              <a href="https://github.com/Jansan-Jathushan" target="_blank" rel="noopener noreferrer">
                <FaGithub style={{ color: 'white' }} />
              </a> {/* GitHub Icon */}
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jasnajathushan@gmail.com">
                <FaEnvelope style={{ color: 'white' }} />
              </a> {/* Email Icon */}
            </div>
            <div style={{
              fontSize: '12px', fontWeight: 'bold', marginTop: '10px',
            }}>
              &copy; 2024{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(to right, #aa367c, #4a2fbd)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                JANSAN JATHUSHAN
              </span>
              . All rights reserved.
            </div>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}
