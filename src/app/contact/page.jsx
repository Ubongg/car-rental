"use client";

import Background from "@/components/background/background";
import React from "react";
import styled from "styled-components";
import { MdLocationPin } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import AutoLogout from "@/components/AutoLogout/AutoLogout";

const Contact = () => {
  return (
    <Container>
      <AutoLogout />
      <Background header="Contact Us" />
      <ContactWrap>
        <form>
          <h2>Do you have any question?</h2>
          <div className="nameEmailPhone">
            <input type="text" placeholder="Your Name" className="input" />
            <input type="text" placeholder="Your Email" className="input" />
            <input type="text" placeholder="Your Phone" className="input" />
          </div>
          <textarea className="textArea" placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </form>
        <div className="officeContact">
          <div className="uyo">
            <h2>Uyo Office</h2>
            <p>
              <span className="icon">
                <MdLocationPin />
              </span>
              <span className="text">Osongama Estate Road</span>
            </p>
            <p>
              <span className="icon">
                <RiPhoneFill />
              </span>
              <span className="text">+2348038038030</span>
            </p>
            <p>
              <span className="icon">
                <GoMail />
              </span>
              <span className="text">contact@yuborentals.com</span>
            </p>
          </div>
          <div className="lagos">
            <h2>Lagos Office</h2>
            <p>
              <span className="icon">
                <MdLocationPin />
              </span>
              <span className="text">Ikoyi</span>
            </p>
            <p>
              <span className="icon">
                <RiPhoneFill />
              </span>
              <span className="text">+2348038038030</span>
            </p>
            <p>
              <span className="icon">
                <GoMail />
              </span>
              <span className="text">contact@yuborentals.com</span>
            </p>
          </div>
        </div>
      </ContactWrap>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  padding: 0 var(--smallPadding);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ContactWrap = styled.div`
  max-width: 480px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 100px 0;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    h2 {
      font-size: 1.5rem;
      color: var(--blackGrey);
    }
    .nameEmailPhone {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
    .input,
    .textArea {
      height: 2.8rem;
      font-size: 1rem;
      padding-left: 10px;
      letter-spacing: var(--small-spacing);
      outline: none;
      border: 1px solid var(--lightGrey);
      border-radius: var(--small-radius);
      width: 100%;
      background: var(--backgroundGrey);
      color: var(--blackGrey);
    }
    .textArea {
      height: 11rem;
      padding: 10px;
      resize: none;
    }
    button {
      border: none;
      background: var(--primaryColor);
      padding: 10px 30px;
      color: var(--mainWhite);
      font-size: 0.9rem;
      font-weight: 600;
      border-radius: var(--small-radius);
      border: 0.1px solid rgb(193, 191, 191);
      display: flex;
      align-self: flex-start;
      cursor: pointer;
      transition: var(--mainTransition);

      &:hover {
        background: var(--hoverColor);
      }
    }
  }
  .officeContact {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;

    div {
      border: 1px solid var(--lightGrey);
      border-radius: var(--small-radius);
      box-shadow: 3px 3px 9px rgba(164, 164, 186, 0.2);
      padding: 30px 30px 50px;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      h2 {
        font-size: 1.3rem;
        color: var(--blackGrey);
      }
      p {
        display: flex;
        gap: 0.5rem;

        .icon {
          color: var(--primaryColor);
          margin-top: 2px;
        }
        .text {
          color: var(--mainGrey);
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 650px;

    .nameEmailPhone {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: 1024px) {
    width: var(--width);
    margin-inline: var(--margin-inline);
    max-width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;
