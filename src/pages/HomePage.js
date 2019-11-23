import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

export default function HomePage(props) {
  return (
    <>
      <Hero title="awesome gadgets" max="true">
        <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          our products
        </Link>
      </Hero>
    </>
  );
}
