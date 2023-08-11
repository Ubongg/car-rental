"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Background from "@/components/background/background";
import { useSpring, animated } from "@react-spring/web";
import ScrollTrigger from "react-scroll-trigger";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";
import { RiPinterestFill } from "react-icons/ri";
import { BsTrophyFill } from "react-icons/bs";
import { ImRoad } from "react-icons/im";
import { FaMapPin, FaTag } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const About = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [luxury, setLuxury] = useState(true);
  const [comfort, setComfort] = useState(false);
  const [prestige, setPrestige] = useState(false);

  return (
    <div className={styles.about}>
      <Background header="About" />
      <div className={styles.aboutWrap}>
        <div className={styles.aboutSec1}>
          <h2>
            We offer customers a wide range of{" "}
            <span style={{ color: "var(--primaryColor)" }}>
              commercial cars
            </span>{" "}
            and{" "}
            <span style={{ color: "var(--primaryColor)" }}>luxury cars</span>{" "}
            for any occasion.
          </h2>
          <p>
            At Yubo Rentals, we are dedicated to providing exceptional car
            rental services to our valued customers. With a commitment to
            quality, convenience, and customer satisfaction, we strive to make
            every rental experience a seamless and enjoyable one. We understand
            that every customer has unique needs and preferences when it comes
            to renting a car. That is why we maintain a diverse fleet of
            well-maintained vehicles to cater to various requirements. From
            compact cars for solo travelers to spacious SUVs for families, we
            have a wide range of options to choose from.
          </p>
        </div>
        <ScrollTrigger onEnter={() => setCounterOn(true)}>
          <div className={styles.scrollCount}>
            <div className={styles.count}>
              <h2>{counterOn && <Number n={15425} />}</h2>
              <p>Hours of Work</p>
            </div>
            <div className={styles.count}>
              <h2>{counterOn && <Number n={8745} />}</h2>
              <p>Clients Supported</p>
            </div>
            <div className={styles.count}>
              <h2>{counterOn && <Number n={235} />}</h2>
              <p>Awards Winning</p>
            </div>
            <div className={styles.count}>
              <h2>{counterOn && <Number n={15} />}</h2>
              <p>Years Experience</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
      <div className={styles.board}>
        <div className={styles.boardWrap}>
          <h2>Board of Directors</h2>
          <div className={styles.directors}>
            <div className={styles.director}>
              <div
                className={styles.imgBx}
                style={{
                  background: "url('/assets/board1.jpeg')",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className={styles.icons}>
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
                </div>
              </div>
              <div className={styles.textBx}>
                <h5>Fynley Wilkinson</h5>
                <p>Chief Creative Officer</p>
              </div>
            </div>
            <div className={styles.director}>
              <div
                className={styles.imgBx}
                style={{
                  background: "url('/assets/board2.jpeg')",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className={styles.icons}>
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
                </div>
              </div>
              <div className={styles.textBx}>
                <h5>Peter Welsh</h5>
                <p>Chief Technology Officer</p>
              </div>
            </div>
            <div className={styles.director}>
              <div
                className={styles.imgBx}
                style={{
                  background: "url('/assets/board3.jpeg')",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className={styles.icons}>
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
                </div>
              </div>
              <div className={styles.textBx}>
                <h5>John Shepard</h5>
                <p>Chief Executive Officer</p>
              </div>
            </div>
            <div className={styles.director}>
              <div
                className={styles.imgBx}
                style={{
                  background: "url('/assets/board4.jpeg')",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className={styles.icons}>
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
                </div>
              </div>
              <div className={styles.textBx}>
                <h5>Robyn Peel</h5>
                <p>Director of Finance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.featuresWrap}>
          <h2>Features Highlight</h2>
          <div className={styles.featuresList}>
            <div className={styles.left}>
              <div className={styles.feature}>
                <span className={styles.icon}>
                  <BsTrophyFill />
                </span>
                <div className={styles.text}>
                  <h5>First class services</h5>
                  <p>
                    Where luxury meets exceptional care, creating unforgettable
                    moments and exceeding your every expectation.
                  </p>
                </div>
              </div>
              <div className={styles.feature}>
                <span className={styles.icon}>
                  <ImRoad />
                </span>
                <div className={styles.text}>
                  <h5>24/7 road assistance</h5>
                  <p>
                    Reliable support when you need it most, keeping you on the
                    move with confidence and peace of mind.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.center}>
              <div className={styles.feature}>
                <div className={styles.img}>
                  <Image
                    src="/assets/black.png"
                    fill={true}
                    alt=""
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.feature}>
                <div className={styles.text}>
                  <h5>Quality at Minimum Expense</h5>
                  <p>
                    Unlocking affordable brilliance with elevating quality while
                    minimizing costs for maximum value.
                  </p>
                </div>
                <span className={styles.icon}>
                  <FaTag />
                </span>
              </div>
              <div className={styles.feature}>
                <div className={styles.text}>
                  <h5>First class services</h5>
                  <p>
                    Enjoy free pickup and drop-off services, adding an extra
                    layer of ease to your car rental experience.
                  </p>
                </div>
                <span className={styles.icon}>
                  <FaMapPin />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.quality}>
        <div className={styles.qualityImg}></div>
        <div className={styles.qualityWrap}>
          <h2>Only Quality For Clients</h2>
          <div className={styles.qualities}>
            <div className={styles.singleQuality}>
              <button
                className={
                  luxury ? styles.luxuryButton : styles.luxuryButtonHide
                }
                onClick={() => {
                  setLuxury(true);
                  setComfort(false);
                  setPrestige(false);
                }}
              >
                LUXURY
              </button>
              <button
                className={
                  comfort ? styles.comfortButton : styles.comfortButtonHide
                }
                onClick={() => {
                  setLuxury(false);
                  setComfort(true);
                  setPrestige(false);
                }}
              >
                COMFORT
              </button>
              <button
                className={
                  prestige ? styles.prestigeButton : styles.prestigeButtonHide
                }
                onClick={() => {
                  setLuxury(false);
                  setComfort(false);
                  setPrestige(true);
                }}
              >
                PRESTIGE
              </button>
            </div>
            <p className={luxury ? styles.luxury : styles.luxuryHide}>
              We offer a meticulously curated collection of the most
              sought-after luxury vehicles on the market. Whether you prefer the
              sporty allure of a high-performance sports car, the sophistication
              of a sleek and luxurious sedan, or the versatility of a premium
              SUV, we have the perfect car to match your discerning taste.
            </p>
            <p className={comfort ? styles.comfort : styles.comfortHide}>
              We prioritize your comfort and convenience throughout your
              journey. We understand that a comfortable ride can make a world of
              difference, whether you are embarking on a business trip or
              enjoying a leisurely vacation. That is why we offer a wide range
              of well-maintained, comfortable cars that cater to your specific
              needs.
            </p>
            <p className={prestige ? styles.prestige : styles.prestigeHide}>
              We understand that prestige goes beyond luxury. It is about making
              a statement, embracing sophistication, and indulging in the finer
              things in life. That is why we offer an exclusive selection of
              prestigious cars that exude elegance, style, and status.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.homeContact}>
        <div className={styles.homeContactWrap}>
          <h2>
            Call us for further information. Yubo Rentals customer care is here
            to help you anytime.
          </h2>
          <button>
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
