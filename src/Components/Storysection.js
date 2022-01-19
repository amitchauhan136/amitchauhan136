import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Heading from "./Heading";
import AOS from "aos";
import "aos/dist/aos.css";
function Storysection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="story-section" id="story">
        <Container fluid>
          <Heading Title="Story" />
          <Row className="align-items-center">
            <Col lg="9">
              <div className="story-text" data-aos="zoom-in">
                <p>
                  Many thousand years ago, the early Arabs began their journey
                  from the center of the earth. As kingdoms and empires rose and
                  fell, the Arabs spread far and wide taking their diverse and
                  rich cultures with them.
                </p>
                <p>
                  Today the Arabs find themselves divided and scattered across
                  the world, bounded by their physical realities and locations.
                  That was until The First Arabs appeared.
                </p>
                <p>
                  It’s still not clear where they came from, but we do know that
                  they are only 10,000 in number. These Arabs see the metaverse
                  - a new, unknown, and potentially dangerous space - as a
                  chance for cultures and those divided by country lines to be
                  united.
                </p>
                <p>
                  It is said that they have rekindled forgotten bonds and are
                  the first Arabs to make the perilous journey into the
                  metaverse. They are driven by their collective power and their
                  mission to support their communities in kindness and good.
                </p>
                <p>
                  Be part of The First Arabs in crossing over into the
                  metaverse, and building the unified Arab world we dream of.
                </p>
              </div>
            </Col>
            <Col lg="3">
              <div className="story-brand" data-aos="zoom-in">
                {" "}
                <Image src="/assets/i/s-brand.png" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Storysection;
