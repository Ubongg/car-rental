"use client";

import React from "react";
import Background from "@/components/background/background";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaTags } from "react-icons/fa";

const News = () => {
  return (
    <Container>
      <Background header="News & Updates" />
      <NewsWrap>
        <div className="newsList">
          <div className="singleNews">
            <div className="imgBx">
              <Image
                src="/assets/blog1.jpeg"
                fill={true}
                alt=""
                priority
                className="img"
              />
            </div>
            <div className="info">
              <p>
                <span className="icon">
                  <FaUser />
                </span>
                <span className="text">By John Smith</span>
              </p>
              <p>
                <span className="icon">
                  <FaCalendarAlt />
                </span>
                <span className="text">June 15, 2022</span>
              </p>
              <p>
                <span className="icon">
                  <FaTags />
                </span>
                <span className="text">Technology</span>
              </p>
            </div>
            <div className="textBx">
              <h2>Enjoy Best Travel Experience</h2>
              <p>
                Ex ut dolore laboris pariatur voluptate reprehenderit qui dolore
                officia voluptate est nulla incididunt in tempor aliqua
                incididunt cupidatat ut cupidatat qui consectetur cillum id
                labore sunt id sint magna exercitation enim.
              </p>
              <button>
                <Link href="/news/1">Rent Now</Link>
              </button>
            </div>
          </div>
          <div className="singleNews">
            <div className="imgBx">
              <Image
                src="/assets/blog2.jpeg"
                fill={true}
                alt=""
                priority
                className="img"
              />
            </div>
            <div className="info">
              <p>
                <span className="icon">
                  <FaUser />
                </span>
                <span className="text">By John Smith</span>
              </p>
              <p>
                <span className="icon">
                  <FaCalendarAlt />
                </span>
                <span className="text">June 15, 2022</span>
              </p>
              <p>
                <span className="icon">
                  <FaTags />
                </span>
                <span className="text">Technology</span>
              </p>
            </div>
            <div className="textBx">
              <h2>The Future of Car Rent</h2>
              <p>
                Ex ut dolore laboris pariatur voluptate reprehenderit qui dolore
                officia voluptate est nulla incididunt in tempor aliqua
                incididunt cupidatat ut cupidatat qui consectetur cillum id
                labore sunt id sint magna exercitation enim.
              </p>
              <button>
                <Link href="/news/1">Rent Now</Link>
              </button>
            </div>
          </div>
          <div className="singleNews">
            <div className="imgBx">
              <Image
                src="/assets/blog3.jpeg"
                fill={true}
                alt=""
                priority
                className="img"
              />
            </div>
            <div className="info">
              <p>
                <span className="icon">
                  <FaUser />
                </span>
                <span className="text">By John Smith</span>
              </p>
              <p>
                <span className="icon">
                  <FaCalendarAlt />
                </span>
                <span className="text">June 15, 2022</span>
              </p>
              <p>
                <span className="icon">
                  <FaTags />
                </span>
                <span className="text">Technology</span>
              </p>
            </div>
            <div className="textBx">
              <h2>Holiday Tips For Backpacker</h2>
              <p>
                Ex ut dolore laboris pariatur voluptate reprehenderit qui dolore
                officia voluptate est nulla incididunt in tempor aliqua
                incididunt cupidatat ut cupidatat qui consectetur cillum id
                labore sunt id sint magna exercitation enim.
              </p>
              <button>
                <Link href="/news/1">Rent Now</Link>
              </button>
            </div>
          </div>
          <div className="singleNews">
            <div className="imgBx">
              <Image
                src="/assets/blog4.jpeg"
                fill={true}
                alt=""
                priority
                className="img"
              />
            </div>
            <div className="info">
              <p>
                <span className="icon">
                  <FaUser />
                </span>
                <span className="text">By John Smith</span>
              </p>
              <p>
                <span className="icon">
                  <FaCalendarAlt />
                </span>
                <span className="text">June 15, 2022</span>
              </p>
              <p>
                <span className="icon">
                  <FaTags />
                </span>
                <span className="text">Technology</span>
              </p>
            </div>
            <div className="textBx">
              <h2>Travel Destination For Couple</h2>
              <p>
                Ex ut dolore laboris pariatur voluptate reprehenderit qui dolore
                officia voluptate est nulla incididunt in tempor aliqua
                incididunt cupidatat ut cupidatat qui consectetur cillum id
                labore sunt id sint magna exercitation enim.
              </p>
              <button>
                <Link href="/news/1">Rent Now</Link>
              </button>
            </div>
          </div>
          <div className="singleNews">
            <div className="imgBx">
              <Image
                src="/assets/blog5.jpeg"
                fill={true}
                alt=""
                priority
                className="img"
              />
            </div>
            <div className="info">
              <p>
                <span className="icon">
                  <FaUser />
                </span>
                <span className="text">By John Smith</span>
              </p>
              <p>
                <span className="icon">
                  <FaCalendarAlt />
                </span>
                <span className="text">June 15, 2022</span>
              </p>
              <p>
                <span className="icon">
                  <FaTags />
                </span>
                <span className="text">Technology</span>
              </p>
            </div>
            <div className="textBx">
              <h2>The Essential Guide to Hotel</h2>
              <p>
                Ex ut dolore laboris pariatur voluptate reprehenderit qui dolore
                officia voluptate est nulla incididunt in tempor aliqua
                incididunt cupidatat ut cupidatat qui consectetur cillum id
                labore sunt id sint magna exercitation enim.
              </p>
              <button>
                <Link href="/news/1">Rent Now</Link>
              </button>
            </div>
          </div>
          <div className="singleNews">
            <div className="imgBx">
              <Image
                src="/assets/blog6.jpeg"
                fill={true}
                alt=""
                priority
                className="img"
              />
            </div>
            <div className="info">
              <p>
                <span className="icon">
                  <FaUser />
                </span>
                <span className="text">By John Smith</span>
              </p>
              <p>
                <span className="icon">
                  <FaCalendarAlt />
                </span>
                <span className="text">June 15, 2022</span>
              </p>
              <p>
                <span className="icon">
                  <FaTags />
                </span>
                <span className="text">Technology</span>
              </p>
            </div>
            <div className="textBx">
              <h2>Travel on a Budget</h2>
              <p>
                Ex ut dolore laboris pariatur voluptate reprehenderit qui dolore
                officia voluptate est nulla incididunt in tempor aliqua
                incididunt cupidatat ut cupidatat qui consectetur cillum id
                labore sunt id sint magna exercitation enim.
              </p>
              <button>
                <Link href="/news/1">Read More</Link>
              </button>
            </div>
          </div>
        </div>
      </NewsWrap>
    </Container>
  );
};

