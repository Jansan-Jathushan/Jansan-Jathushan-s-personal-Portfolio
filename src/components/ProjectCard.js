// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   )
// }

import { Col } from "react-bootstrap";
import { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Col size={12} sm={6} md={4}>
      <div 
        className="proj-imgbx" 
        style={{
          position: 'relative',
          overflow: 'hidden', // Ensure the button stays within the bounds of the image
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={imgUrl} alt={title} style={{ width: '100%', height: 'auto' }} />
        <div 
          className="proj-txtx" 
          style={{
            position: 'absolute',
            top: '50%', // Centers vertically
            left: '50%', // Centers horizontally
            transform: 'translate(-50%, -50%)', // Adjusts the element to be fully centered
            color: 'white',
            textAlign: 'center' // Centers the text itself inside the div
          }}
        >
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        {/* Hover button with inline CSS */}
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button 
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#4a2fbd',
              color: '#fff',
              border: 'none',
              borderRadius:'15px',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              opacity: isHovered ? '1' : '0', // Button opacity changes on hover
              transition: 'opacity 0.3s ease',
              zIndex: '10', // Ensure button appears above the image
            }}
            className="project-hover-button"
          >
            View Project
          </button>
        </a>
      </div>
    </Col>
  )
}




