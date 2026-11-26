import React from "react";
import Hero from "@/components/store/Hero";
import Benefits from "@/components/store/Benefits";
import Categories from "@/components/store/Categories";
import Catalogue from "@/components/store/Catalogue";
import About from "@/components/store/About";
import Reviews from "@/components/store/Reviews";
import Newsletter from "@/components/store/Newsletter";
import Contact from "@/components/store/Contact";
export default function Home() {
  return (
    <>
      <Hero />
      <Benefits compact />
      <Categories />
      <Catalogue />
      <About />
      <Benefits />
      <Reviews />
      <Newsletter />
      <Contact />
    </>
  );
}
