import "./Services.css";
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { GrYoutube } from 'react-icons/gr';
import { DiAsterisk } from "react-icons/di";
import { DiCodeigniter } from "react-icons/di";
import { DiMeteor } from "react-icons/di";
import { DiSwift } from "react-icons/di";   
function Services() {
  const scrollRef = useRef(null);

  const scrollToSection = () => {
    if (scrollRef.current) {
      window.scrollTo({
        top: scrollRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 350; // Adjust scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 350; // Adjust scroll amount as needed
    }
  };

  return (
    <>
      <div className="home">
        <h1>Career Solution for accelerating journey</h1>
        <p className="home-text">
          Accelerate growth with innovative business solutions that harness cutting-edge technology to drive strategic advancements and deliver outstanding results for your business.
        </p>
        <button className="get-started-button" onClick={scrollToSection}>Get Started</button>
      </div>
      <h3 className="h3-header2"  ref={scrollRef} id="sectionToScroll">SERVICES</h3>
      <p className="p-text">Our core competency is to translate your data into insightful stories. See your data narrating for itself and how it helps your business in decision making.</p>
      <div className="service-boxes">
      <div className="service-box">
  <DiAsterisk className="service-icon" />
  <h4 className="service-title">Quality Assurance</h4>
  <p className="p-text2">We prioritize quality with rigorous testing and assurance processes, ensuring top-notch deliverables that meet the highest industry standards.</p>
</div>

<div className="service-box">
  <DiCodeigniter className="service-icon" />
  <h4 className="service-title">Continuous Learning</h4>
  <p className="p-text2">Stay ahead with our team's continuous learning approach. We keep ourselves updated with the latest technologies and trends to deliver cutting-edge solutions.</p>
</div>

<div className="service-box">
  <DiMeteor className="service-icon" />
  <h4 className="service-title">Expertise Across Industries</h4>
  <p className="p-text2">Benefit from our diverse experience across various industries, including tech consultancies, software product development, and global enterprises.</p>
</div>

<div className="service-box">
  <DiSwift className="service-icon" />
  <h4 className="service-title">On-Time Delivery</h4>
  <p className="p-text2">We understand the importance of deadlines. Our team adheres to strict timelines and conducts regular status checks to ensure timely project completion.</p>
</div>

  </div>

        <h3 className="h3-header">Contact Us</h3>

        <div className="contact-us">
          <div className="contact-details">
            <address>
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <strong>Location:</strong><br />
                Office No. 1009, Aggarwal Cyber Plaza-1
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <strong>Email:</strong><br />
                <a href="mailto:uday@gmail.com">contact@dataoids.com</a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhoneAlt} />
                <strong>Call:</strong><br />
                <a href="tel:+918130626763">+91 9391392188</a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <strong>Booking:</strong><br />
                <a href="">Schedule online</a>
              </div>
            </address>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8629309126027!2d77.1474724109405!3d28.693746575529612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07ee44de7683%3A0xa872986691779da0!2sDataoids%20Analytics%20LLP!5e0!3m2!1sen!2sin!4v1702995466517!5m2!1sen!2sin" id="style-eCw7S" class="style-eCw7S" title="Video about accessibility"></iframe>

          </div>

          <div className="contact-form-container">
            <form className="contact-form">
              <input type="text" placeholder="Name*" required />
              <input type="email" placeholder="Email Address*" required />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Services</h4>
          {/* Add other links as needed */}
        </div>
        <div className="footer-section">
          <h4>About</h4>
          {/* Add other links as needed */}
        </div>
        <div className="footer-section">
          <h4>Leadership</h4>
          {/* Add other links as needed */}
        </div>
        <div className="footer-section">
          <h4>Industries</h4>
          {/* Add other links as needed */}
        </div>
        <div className="footer-section">
          <h4>Careers</h4>
          {/* Add other links as needed */}
        </div>
        <div className="footer-section">
          <h4>CSR</h4>
        
        </div>
      </div>
     <div className="img-bar">
        <div className="footer-bottom">
        <div className="footer-social-icons">
          <a href="https://www.facebook.com"><FaFacebook /></a>
          <a href="https://www.facebook.com"><FaInstagram /></a>
          <a href="https://www.facebook.com"><FaTwitter /></a>
          <a href="https://www.facebook.com"><FaLinkedin /></a>
          <a href="https://www.facebook.com"><GrYoutube /></a>
        </div>
        </div>
        </div>
      <div className="footer-copyright">
        <p>© Copyright JobBoost Solutions. All Rights Reserved</p>
      </div>
    </footer>
    </>
  );
}

export default Services;
