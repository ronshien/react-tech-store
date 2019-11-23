import React from "react";
import Hero from "../components/Hero";
import contactImg from "../images/contactBcg.jpeg";
import Contact from "../components/ContactPage/Contact";

function ContactPage(props) {
  return (
    <>
      <Hero img={contactImg}></Hero>
      <Contact></Contact>
    </>
  );
}

export default ContactPage;
