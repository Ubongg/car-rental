"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import styled from "styled-components";
import { HiHeart } from "react-icons/hi";
import Link from "next/link";

const Car = ({ body, name, img, price }) => {
  const [count, setCount] = useState(21);
  const [increase, setIncrease] = useState(false);
  const [decrease, setDecrease] = useState(false);

  const likesRef = useRef(null);

  const changeCount = () => {
    if (increase) {
      setCount((prev) => {
        return prev - 1;
      });
      setDecrease(true);
      setIncrease(false);
      likesRef.current.style.color = "rgb(224, 222, 222)";
    } else {
      setCount((prev) => {
        return prev + 1;
      });
      setDecrease(false);
      setIncrease(true);
      likesRef.current.style.color = "rgb(249, 89, 115)";
    }
  };

  return (
    <Wrap>
      <ImgBx>
        <Image src={img} fill={true} alt="" className="img" />
      </ImgBx>
      <TextBx>
        <TopText>
          <CarName>{name}</CarName>
          <Likes>
            <span className="icon" onClick={changeCount} ref={likesRef}>
              <HiHeart />
            </span>
            <span className="count">{count}</span>
          </Likes>
          <Details>
            <Detail>
              <span className="icon">
                <Image src="/assets/1.svg" width={15} height={15} alt="" />
              </span>
              <span className="text">5</span>
            </Detail>
            <Detail>
              <span className="icon">
                <Image src="/assets/2.svg" width={15} height={15} alt="" />
              </span>
              <span className="text">2</span>
            </Detail>
            <Detail>
              <span className="icon">
                <Image src="/assets/3.svg" width={15} height={15} alt="" />
              </span>
              <span className="text">4</span>
            </Detail>
            <Detail>
              <span className="icon">
                <Image src="/assets/4.svg" width={15} height={15} alt="" />
              </span>
              <span className="text">{body}</span>
            </Detail>
          </Details>
        </TopText>
        <DownText>
          <p>Daily rate from</p>
          <div className="priceButton">
            <h2>{price}</h2>
            <button>
              <Link href="/cars">Rent Now</Link>
            </button>
          </div>
        </DownText>
      </TextBx>
    </Wrap>
  );
};

export default Car;

const Wrap = styled.div`
  color: black;
  max-width: 480px;
  width: 100%;
  border: 1px solid var(--lightGrey);
  padding: 10px;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);

  @media screen and (min-width: 768px) {
    max-width: 650px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 100%;
  }
`;
const ImgBx = styled.div`
  position: relative;
  width: 100%;
  height: 250px;

  .img {
    object-fit: cover;
    border-radius: var(--radius);
  }

  @media screen and (min-width: 768px) {
    height: 400px;
  }
  @media screen and (min-width: 1024px) {
    height: 160px;
  }
`;
const TextBx = styled.div`
  padding: 20px;
`;
const CarName = styled.div`
  font-weight: 600;
  color: var(--mainBlack);
`;
const Likes = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  gap: 0.2rem;

  .icon {
    color: var(--lightGrey);
    font-size: 1.1rem;
  }
  .count {
    font-size: 0.95rem;
    color: var(--mainGrey);
    margin-top: 1px;
  }
`;
const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 15px;
`;
const Detail = styled.div`
  display: flex;
  gap: 0.2rem;

  .text {
    font-weight: 600;
    font-size: 0.9rem;
  }
`;
const TopText = styled.div`
  border-bottom: 1px solid var(--lightGrey);
  padding: 0 0 15px;
  position: relative;
`;
const DownText = styled.div`
  margin-top: 15px;

  p {
    color: var(--mainGrey);
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  .priceButton {
    display: flex;
    justify-content: space-between;
  }
  button {
    border: none;
    border-radius: var(--radius);
    margin-top: -10px;
  }
  button a {
    display: flex;
    background: var(--primaryColor);
    padding: 8px 15px;
    color: var(--mainWhite);
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: var(--small-radius);
  }
`;
