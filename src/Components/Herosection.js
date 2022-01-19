import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Heading from "./Heading";
import ScrollAnimation from "react-animate-on-scroll";
function Herosection() {
  return (
    <>
      <div className="hero-section">
        <Container fluid>
          <Row>
            <Col lg="6">
              <div className="hero-text">
                <ScrollAnimation className="animate__animated animate__zoomIn">
                  <Heading Title="The First Arabs" />
                </ScrollAnimation>

                <h3 className="font-weight-bold">
                  A collection of 10,000 unique Arab<br></br> characters living
                  on the Ethereum blockchain.
                </h3>

                <p>
                  Be part of the first community to explore Arab culture in the
                  metaverse and support high-impact social
                  organizations. Coming Soon.
                </p>

                <a href="https://discord.gg/xP2UEkyj" className="cta-btn">
                  Join The First Arabs Discord
                </a>

                <ScrollAnimation className="animate__animated animate__zoomIn">
                  <Image
                    src="/assets/i/mint.png"
                    className="mint-box d-block"
                  />
                </ScrollAnimation>
              </div>
            </Col>
            <Col lg="1"></Col>
            <Col lg="5">
              <ScrollAnimation className="animate__animated animate__zoomIn">
                <div className="hero-brand pr-5">
                  <Image src="/assets/i/hero-brand.png" />
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Herosection;
