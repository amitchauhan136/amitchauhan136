import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="newsletterbox text-center" data-aos="zoom-in">
        <h6>Sign up to our newsletter.</h6>
        <p>We’ll update you on major milestones of the project once a month.</p>

        <Form>
          <Form.Group className="form-group">
            <div className="outline-box">
              <Form.Control type="email" placeholder="Email Address" required />
            </div>
            <Button variant="primary" type="submit">
              Sign me up
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default Footer;
