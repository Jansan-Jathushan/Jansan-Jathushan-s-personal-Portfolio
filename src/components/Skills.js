// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"

// export const Skills = () => {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   return (
//     <section className="skill" id="skills">
//         <div className="container">
//             <div className="row">
//                 <div className="col-12">
//                     <div className="skill-bx wow zoomIn">
//                         <h2>Skills</h2>
//                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
//                         <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
//                             <div className="item">
//                                 <img src={meter1} alt="Image" />
//                                 <h5>Web Development</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter2} alt="Image" />
//                                 <h5>Brand Identity</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter3} alt="Image" />
//                                 <h5>Logo Design</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter1} alt="Image" />
//                                 <h5>Web Development</h5>
//                             </div>
//                         </Carousel>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <img className="background-image-left" src={colorSharp} alt="Image" />
//     </section>
//   )
// }


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"; // Keep the background image URL as is

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const imageStyle = {
    borderRadius: '50%', // Round the images
    border: '2px solid transparent', // Initially no border
    backgroundImage: 'linear-gradient(45deg, #aa367c, #4a2fbd)', // Gradient border
    backgroundOrigin: 'border-box', // Ensure the background is used for the border
    padding: '5px', // Space inside the image for the border
    width: '100px', // Set width for consistency
    height: '100px', // Set height for consistency
    objectFit: 'cover', // Ensure the image fits inside the circle
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
              Full-Stack Web Development (HTML, CSS, JavaScript, React, Node.js) and graphic design,
                <br />
                crafting responsive, user-friendly websites.
              </p>

              {/* Technical Skills */}
              <h3>Technical Skills</h3>
              <div style={{ margin: '30px 0' }}></div>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                dir="rtl" // Right to left sliding
              >
                <div className="item">
                  <img
                    src="https://i.ibb.co/8rFR1s7/HTML5-logo-and-wordmark-svg.png"
                    alt="HTML"
                    style={imageStyle} // Applying inline style
                  />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img
                    src="https://i.ibb.co/T4BVrVH/CSS-Logo.png"
                    alt="CSS"
                    style={imageStyle} // Applying inline style
                  />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img
                    src="https://i.ibb.co/C5hnWKV/mern.png"
                    alt="MERN Stack"
                    style={imageStyle} // Applying inline style
                  />
                  <h5>MERN Stack</h5>
                </div>
                <div className="item">
                  <img
                    src="https://i.ibb.co/S0MCSRz/Bootstrap-logo-svg-removebg-preview.png"
                    alt="Bootstrap"
                    style={imageStyle} // Applying inline style
                  />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img
                    src="https://i.ibb.co/GPqz5PR/canvaaaaaaaaaa-removebg-preview.png"
                    alt="Graphic Design"
                    style={imageStyle} // Applying inline style
                  />
                  <h5>Graphic Design</h5>
                </div>
                <div className="item">
                  <img
                    src="https://i.ibb.co/f1kxCBr/video-removebg-preview.png"
                    alt="Video Editing"
                    style={imageStyle} // Applying inline style
                  />
                  <h5>Video Editing</h5>
                </div>
              </Carousel>

              {/* Gap Between Sections */}
              <div style={{ margin: '80px 0' }}></div>

              {/* Interpersonal Skills */}
              <h3>Interpersonal Skills</h3>
              <div style={{ margin: '30px 0' }}></div>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                dir="rtl" // Right to left sliding
              >
                <div className="item">
                  <img
                    src="https://i.ibb.co/n3PLMFF/leadership-removebg-preview.png"
                    alt="Leadership"
                    style={imageStyle} // Applying inline style
                  />
                  <h5>Leadership</h5>
                </div>
                <div className="item">
                  <img
                    src="https://i.ibb.co/qWxN3Jg/teamwork-removebg-preview.png"
                    alt="Teamwork"
                    style={imageStyle} // Applying inline style
                  />
                  <h5>Team work</h5>
                </div>
                <div className="item">
                  <img
                    src="https://i.ibb.co/C0x5dmS/resolutionl-removebg-preview.png"
                    alt="Conflict Resolution"
                    style={imageStyle} // Applying inline style
                  />
                  <h5>Conflict Resolution</h5>
                </div>
                <div className="item">
                  <img
                    src="https://i.ibb.co/2s0LF4Y/adaptability-removebg-preview.png"
                    alt="Adaptability"
                    style={imageStyle} // Applying inline style
                  />
                  <h5>Adaptability</h5>
                </div>
                <div className="item">
                  <img
                    src="https://i.ibb.co/hKfZ11p/like.png"
                    alt="Positivity"
                    style={imageStyle} // Applying inline style
                  />
                  <h5>Positivity</h5>
                </div>
                <div className="item">
                  <img
                    src="https://i.ibb.co/HhWYCrX/EI-removebg-preview.png"
                    alt="Emotional Intelligence"
                    style={imageStyle} // Applying inline style
                  />
                  <h5>Emotional Intelligence</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
