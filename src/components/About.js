import "./About.css";
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { CgAddR, CgCornerDoubleUpRight, CgTrending } from "react-icons/cg";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { GrYoutube } from 'react-icons/gr';
import { DiAsterisk } from "react-icons/di";
import { DiCodeigniter } from "react-icons/di";
import { DiMeteor } from "react-icons/di";
import { DiSwift } from "react-icons/di";   

function About() {
  
  return (
    <><div class="container-tfr aos-y54" data-aos="fade-up">
    <div class="section-pen">
        <h2 >About Us</h2>
    </div>
    <div class="row-7l7 content-f2e">
        <div class="col-89n">
            <p> We are a group of professionals extremely passionate for what we do here. That shows up in the results that we deliver. We speak data and business fluently which helps you as a business to draw value out of your data. Here is how - </p>
            <ul>
                <li>
                    <i class="ri-check-double-ijf"></i> We understand your business to the core
                </li>
                <li>
                    <i class="ri-check-double-ijf"></i> We use the latest technologies to deliver up-market solutions
                </li>
                <li>
                    <i class="ri-check-double-ijf"></i> We build solutions that are built to long last and are scalable
                </li>
            </ul>
        </div>
        <div class="col-89n pt-6ri pt-lg-ls8">
            <p> We work together on finding solutions. You will see the same faces from the first hello to the completion of the project. We are experts in delivering analytical solutions using a wide range of latest technologies like Azure, Python, Microsoft Power BI, Power Platform, Snowflake, AWS and many more. </p>
        </div>
    </div>
</div>

<div class="frame-olb">
    <div class="frame-dn8"><img class="ele-ykc" src=""  />
        <div class="frame-etj">
            <div class="frame-44w">
                <div class="wrapper-7ot">Hari Royal</div>
            </div>
            <div class="wrapper-n8h">Founder &amp; CEO, JobBoost</div>
            <p class="wrapper-5ef">Hari brings over two years experience in managing strategic engagements and leverages 
            her vast operational experience to advise companies on growing their business by uncovering new opportunities and 
            identifying untapped revenue streams in addition to developing leadership capital. <br/><br/>he is widely recognised 
            for his role in charting the growth of IT contract staffing in India and defining path-breaking staffing models 
            for Fortune 500 technology companies. A hands-on people person, he is known for shaping and fostering enthusiastic
             and energetic work culture and building high-performance teams.</p>
        </div>
    </div><img class="link-5o9" src="" />
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
        <a href="#">Schedule online</a>
      </div>
    </address>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8629309126027!2d77.1474724109405!3d28.693746575529612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07ee44de7683%3A0xa872986691779da0!2sDataoids%20Analytics%20LLP!5e0!3m2!1sen!2sin!4v1702995466517!5m2!1sen!2sin" id="style-eCw7S" class="style-eCw7S"></iframe>

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

<div>
<p>© Copyright JobBoost Solutions. All Rights Reserved</p>
</div>
</footer>
    </>
);
}

export default About;