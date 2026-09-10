import Image from "next/image";
import Link from "next/link";

const FooterThree = () => {
  return (
    <footer className="main-footer footer-style-three">
      <div className="shape-29"></div>
      <div className="shape-28"></div>
      <div className="footer-top">
        <div className="auto-container">
          <div className="footer-widget-two">
            <h3 className="footer-title">Let’s Start a Project</h3>
            <div className="icon-box">
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="footer-column col-lg-3 col-md-6 col-sm-6">
            <div className="footer-widget about-widget">
              <figure className="image">
                <Link href="/">
                  <Image src="/assets/images/logo-2.png" alt="Logo" width={150} height={50} />
                </Link>
              </figure>
              <div className="text">
                Through critical analysis and creative inquiry, our mission is to understand the complexities human.
              </div>
              <ul className="social-icon-three">
                <li><Link href="https://www.linkedin.com/company/infinity-software-labs-official/"><i className="fab fa-linkedin-in"></i></Link></li>
                <li><Link href="https://www.instagram.com/infinitysoftwarelabs/?hl=en"><i className="fab fa-instagram"></i></Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-column col-lg-3 col-md-6 col-sm-6">
            <div className="footer-widget links-widget">
              <h4 className="widget-title">Quick Links</h4>
              <ul className="user-link">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/page-about">About Us</Link></li>
                <li><Link href="/page-services">Services</Link></li>
                <li><Link href="/">Portfolio</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-column col-lg-3 col-md-6 col-sm-6">
            <div className="footer-widget links-widget two">
              <h4 className="widget-title">Our Services</h4>
              <ul className="user-link">
                <li><Link href="/page-about">Mobile & App Design</Link></li>
                <li><Link href="/">Branding & Identity</Link></li>
                <li><Link href="/page-about">Consultation</Link></li>
                <li><Link href="/">UI/UX Design</Link></li>
                <li><Link href="/">System Creation</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-column col-lg-3 col-md-6 col-sm-6">
            <div className="footer-widget newsletter-widget">
              <h4 className="widget-title">See My Projects</h4>
              <ul className="social-link">
                <li><Link href="#">Behance</Link></li>
                <li><Link href="#">Upwork</Link></li>
                <li><Link href="#">Dribbble</Link></li>
                <li><Link href="#">Fiverr</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-three">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">
              © Copyright {new Date().getFullYear()} by Infinity Software Labs
            </div>
            <ul className="footer-nav">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
