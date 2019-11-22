import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

export default function HomePage(props) {
  return (
    <>
      <Hero>
        <Link to="/products">our products</Link>
      </Hero>
    </>
  );
}
