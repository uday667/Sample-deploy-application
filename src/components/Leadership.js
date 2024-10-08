import "./Leadership.css";
import { useRef } from 'react';

function Leadership() {
  const scrollRef = useRef(null);

  const scrollToSection = () => {
    if (scrollRef.current) {
      window.scrollTo({
        top: scrollRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const sectionStyle = {
    background: 'url(https://www.abcconsultants.in/wp-content/themes/abc/assets/img/blue-bg-img-sm.jpg)',
    padding: '20px', // Reduced padding for a smaller size
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const containerStyle = {
    maxWidth: '960px', // Adjusted maximum width
    width: '100%',
    paddingRight: '10px', // Adjusted padding for smaller size
    paddingLeft: '10px', // Adjusted padding for smaller size
    marginRight: 'auto',
    marginLeft: 'auto',
  };

  const headingStyle = {
    fontFamily: 'semibold',
    fontSize: '36px', // Reduced font size for smaller size
    color: '#1e1515', // Changed color to match the provided CSS
    marginBottom: '8px',
     // Reduced margin for smaller size
  };

  const sectionStyle1 = {
    background: 'url(https://www.abcconsultants.in/wp-content/themes/abc/assets/img/blue-bg-img-sm.jpg)',
    padding: '20px', // Reduced padding for a smaller size
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop :'70px',
  };

  const containerStyle1 = {
    maxWidth: '960px', // Adjusted maximum width
    width: '100%',
    paddingRight: '10px', // Adjusted padding for smaller size
    paddingLeft: '10px', // Adjusted padding for smaller size
    marginRight: 'auto',
    marginLeft: 'auto',
    
  };

  const headingStyle1 = {
    fontFamily: 'semibold',
    fontSize: '36px', // Reduced font size for smaller size
    color: '#1e1515', // Changed color to match the provided CSS
    marginBottom: '8px',
     // Reduced margin for smaller size
  };



  return (
    <>
     <section style={sectionStyle}>
      <div style={containerStyle}>
        <div className="header-tol">
          <h1 style={headingStyle}>Leadership Hiring</h1>
        </div>
      </div>
    </section>
      <div className="about-eis">
        <div className="image-container">
          <figure className="about-cbo" >
            <img src="https://www.abcconsultants.in/wp-content/uploads/2023/07/getty-images-D6pVqvgKBBo-unsplash.jpg" alt="Leadership" />
          </figure>
          <aside className="about-p8w">
            <div className="info-box">
              <h2 className="title-jht">Building Careers. Building Organisations. Since 2023.</h2>
              <div className="form-d3o">
                <p>
                  In the last Years, JOB BOOST Consultants has gained an unparalleled depth of knowledge of the Indian talent landscape, its industry nuances, and client needs.
                  </p>
              </div>
              <div className="form-d3o">
                <p>
                We partner with organisations that are focused on business growth by hiring the right people to drive it.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div class="container-o5i">
      <div class="container">
  <h2 class="h2">The JOB BOOST SOLUTIONS Advantage</h2>
</div>
    <div class="exec-serv-adv-s4h">
        <div class="row-w5c f-9zv aos-nix">
            <div class="col-bvs">
                <article class="box-r3j">
                    <div class="properties-3ia"><img src="https://www.abcconsultants.in/wp-content/uploads/2023/07/clay-banks-b5S4FrJb7yQ-unsplash.jpg" />
                    </div>
                    <h5 class="properties-cj5">We know India best</h5>
                    <p class="sub-7es"></p>
                </article>
            </div>
            <div class="col-bvs">
                <article class="box-r3j">
                    <div class="properties-3ia"><img src="https://www.abcconsultants.in/wp-content/uploads/2023/07/josh-calabrese-Ev1XqeVL2wI-unsplash.jpg" />
                    </div>
                    <h5 class="properties-cj5">We are agile</h5>
                    <p class="sub-7es"></p>
                </article>
            </div>
            <div class="col-bvs">
                <article class="box-r3j">
                    <div class="properties-3ia"><img src="https://www.abcconsultants.in/wp-content/uploads/2023/07/alessandro-bianchi-_kdTyfnUFAc-unsplash.jpg" />
                    </div>
                    <h5 class="properties-cj5">We exhibit an entrepreneurial spirit</h5>
                    <p class="sub-7es"></p>
                </article>
            </div>
            <div class="col-bvs">
                <article class="box-r3j">
                    <div class="properties-3ia"><img src="https://www.abcconsultants.in/wp-content/uploads/2023/07/jessica-mangano-G3HHYVLOyso-unsplash.jpg" />
                    </div>
                    <h5 class="properties-cj5">We are empathetic </h5>
                    <p class="sub-7es"></p>
                </article>
            </div>
            <div class="col-bvs">
                <article class="box-r3j">
                    <div class="properties-3ia"><img src="https://www.abcconsultants.in/wp-content/uploads/2023/07/cdd20-MYwtNqVjC7o-unsplash.jpg" />
                    </div>
                    <h5 class="properties-cj5">We guarantee ethical conduct</h5>
                    <p class="sub-7es"></p>
                </article>
            </div>
            <div class="col-bvs">
                <article class="box-r3j">
                    <div class="properties-3ia"><img src="https://www.abcconsultants.in/wp-content/uploads/2023/07/rob-wicks-wmTmWDuvQUg-unsplash.jpg" />
                    </div>
                    <h5 class="properties-cj5">You can trust us</h5>
                    <p class="sub-7es"></p>
                </article>
            </div>
        </div>
    </div>
</div>
<section style={sectionStyle1}>
      <div style={containerStyle1}>
        <div className="header-tol">
          <h1 style={headingStyle1}> Partner with us<br /> for your strategic leadership hiring needs </h1>
        </div>
      </div>
    </section>
    <footer className="footer">

<div>
<p>© Copyright JobBoost Solutions. All Rights Reserved</p>
</div>
</footer>
    </>
  );
}

export default Leadership;
