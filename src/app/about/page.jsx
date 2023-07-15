"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Background from "@/components/background/background";
import { useSpring, animated } from "@react-spring/web";
import ScrollTrigger from "react-scroll-trigger";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiPinterestFill } from "react-icons/ri";

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
            to renting a car. That's why we maintain a diverse fleet of
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
        <div className={styles.board}>
          <div className={styles.boardWrap}>
            <h2>Board of Directors</h2>
            <div className={styles.directors}>
              <div className={styles.director}>
                <div className={styles.imgBx}>
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
                <div className={styles.imgBx}>
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
                <div className={styles.imgBx}>
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
                  <h5>John Shepard Wilkinson</h5>
                  <p>Chief Executive Officer</p>
                </div>
              </div>
              <div className={styles.director}>
                <div className={styles.imgBx}>
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
      </div>
    </div>
  );
};

export default About;
