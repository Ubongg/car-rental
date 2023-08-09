"use client";

import Background from "@/components/background/background";
import Car from "@/components/car/Car";
import React from "react";
import styled from "styled-components";

const Cars = () => {
  return (
    <Container>
      <Background header="Cars" />
      <CarsWrap>
        <Car
          body="SUV"
          name="Jeep Renegade"
          img="/assets/car1.jpeg"
          price="$265"
        />
        <Car
          body="Exotic Car"
          name="Ferarri Enzo"
          img="/assets/car3.jpeg"
          price="$167"
        />
        <Car
          body="Pickup Truck"
          name="Ford Raptor"
          img="/assets/car4.jpeg"
          price="$147"
        />
        <Car
          body="Exotic Car"
          name="Chevrolet Camaro"
          img="/assets/car6.jpeg"
          price="$245"
        />
        <Car
          body="Minivan"
          name="Hyundai Staria"
          img="/assets/car7.jpeg"
          price="$299"
        />
        <Car
          body="Exotic Car"
          name="Bentley"
          img="/assets/car9.jpeg"
          price="$131"
        />
        <Car body="Sedan" name="Lexus" img="/assets/car10.jpeg" price="$152" />
        <Car
          body="SUV"
          name="Range Rover"
          img="/assets/car11.jpeg"
          price="$228"
        />
        <Car
          body="Sedan"
          name="Mini Cooper"
          img="/assets/car12.jpeg"
          price="$244"
        />
      </CarsWrap>
    </Container>
  );
};

export default Cars;

const Container = styled.div`
  padding: 0 var(--smallPadding);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CarsWrap = styled.div`
  max-width: 480px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 100px 0;

  @media screen and (min-width: 768px) {
    max-width: 650px;
  }
  @media screen and (min-width: 1024px) {
    width: var(--width);
    margin-inline: var(--margin-inline);
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
