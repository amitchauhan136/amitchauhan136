import React, { useContext, useEffect } from "react";
import { Accordion, Card, useAccordionButton, Image } from "react-bootstrap";
import AccordionContext from "react-bootstrap/AccordionContext";
import ScrollAnimation from "react-animate-on-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
      className={isCurrentEventKey ? "active" : "inactive"}
    >
      {children}
    </button>
  );
}

export default function FaqAccordian() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Accordion>
      <ScrollAnimation className="animate__animated animate__zoomIn">
        <Card data-aos="zoom-in">
          <Card.Header>
            <ContextAwareToggle eventKey="0">
              <span>How do I buy a First Arab NFT?</span>
              <Image
                className="plus-accordian"
                src="/assets/i/plus-accordian.svg"
              />
              <Image
                className="minus-accordian"
                src="/assets/i/minus-accordian.svg"
              />
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <ScrollAnimation className="animate__animated animate__zoomIn">
              <Card.Body>
                <p>
                  <span>1.</span> If you don’t have a crypto wallet (outside of
                  an exchange), you’ll need to download one. We recommend using
                  Metamask (a popular wallet that holds your crypto and NFTs).
                </p>
                <p>
                  <span>2.</span> Transfer the necessary amount of Ethereum
                  (ETH) into your Metamask wallet address. Note: make sure you
                  transfer a little extra ETH to be able to pay for Ethereum gas
                  fees; you’ll need gas fees for the transfer and for the
                  minting process.
                </p>
                <p>
                  <span>3.</span> Connect your wallet by clicking the button at
                  the top right-hand-side of the website (a “Connect Wallet”
                  button will be available at the top of this page when we
                  launch).
                </p>
                <p>
                  <span>4.</span> Choose the # of The First Arabs NFTs you’d
                  like to mint by using the arrows on the black "Mint” button (a
                  “Mint” button will be available at the top of this page when
                  we launch).
                </p>
                <p>
                  <span>5.</span> Click “Mint” to start your purchase. You’ll be
                  asked to verify the amount before confirming.{" "}
                </p>
                <p>
                  <span>6.</span> Welcome to the club!
                </p>
              </Card.Body>
            </ScrollAnimation>
          </Accordion.Collapse>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation className="animate__animated animate__zoomIn">
        <Card data-aos="zoom-in">
          <Card.Header>
            <ContextAwareToggle eventKey="1">
              <span>How much does it cost to mint an Arab?</span>
              <Image
                className="plus-accordian"
                src="/assets/i/plus-accordian.svg"
              />
              <Image
                className="minus-accordian"
                src="/assets/i/minus-accordian.svg"
              />
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <ScrollAnimation className="animate__animated animate__zoomIn">
              <Card.Body>
                <p>0.09 ETH + Gas</p>
              </Card.Body>
            </ScrollAnimation>
          </Accordion.Collapse>
        </Card>{" "}
      </ScrollAnimation>
      <ScrollAnimation className="animate__animated animate__zoomIn">
        <Card data-aos="zoom-in">
          <Card.Header>
            <ContextAwareToggle eventKey="2">
              <span>Why should I hold a First Arab?</span>
              <Image
                className="plus-accordian"
                src="/assets/i/plus-accordian.svg"
              />
              <Image
                className="minus-accordian"
                src="/assets/i/minus-accordian.svg"
              />
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <ScrollAnimation className="animate__animated animate__zoomIn">
              <Card.Body>
                <p>
                  Holding an Arab is your gateway ticket to The First Arabs
                  universe. Your unique Arab ensures you are a part of a
                  community of like-minded individuals who want to make an
                  impact and support underprivileged communities.
                </p>
                <p>
                  On top of being a novel and authentic addition to your NFT art
                  collection, you’ll receive exclusive benefits such as
                  community voting rights, merchandise store access, and other
                  special privileges.
                </p>
                <p>
                  As the NFT holder, you and only you own the full commercials
                  rights to your First Arab.
                </p>
              </Card.Body>
            </ScrollAnimation>
          </Accordion.Collapse>
        </Card>
      </ScrollAnimation>
      <ScrollAnimation className="animate__animated animate__zoomIn">
        <Card data-aos="zoom-in">
          <Card.Header>
            <ContextAwareToggle eventKey="3">
              <span>What is the total supply?</span>
              <Image
                className="plus-accordian"
                src="/assets/i/plus-accordian.svg"
              />
              <Image
                className="minus-accordian"
                src="/assets/i/minus-accordian.svg"
              />
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <ScrollAnimation className="animate__animated animate__zoomIn">
              <Card.Body>
                <p>
                  A total of 10,000 unique First Arabs NFTs will be created.
                  This is all there will ever be.
                </p>
              </Card.Body>
            </ScrollAnimation>
          </Accordion.Collapse>
        </Card>
      </ScrollAnimation>
      <ScrollAnimation className="animate__animated animate__zoomIn">
        <Card data-aos="zoom-in">
          <Card.Header>
            <ContextAwareToggle eventKey="4">
              <span>How has the collection been designed?</span>
              <Image
                className="plus-accordian"
                src="/assets/i/plus-accordian.svg"
              />
              <Image
                className="minus-accordian"
                src="/assets/i/minus-accordian.svg"
              />
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <ScrollAnimation className="animate__animated animate__zoomIn">
              <Card.Body>
                <p>
                  Randomly generated from millions of potential combinations,
                  each Arab is one-of-a-kind, inspired by cultures from across
                  the Arab world, and designed to celebrate Arab culture and
                  diversity.
                </p>

                <p>
                  The designs combine authentic traditional Arab culture, modern
                  fashion, and original futuristic “Cyber Arab” concepts, to
                  create a unique and timeless collection.{" "}
                </p>
                <p>
                  The unifying feature of the collection is the names of the 22
                  Arab nations stenciled onto the sides for each portrait in
                  authentic Kufic calligraphy.
                </p>
              </Card.Body>
            </ScrollAnimation>
          </Accordion.Collapse>
        </Card>
      </ScrollAnimation>
      <ScrollAnimation className="animate__animated animate__zoomIn">
        <Card data-aos="zoom-in">
          <Card.Header>
            <ContextAwareToggle eventKey="5">
              <span>What are the different properties?</span>
              <Image
                className="plus-accordian"
                src="/assets/i/plus-accordian.svg"
              />
              <Image
                className="minus-accordian"
                src="/assets/i/minus-accordian.svg"
              />
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <ScrollAnimation className="animate__animated animate__zoomIn">
              <Card.Body>
                <p>
                  The First Arabs is comprised from 250+ carefully-drawn designs
                  across 8 different trait types: Background, Head, Skin, Eyes,
                  Lower Face, Clothes, Item, and Type.
                </p>
              </Card.Body>
            </ScrollAnimation>
          </Accordion.Collapse>
        </Card>
      </ScrollAnimation>
      <ScrollAnimation className="animate__animated animate__zoomIn">
        <Card data-aos="zoom-in">
          <Card.Header>
            <ContextAwareToggle eventKey="6">
              <span>What are the most rare properties?</span>
              <Image
                className="plus-accordian"
                src="/assets/i/plus-accordian.svg"
              />
              <Image
                className="minus-accordian"
                src="/assets/i/minus-accordian.svg"
              />
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <ScrollAnimation className="animate__animated animate__zoomIn">
              <Card.Body>
                <p>
                  Each Arab is rare, but some properties are more rare than
                  others (we’ll leave those as a surprise). Soon after launch,
                  the rarity of The First Arabs will be found on rarity.tools.
                </p>
              </Card.Body>
            </ScrollAnimation>
          </Accordion.Collapse>
        </Card>
      </ScrollAnimation>
    </Accordion>
  );
}
