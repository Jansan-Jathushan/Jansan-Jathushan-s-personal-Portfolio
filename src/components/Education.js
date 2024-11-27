import React from 'react';

const timelineItemStyle = {
  position: 'relative',
  marginBottom: '48px',
  paddingLeft: '30px',
};

const timelineDotStyle = {
  position: 'absolute',
  left: '-5px',
  top: '0',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  background: 'linear-gradient(to right, #aa367c, #4a2fbd)',
  animation: 'pulse 2s infinite',
};

const yearStyle = {
  fontSize: '18px',
  color: '#aa367c',
  fontWeight: 'bold',
  marginBottom: '8px',
};

const titleStyle = {
  fontSize: '25px',
  fontWeight: 'bold',
  marginBottom: '8px',
};

const descriptionStyle = {
  color: '#B8B8B8',
  fontSize: '18px',
  letterSpacing: '0.8px',
  lineHeight: '1.5em',
};

const TimelineItem = ({ year, title, description }) => (
  <div style={timelineItemStyle}>
    <div style={timelineDotStyle} />
    <div style={yearStyle}>{year}</div>
    <h3 style={titleStyle}>{title}</h3>
    <p style={descriptionStyle}>{description}</p>
  </div>
);

export const EducationTimeline = () => {
  const containerStyle = {
    minHeight: '100vh',
    position: 'relative',
    color: 'white',
    padding: '32px',
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden', // Ensures elements stay within bounds
  };

  const blurredBackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(https://i.ibb.co/Qj23TS5/banner-bg.png)', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: 'blur(10px)', // Adds the blur effect
    zIndex: -1, // Places it behind the content
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '45px',
    fontWeight: 700,
    marginBottom: '64px',
  };

  const gradientTextStyle = {
    background: 'linear-gradient(to right, #aa367c, #4a2fbd)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const sectionStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '48px',
  };

  const columnStyle = {
    position: 'relative',
  };

  const sectionTitleStyle = {
    fontSize: '35px',
    fontWeight: 700,
    marginBottom: '32px',
    position: 'relative',
  };

  const underlineStyle = {
    position: 'absolute',
    bottom: '-8px',
    left: '0',
    height: '4px',
    width: '128px',
    background: 'linear-gradient(to right, #aa367c, #4a2fbd)',
  };

  const timelineStyle = {
    position: 'relative',
    paddingLeft: '-1px',
  };

  const lineStyle = {
    position: 'absolute',
    left: '0',
    top: '0',
    bottom: '0',
    width: '2px',
    background: 'linear-gradient(to bottom, #aa367c, #4a2fbd)',
    animation: 'grow 2s ease-out forwards',
    transformOrigin: 'top',
  };

  return (
    <div style={containerStyle} id="education">
      <div style={blurredBackgroundStyle}></div>
      <h1 style={titleStyle}>
        Education & <span style={gradientTextStyle}>Experience</span>
      </h1>
      <div style={sectionStyle}>
        <div style={columnStyle}>
          <h2 style={sectionTitleStyle}>
            Education
            <div style={underlineStyle} />
          </h2>
          <div style={timelineStyle}>
            <div style={lineStyle} />
            <TimelineItem
              year="2024"
              title="Uki Coding School"
              description="Currently enrolled at Uki Coding School, focusing on Full Stack Web development. The curriculum covers HTML, CSS, JavaScript, Java, React, and Node.js."
            />
            <TimelineItem
              year="2023"
              title="Technical College"
              description="Pursued NVQ-4 Certification in ICT Technician at Technical College of Jaffna. Gained proficiency in programming languages and Microsoft Office management."
            />
            <TimelineItem
              year="2021"
              title="High School"
              description="Attended J/Uduvil Girls' College, excelled in mathematics, art, and computer science. Participated in various extracurricular activities."
            />
          </div>
        </div>
        <div style={columnStyle}>
          <h2 style={sectionTitleStyle}>
            Professional Experience
            <div style={underlineStyle} />
          </h2>
          <div style={timelineStyle}>
            <div style={lineStyle} />
            <TimelineItem
              year="2023"
              title="IT Support Technician"
              description="I completed an internship as a computer technician, gaining valuable hands-on experience in diagnosing and resolving Microsoft Office issues. During this internship, I worked with a team to manage public communications and database access."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
