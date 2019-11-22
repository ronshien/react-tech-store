import React from "react";
import styled from "styled-components";
import mainBcg from "../images/mainBcg.jpeg";

export default function Hero({ img, title, max, children }) {
  return <HeroWrapper>{children}</HeroWrapper>;
}

const HeroWrapper = styled.div``;
