import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default function SideCart(props) {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <p>car items</p>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  transition: var(--mainTransition);
  border-left: 4px solid var(--primaryColor);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};

  @media (min-width: 576px) {
    width: 20rem;
  }
`;
