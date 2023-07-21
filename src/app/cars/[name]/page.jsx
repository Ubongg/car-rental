"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Background from "@/components/background/background";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiTick,
} from "react-icons/ti";
import { RiPinterestFill, RiInstagramLine } from "react-icons/ri";

const CarDetail = ({ params }) => {
  let name = params.name;
  name = name.replace(/-/g, " ");

  let carName = name.split(" ");

  for (let i = 0; i < carName.length; i++) {
    carName[i] = carName[i][0].toUpperCase() + carName[i].substr(1);
  }

  const [pickDate, setPickDate] = useState(new Date());
  const [dropDate, setDropDate] = useState(new Date());

  const [slideOne, setSlideOne] = useState(true);
  const [slideTwo, setSlideTwo] = useState(false);
  const [slideThree, setSlideThree] = useState(false);
  const [slideFour, setSlideFour] = useState(false);

  const falseDate = (date) => new Date() < date;

  useEffect(() => {
    const pickUpDate = pickDate.toLocaleString();
    const dropOffDate = dropDate.toLocaleString();
    console.log(pickUpDate);
    console.log(dropOffDate);
    console.log(params);
  }, [pickDate, dropDate]);

  return (
    <div className={styles.carDetail}>
      <Background header="Vehicle Fleet" />
      <div className={styles.carDetailWrap}>
        <div className={styles.carDetailImages}>
          <div className={styles.carDetailBigImg}>
            {slideOne && (
              <Image
                src="/assets/slide1.jpeg"
                fill={true}
                alt=""
                className={styles.bigImg}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            )}
            {slideTwo && (
              <Image
                src="/assets/slide2.jpeg"
                fill={true}
                alt=""
                className={styles.bigImg}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            )}
            {slideThree && (
              <Image
                src="/assets/slide3.jpeg"
                fill={true}
                alt=""
                className={styles.bigImg}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            )}
            {slideFour && (
              <Image
                src="/assets/slide4.jpeg"
                fill={true}
                alt=""
                className={styles.bigImg}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            )}
          </div>
          <div className={styles.smallImages}>
            <div
              className={
                slideOne
                  ? styles.smallImg + " " + styles.active
                  : styles.smallImg
              }
              onClick={() => {
                setSlideOne(true);
                setSlideTwo(false);
                setSlideThree(false);
                setSlideFour(false);
              }}
            >
              <Image
                src="/assets/sslide1.jpeg"
                fill={true}
                alt=""
                className={styles.img}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div
              className={
                slideTwo
                  ? styles.smallImg + " " + styles.active
                  : styles.smallImg
              }
              onClick={() => {
                setSlideOne(false);
                setSlideTwo(true);
                setSlideThree(false);
                setSlideFour(false);
              }}
            >
              <Image
                src="/assets/sslide2.jpeg"
                fill={true}
                alt=""
                className={styles.img}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div
              className={
                slideThree
                  ? styles.smallImg + " " + styles.active
                  : styles.smallImg
              }
              onClick={() => {
                setSlideOne(false);
                setSlideTwo(false);
                setSlideThree(true);
                setSlideFour(false);
              }}
            >
              <Image
                src="/assets/sslide3.jpeg"
                fill={true}
                alt=""
                className={styles.img}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div
              className={
                slideFour
                  ? styles.smallImg + " " + styles.active
                  : styles.smallImg
              }
              onClick={() => {
                setSlideOne(false);
                setSlideTwo(false);
                setSlideThree(false);
                setSlideFour(true);
              }}
            >
              <Image
                src="/assets/sslide4.jpeg"
                fill={true}
                alt=""
                className={styles.img}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.head}>
            <h2>{carName.join(" ")}</h2>
            <p>
              The {carName.join(" ")} is the high-performance version of the 2
              Series 2-door coupé. The first generation of the{" "}
              {carName.join(" ")} is the F87 coupé and is powered by
              turbocharged.
            </p>
          </div>
          <div className={styles.specs}>
            <h2>Specifications</h2>
            <p className={styles.spec}>
              <span className={styles.key}>Body</span>
              <span className={styles.value}>Sedan</span>
            </p>
            <p className={styles.spec}>
              <span className={styles.key}>Seat</span>
              <span className={styles.value}>2 seats</span>
            </p>
            <p className={styles.spec}>
              <span className={styles.key}>Door</span>
              <span className={styles.value}>2 doors</span>
            </p>
            <p className={styles.spec}>
              <span className={styles.key}>Fuel Type</span>
              <span className={styles.value}>Hybrid</span>
            </p>
            <p className={styles.spec}>
              <span className={styles.key}>Year</span>
              <span className={styles.value}>2020</span>
            </p>
            <p className={styles.spec}>
              <span className={styles.key}>Transmission</span>
              <span className={styles.value}>Automatic</span>
            </p>
            <p className={styles.spec}>
              <span className={styles.key}>Drive</span>
              <span className={styles.value}>4WD</span>
            </p>
            <p className={styles.spec}>
              <span className={styles.key}>Exterior Color</span>
              <span className={styles.value}> Blue Metalic</span>
            </p>
            <p className={styles.spec}>
              <span className={styles.key}>Interior Color</span>
              <span className={styles.value}> Black</span>
            </p>
          </div>
          <div className={styles.features}>
            <h2>Features</h2>
            <div className={styles.feature}>
              <span className={styles.tick}>
                <TiTick />
              </span>
              <span className={styles.text}>Bluetooth</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.tick}>
                <TiTick />
              </span>
              <span className={styles.text}>Multimedia Player</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.tick}>
                <TiTick />
              </span>
              <span className={styles.text}>Central Lock</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.tick}>
                <TiTick />
              </span>
              <span className={styles.text}>Sunroof</span>
            </div>
          </div>
        </div>
        <div className={styles.booking}>
          <div className={styles.price}>
            <p>Daily rate</p>
            <h2>$265</h2>
          </div>
          <form className={styles.form}>
            <h5>Book the {carName.join(" ")}</h5>
            <label>Pick Up Location</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your pickup location"
            />
            <label>Drop Off Location</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your dropoff location"
            />
            <label>Pick Up Date & Time</label>
            <DatePicker
              showTimeSelect
              filterDate={falseDate}
              minTime={new Date(0, 0, 0, 9, 0)}
              maxTime={new Date(0, 0, 0, 19, 0)}
              selected={pickDate}
              onChange={(pickDate) => setPickDate(pickDate)}
              className={styles.input}
            />
            <label>Return Date & Time</label>
            <DatePicker
              showTimeSelect
              filterDate={falseDate}
              minTime={new Date(0, 0, 0, 9, 0)}
              maxTime={new Date(0, 0, 0, 19, 0)}
              selected={dropDate}
              onChange={(dropDate) => setDropDate(dropDate)}
              className={styles.input}
            />
            <button>Book Now</button>
          </form>
        </div>
        <div className={styles.share}>
          <div className={styles.header}>
            <h2>Share</h2>
          </div>
          <div className={styles.socials}>
            <span className={styles.icon}>
              <TiSocialTwitter />
            </span>
            <span className={styles.icon}>
              <TiSocialFacebook />
            </span>
            <span className={styles.icon}>
              <TiSocialLinkedin />
            </span>
            <span className={styles.icon}>
              <RiPinterestFill />
            </span>
            <span className={styles.icon}>
              <RiInstagramLine />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
