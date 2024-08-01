import React from "react";
import {
  Banner,
  Companies,
  Features,
  Hero,
  Price,
  Questions,
  Quote,
  Trusted,
} from "./components";

const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Features />
      <Trusted />
      <Quote />
      <Price />
      <Questions />
      <Banner />
    </>
  );
};

export default Home;
