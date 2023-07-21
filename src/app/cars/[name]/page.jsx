"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";
import DatePicker from "react-datepicker";
import { useSession } from "next-auth/react";
import useSWR from "swr";
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
import Link from "next/link";

const CarDetail = ({ params }) => {
  // replace '-' with ' ' in params and capitalize first letter of every word
  let name = params.name;
  name = name.replace(/-/g, " ");

  // turn string into an array
  let carName = name.split(" ");

  for (let i = 0; i < carName.length; i++) {
    carName[i] = carName[i][0].toUpperCase() + carName[i].substr(1);
  }

  // setup pick up and drop off date
  const [pickDate, setPickDate] = useState(new Date());
  const [dropDate, setDropDate] = useState(new Date());

  // convert date to local string
  const pickCarDate = pickDate.toLocaleString();
  const dropCarDate = dropDate.toLocaleString();

  // image slider
  const [slideOne, setSlideOne] = useState(true);
  const [slideTwo, setSlideTwo] = useState(false);
  const [slideThree, setSlideThree] = useState(false);
  const [slideFour, setSlideFour] = useState(false);

  // can't pick dates before present date
  const falseDate = (date) => new Date() < date;
  const returnDate = (date) => date > pickDate;

  const session = useSession();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/orders?username=${session?.data?.user.name}`,
    fetcher
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pickUpLocation = e.target[0].value;
    const dropOffLocation = e.target[1].value;
    const pickUpDate = e.target[2].value;
    const returnDate = e.target[3].value;

    try {
      await fetch("/api/orders", {
        method: "POST",
        body: JSON.stringify({
          pickUpLocation,
          dropOffLocation,
          pickUpDate: pickCarDate,
          returnDate: dropCarDate,
          username: session.data.user.name,
          carName: carName.join(" "),
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

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
          {session.status === "authenticated" && (
            <form className={styles.form} onSubmit={handleSubmit}>
              <h5>Book the {carName.join(" ")}</h5>
              <label>Pick Up Location</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Enter your pickup location"
                required
              />
              <label>Drop Off Location</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Enter your dropoff location"
                required
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
                required
              />
              <label>Return Date & Time</label>
              <DatePicker
                showTimeSelect
                filterDate={returnDate}
                minTime={new Date(0, 0, 0, 9, 0)}
                maxTime={new Date(0, 0, 0, 19, 0)}
                selected={dropDate}
                onChange={(dropDate) => setDropDate(dropDate)}
                className={styles.input}
                required
              />
              <button>Book Now</button>
            </form>
          )}
          {session.status === "unauthenticated" && (
            <div className={styles.loginToBook}>
              <h5>Book the {carName.join(" ")}</h5>
              <button>
                <Link href="/dashboard">Sign in to Book</Link>
              </button>
            </div>
          )}
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
    </div>
  );
};

export default CarDetail;