export default News;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 var(--smallPadding);
`;
const NewsWrap = styled.div`
  padding: 100px 0;
  max-width: 480px;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 650px;
  }
  @media screen and (min-width: 1024px) {
    width: var(--width);
    margin-inline: var(--margin-inline);
    max-width: 100%;
  }

  .newsList {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .singleNews {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .imgBx {
        position: relative;
        width: 100%;
        height: 200px;

        @media screen and (min-width: 768px) {
          height: 350px;
        }
        @media screen and (min-width: 1024px) {
          height: 200px;
        }

        .img {
          border-radius: var(--radius);
        }
      }
      .info {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        p {
          display: flex;
          gap: 0.4rem;
          align-items: center;

          .icon {
            color: var(--primaryColor);
            font-size: 1rem;
          }

          .text {
            font-size: 0.8rem;
            color: var(--mainGrey);
          }
        }
      }
      .textBx {
        h2 {
          color: var(--blackGrey);
          font-size: 1.15rem;
        }
        p {
          color: var(--mainGrey);
          letter-spacing: var(--small-spacing);
          line-height: var(--line-height);
          margin: 10px 0 15px;
        }
        button {
          border: none;
          border-radius: var(--radius);

          a {
            display: flex;
            background: var(--primaryColor);
            padding: 10px 30px;
            color: var(--mainWhite);
            font-size: 0.9rem;
            font-weight: 600;
            border-radius: var(--small-radius);
          }
        }
      }
    }
  }
`;
