import React from 'react';

export const AboutSection  = () => {
  const styles = {
    section: {
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem',
        color: '#ffffff',
        position: 'relative',
        backgroundImage: 'url(https://i.ibb.co/rcRzFmv/footer-bg.png)', // Replace with your image URL
        backgroundSize: 'cover',   // Ensures the image covers the entire section
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
      },
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'row' ,
      alignItems: 'center',
      gap: '10rem',
      '@media (max-width: 768px)': {
        flexDirection: 'column-reverse',
        textAlign: 'center' ,
      },
    },
    content: {
      flex: '1',
      padding: '2rem',
      '@media (max-width: 768px)': {
        padding: '1rem',
      },
    },
    title: {
        fontSize: '45px',
        fontWeight: 700,
      marginBottom: '1rem',
      '@media (max-width: 768px)': {
        fontSize: '1.5rem',
      },
    },
    email: {
        color: '#B8B8B8',
        fontSize: '15px',
        letterSpacing: '0.8px',
      opacity: '0.8',
      marginBottom: '2rem',
    },
    description: {
        color: '#B8B8B8',
        fontSize: '18px',
        letterSpacing: '0.8px',
        lineHeight: '1.5em',
      marginBottom: '2rem',
      '@media (max-width: 768px)': {
        fontSize: '0.9rem',
      },
    },
    imageContainer: {
      flex: 1,
      maxWidth: '400px',
      maxHeight: '400px',
      width: '100%',
      height: '100%',
      position: 'relative',
      borderRadius: '50%', // Ensures circular shape
      overflow: 'hidden', // Ensures the image doesn't spill outside the circle
      display: 'flex', // Centers content if needed
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 0 20px 5px rgba(170, 54, 124, 0.5), 0 0 40px 10px rgba(74, 47, 189, 0.5)',
      '@media (max-width: 768px)': {
        maxWidth: '300px',
        maxHeight: '300px',
        marginBottom: '2rem',
      },
    
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
      // filter: 'grayscale(100%)',
      boxShadow: '0 0 20px 5px rgba(170, 54, 124, 0.5), 0 0 40px 10px rgba(74, 47, 189, 0.5)',
    },
    imageShadow: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '50%',
      zIndex: -1,
      background: 'linear-gradient(45deg, #aa367c, #4a2fbd)',
      filter: 'blur(10px)',
      opacity: 0.7,
    },
    
    location: {
        color: '#B8B8B8',
        fontSize: '15px',
        letterSpacing: '0.8px',
      opacity: '0.8',
    },
    '@keyframes rotate': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  };

  return (
    <section style={styles.section} id='about'>
      <div style={styles.container}>
        <div style={styles.imageContainer}>
        <img 
            src="https://i.ibb.co/9YkN0Lg/linkedin-Profile.png" 
            alt="Profile"
            style={styles.image}
          />
        <div style={styles.imageShadow}></div>
        </div>
        <div style={styles.content}>
          <h1 style={styles.title}>About</h1>
          <p style={styles.email}>jansanjathushan@gmail.com</p>
          <p style={styles.description}>
          I am a skilled Full-Stack Web Developer with expertise in both front-end and back-end technologies. I specialize in building dynamic, user-friendly websites and applications, using modern frameworks and tools. With a strong foundation in web development, I also have a keen eye for graphic design, creating visually appealing and intuitive interfaces. My passion lies in crafting seamless web experiences, from conceptualization to deployment, ensuring high-quality and responsive solutions.
          </p>
          <div style={styles.location}>
            <p>POSTAL ADDRESS:</p>
            <p>ST/Thomas Lane, Beach Road, Point Pedro</p>
          </div>
        </div>
        
      </div>
      <style jsx>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;

