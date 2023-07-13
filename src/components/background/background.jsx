import React from "react";
import styled from "styled-components";

const Background = ({ header }) => {
  return (
    <Banner>
      <Header>
        <h2>{header}</h2>
      </Header>
    </Banner>
  );
};

export default Background;

const Banner = styled.div`
  width: 100vw;
  background: url("/assets/top-bg.avif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;

  @media screen and (min-width: 1024px) {
    padding: 60px 0 100px;
  }
`;
const Header = styled.div`
  z-index: 1;
  margin-top: 70px;
  h2 {
    color: white;
    font-size: 3rem;

    @media screen and (min-width: 768px) {
      font-size: 3rem;
    }
  }
  @media screen and (min-width: 1024px) {
    margin-top: 40px;
  }
`;
