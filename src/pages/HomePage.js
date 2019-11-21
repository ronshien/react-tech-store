import React from "react";
import { ProductConsumer } from "../context";

function HomePage(props) {
  return (
    <>
      <ProductConsumer>
        {value => {
          console.log(value);
          return <h1>hello from home page</h1>;
        }}
      </ProductConsumer>
    </>
  );
}

export default HomePage;
