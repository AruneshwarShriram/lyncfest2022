import React from "react";
import Nav from "./Nav";
import Steps from "./Steps";

import Title from "./Title";
import Footer from "./Footer";
import Domains from "./Domains";
import Sponsers from "../symp/sponsors";

const Home = () => {
  return (
    <div class="py-0 bg-black">
      <Nav />

      <Title />
      <Steps />

      <Domains />
      <Sponsers />
      <Footer />
    </div>
  );
};
export default Home;
