import React from "react";
import Desginspacer from "../Components/Desginspacer";
import Header from "../Components/Header";
import Herosection from "../Components/Herosection";
import Storysection from "../Components/Storysection";
import Missionsection from "../Components/Missionsection";
import RelatedSlider from "../Components/RelatedSlider";
import Faq from "../Components/Faq";
import Roadmap from "../Components/Roadmap";
import Team from "../Components/Team";
import Footer from "../Components/Footer";
import Copright from "../Components/Copright";

function Home() {
  return (
    <>
<div id="home">
      <Header />
      <Herosection />
      <Desginspacer />
      <Storysection />
      <Missionsection />
      <RelatedSlider />
      <Desginspacer />
      <Faq />
      <Roadmap />
      <Team />
      <Footer />
      <Copright />
      </div>
    </>
  );
}

export default Home;
