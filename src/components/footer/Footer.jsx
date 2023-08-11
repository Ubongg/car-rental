"use client";

import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { MdLocationPin } from "react-icons/md";
import { GoMail } from "react-icons/go";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { RiPinterestFill, RiInstagramLine, RiPhoneFill } from "react-icons/ri";

const Footer = () => {
  return (
    <Container>
      <FooterWrap>
        <div className="about">
          <h5>About Yubo Rentals</h5>
          <p>
            Where quality meets affordability. We understand the importance of a
            smooth and enjoyable journey without the burden of excessive costs.
            That is why we have meticulously crafted our offerings to provide
            you with top-notch vehicles at minimum expense.
          </p>
        </div>
        <div className="links">
          <h5>Quick Links</h5>
          <div className="linksList">
            <Link href="/about">About</Link>
            <Link href="/news">News</Link>
            <Link href="/cars">Cars</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="contact">
          <h5>Contact Info</h5>
          <div className="infos">
            <div className="info">
              <span className="icon">
                <MdLocationPin />
              </span>
              <span className="text">Osongama Estate Road, Uyo</span>
            </div>
            <div className="info">
              <span className="icon">
                <RiPhoneFill />
              </span>
              <span className="text">+2348038038030</span>
            </div>
            <div className="info">
              <span className="icon">
                <GoMail />
              </span>
              <span className="text">contact@yuborentals.com</span>
            </div>
          </div>
        </div>
        <div className="social">
          <h5>Social Networks</h5>
          <div className="socialIcon">
            <span>
              <TiSocialFacebook />
            </span>
            <span>
              <TiSocialTwitter />
            </span>
            <span>
              <TiSocialLinkedin />
            </span>
            <span>
              <RiPinterestFill />
            </span>
            <span>
              <RiInstagramLine />
            </span>
          </div>
        </div>
      </FooterWrap>
      <FooterDown>
        <p>Copyright 2023 - Yubo Rentals by Yubo</p>
        <div className="termsPolicy">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </FooterDown>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background: black;
  color: var(--lightGrey);
  padding: 80px var(--smallPadding) 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const FooterWrap = styled.div`
  max-width: 480px;
  width: 100%;
  margin-bottom: 60px;

  h5 {
    font-size: 1.15rem;
    margin-bottom: 20px;
  }
  p {
    line-height: var(--line-height);
    letter-spacing: var(--small-spacing);
    margin-bottom: 60px;
  }
  .infos {
    margin-bottom: 60px;
  }
  .info {
    display: flex;
    gap: 1rem;
    margin-bottom: 10px;
  }
  .info .icon {
    color: var(--primaryColor);
    margin-top: 2px;
  }
  .linksList {
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    gap: 0.8rem;
  }
  .linksList h5 {
    margin-bottom: 5px;
  }
  .linksList a {
    color: var(--lightGrey);
  }
  .socialIcon {
    display: flex;
    gap: 0.6rem;
  }
  .socialIcon span {
    background: var(--lightGrey);
    border-radius: 50%;
    color: var(--primaryColor);
    padding: 6px;
    font-size: 1.2rem;
    display: flex;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    max-width: 650px;
  }
  @media screen and (min-width: 1024px) {
    width: var(--width);
    margin-inline: var(--margin-inline);
    max-width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .about,
    .contact,
    .socials {
      flex: 1;
    }
  }
`;
const FooterDown = styled.div`
  border-top: 0.5px solid var(--mainGrey);
  padding: 20px 0 30px;
  max-width: 480px;
  width: 100%;

  .termsPolicy {
    display: flex;
    gap: 1rem;
    font-weight: 600;
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    max-width: 650px;
  }
  @media screen and (min-width: 1024px) {
    width: var(--width);
    margin-inline: var(--margin-inline);
    max-width: 100%;
    display: flex;
    justify-content: space-between;

    .termsPolicy {
      margin-top: 0;
    }
  }
`;
